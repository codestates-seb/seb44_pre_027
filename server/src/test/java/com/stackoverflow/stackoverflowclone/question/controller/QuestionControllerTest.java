package com.stackoverflow.stackoverflowclone.question.controller;

import com.google.gson.Gson;
import com.stackoverflow.stackoverflowclone.answer.dto.AnswerDto;
import com.stackoverflow.stackoverflowclone.answer.entity.Answer;
import com.stackoverflow.stackoverflowclone.comment.dto.CommentDto;
import com.stackoverflow.stackoverflowclone.comment.entity.Comment;
import com.stackoverflow.stackoverflowclone.member.auth.config.SecurityConfiguration;
import com.stackoverflow.stackoverflowclone.member.entity.Member;
import com.stackoverflow.stackoverflowclone.question.dto.QuestionDto;
import com.stackoverflow.stackoverflowclone.question.entity.Question;
import com.stackoverflow.stackoverflowclone.question.mapper.QuestionMapper;
import com.stackoverflow.stackoverflowclone.question.service.QuestionService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static com.stackoverflow.stackoverflowclone.util.ApiDocumentUtils.getRequestPreProcessor;
import static com.stackoverflow.stackoverflowclone.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
import static org.springframework.restdocs.headers.HeaderDocumentation.responseHeaders;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(
        controllers = {QuestionController.class}, // 테스트 하고자 하는 Controller를 지정한다.
        excludeAutoConfiguration = SecurityAutoConfiguration.class, // Spring Security의 자동 구성을 사용하지 않도록 한다.
        excludeFilters = {      // 테스트 수행 시, 사용하지 않을 필터를 지정한다. 여기서는 SecurityConfiguration에서 설정하는 필터를 제외한다.
                @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE,
                        classes = SecurityConfiguration.class)
        }
) //Controller를 테스트 하기 위한 구조
@MockBean(JpaMetamodelMappingContext.class)  // JPA에서 사용하는 Bean들을 Mock 객체로 주입하는 설정
@AutoConfigureRestDocs // Spring Rest Docs에 대한 자동 구성
public class QuestionControllerTest {

    @Autowired
    private Gson gson;

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private QuestionService questionService;

    @MockBean
    private QuestionMapper mapper;


    @Test
    @DisplayName("질문 등록 테스트")
    public void postTodoTest() throws Exception {

        // given
        Member member = new Member("닉네임","hihi@naver.com","hihihi1212","지역","title","content");
        member.setMemberId(1L);

        QuestionDto.Post post = new QuestionDto.Post(member.getMemberId(), "질문", "내용");
        String content = gson.toJson(post);  // json으로 변경

        QuestionDto.postResponse response = new QuestionDto.postResponse(1L);

        // stubbing
        given(mapper.QuestionPostDtoToQuestion(Mockito.any(QuestionDto.Post.class))).willReturn(new Question());

        Question mockResultQuestion = new Question();
        mockResultQuestion.setQuestionId(1L);

        given(questionService.createQuestion(Mockito.any(Question.class))).willReturn(mockResultQuestion);
        given(mapper.QuestionToQuestionPostResponseDto(mockResultQuestion)).willReturn(response);

        // when
        ResultActions actions = mockMvc.perform(
                post("/questions")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );

        // then
        actions
                .andDo(print())
                .andExpect(status().isCreated())
                //========== API 문서화 관련 코드 ==========//
                .andDo(document("post-question", // 식별자
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        /** request body **/
                        requestFields(
                                List.of(
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("질문 제목"),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("질문 본문")
                                )
                        ),
                        /** response header **/

                        responseHeaders(
                                headerWithName(HttpHeaders.LOCATION).description("Location header. 등록된 리소스의 URI")
                        ),

                        responseFields(
                                fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문 식별자")
                        )
                ));
        //============ API 문서화 관련 코드 끝 ==========//

    }


    @Test
    @DisplayName("질문 수정 테스트")
    public void patchQuestionTest() throws Exception{

        // given
        long Id = 1L;
        QuestionDto.Patch patch = new QuestionDto.Patch("질문 수정", "본문 수정");
        patch.addQuestionId(Id);

        String content = gson.toJson(patch);

        // stubbing
        given(mapper.QuestionPatchDtoToQuestion(Mockito.any(QuestionDto.Patch.class))).willReturn(new Question());

        given(questionService.updateQuestion(Mockito.any(Question.class))).willReturn(new Question());

        // when
        ResultActions actions = mockMvc.perform(
                patch("/questions/{question-id}", Id)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );

        // then
        actions
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("patch-question",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        /** 파라미터 **/
                        pathParameters(
                                parameterWithName("question-id").description("question 식별자")
                        ),
                        /** Request body **/
                        requestFields(
                                List.of(
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문 식별자").ignored(),
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("질문 제목").optional(),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("질문 본문").optional()
                                )
                        )
                ));
    }


    @Test
    @DisplayName("질문 개별 조회 테스트")
    public void getQuestionTest() throws Exception{

        // given
        long Id = 1L;
        Question question = new Question("제목","본문",3,4);
        question.setQuestionId(Id);

        List<Answer> answers = createMockAnswers(question);
        question.setAnswers(answers);

        List<Comment> comments = new ArrayList<>();
        Comment comment = new Comment();
        comment.setCommentId(1L);
        comment.setQuestion(question);
        comments.add(comment);
        question.setComments(comments);

        AnswerDto.Response answerResponse = new AnswerDto.Response(
             1L,
                1L,
                "닉네임",
                "답변 본문",
                1L,
                LocalDateTime.now(),
                LocalDateTime.now()
        );

        List<AnswerDto.Response> answerResponses = new ArrayList<>();
        answerResponses.add(answerResponse);


        CommentDto.Response commentResponse = new CommentDto.Response(
                1L,
                "댓글",
                1L,
                "닉네임",
                LocalDateTime.now(),
                LocalDateTime.now()
        );

        List<CommentDto.Response> commentResponses = new ArrayList<>();
        commentResponses.add(commentResponse);


        QuestionDto.Response response = new QuestionDto.Response(
                1L,
                "닉네임",
                "제목",
                "본문",
                LocalDateTime.now(),
                LocalDateTime.now(),
                3,
                4,
                answerResponses,
                commentResponses
        );

        // stubbing
        given(questionService.findQuestion(Mockito.anyLong())).willReturn(new Question());
        given(mapper.QuestionToQuestionResponseDto(Mockito.any(Question.class))).willReturn(response);

        // when
        ResultActions actions = mockMvc.perform(
                get("/questions/{question-id}", Id)
                .accept(MediaType.APPLICATION_JSON)
        );

        // then
        actions.andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.questionId").value(question.getQuestionId()))
                .andExpect(jsonPath("$.title").value(question.getTitle()))
                .andExpect(jsonPath("$.content").value(question.getContent()))
                .andExpect(jsonPath("$.views").value(question.getViews()))
                .andExpect(jsonPath("$.voteScore").value(question.getVoteScore()))
                .andExpect(jsonPath("$.answers", hasSize(answers.size())))
                .andDo(document("get-question",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        /** 파라미터 **/
                        pathParameters(
                                parameterWithName("question-id").description("질문 식별자")
                        ),
                        /** Response body **/
                        responseFields(
                                List.of(
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문 식별자"),
                                        fieldWithPath("nickname").type(JsonFieldType.STRING).description("닉네임"),
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("제목"),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("본문"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("생성일"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("수정일"),
                                        fieldWithPath("views").type(JsonFieldType.NUMBER).description("조회수"),
                                        fieldWithPath("voteScore").type(JsonFieldType.NUMBER).description("투표 수"),

                                        fieldWithPath("answers").type(JsonFieldType.ARRAY).description("답변 목록"),
                                        fieldWithPath("answers[].answerId").type(JsonFieldType.NUMBER).description("답변 식별자"),
                                        fieldWithPath("answers[].questionId").type(JsonFieldType.NUMBER).description("질문 식별자"),
                                        fieldWithPath("answers[].nickname").type(JsonFieldType.STRING).description("답변자 닉네임"),
                                        fieldWithPath("answers[].content").type(JsonFieldType.STRING).description("답변 내용"),
                                        fieldWithPath("answers[].memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("answers[].createdAt").type(JsonFieldType.STRING).description("답변 생성일"),
                                        fieldWithPath("answers[].modifiedAt").type(JsonFieldType.STRING).description("답변 수정일"),

                                        fieldWithPath("comments").type(JsonFieldType.ARRAY).description("댓글 목록"),
                                        fieldWithPath("comments[].commentId").type(JsonFieldType.NUMBER).description("댓글 식별자"),
                                        fieldWithPath("comments[].content").type(JsonFieldType.STRING).description("댓글 내용"),
                                        fieldWithPath("comments[].memberId").type(JsonFieldType.NUMBER).description("댓글을 단 회원의 식별자"),
                                        fieldWithPath("comments[].nickname").type(JsonFieldType.STRING).description("댓글을 단 회원의 닉네임"),
                                        fieldWithPath("comments[].createdAt").type(JsonFieldType.STRING).description("댓글 생성일"),
                                        fieldWithPath("comments[].modifiedAt").type(JsonFieldType.STRING).description("댓글 수정일")
                                )
                        )
                ));
    }

    /** MockAnswer 생성 **/
    private List<Answer> createMockAnswers(Question question) {
        List<Answer> answers = new ArrayList<>();

        Answer answer1 = new Answer("답변1");
        answer1.setAnswerId(1L);
        answer1.setQuestion(question);
        answers.add(answer1);
        return answers;
    }




    @Test
    @DisplayName("전체 질문 목록 조회")
    public void getQuestionsTest() throws Exception{

        // given
        Question question1 = new Question("제목1","본문1",1,1);
        Question question2 = new Question("제목2","본문2",2,2);

        List<Answer> answers1 = new ArrayList<>();
        Answer answer1 = new Answer("답변1");
        answer1.setAnswerId(1L);
        answer1.setQuestion(question1);
        answers1.add(answer1);

        List<Answer> answers2 = new ArrayList<>();
        Answer answer2 = new Answer("답변2");
        answer2.setAnswerId(2L);
        answer2.setQuestion(question2);
        answers2.add(answer2);


        question1.setAnswers(answers1);
        question2.setAnswers(answers2);

        // comment
        List<Comment> comments1 = new ArrayList<>();
        Comment comment1 = new Comment();
        comment1.setCommentId(1L);
        comment1.setQuestion(question1);
        comments1.add(comment1);
        question1.setComments(comments1);

        List<Comment> comments2 = new ArrayList<>();
        Comment comment2 = new Comment();
        comment2.setCommentId(2L);
        comment2.setQuestion(question2);
        comments2.add(comment2);
        question2.setComments(comments2);

        PageImpl<Question> pageQuestions =
                new PageImpl<>(List.of(question1,question2),
                        PageRequest.of(0,5, Sort.by("questionId").descending()),2);


        AnswerDto.Response answerResponse1 = new AnswerDto.Response(
                1L,
                1L,
                "닉네임1",
                "답변1",
                1L,
                LocalDateTime.now(),
                LocalDateTime.now()
        );

        List<AnswerDto.Response> answerResponses1 = new ArrayList<>();
        answerResponses1.add(answerResponse1);

        AnswerDto.Response answerResponse2 = new AnswerDto.Response(
                2L,
                2L,
                "닉네임2",
                "답변2",
                2L,
                LocalDateTime.now(),
                LocalDateTime.now()
        );

        List<AnswerDto.Response> answerResponses2 = new ArrayList<>();
        answerResponses2.add(answerResponse2);

        CommentDto.Response commentResponse1 = new CommentDto.Response(
                1L,
                "댓글1",
                1L,
                "닉네임1",
                LocalDateTime.now(),
                LocalDateTime.now()
        );

        List<CommentDto.Response> commentResponses1 = new ArrayList<>();
        commentResponses1.add(commentResponse1);

        CommentDto.Response commentResponse2 = new CommentDto.Response(
                2L,
                "댓글2",
                2L,
                "닉네임2",
                LocalDateTime.now(),
                LocalDateTime.now()
        );

        List<CommentDto.Response> commentResponses2 = new ArrayList<>();
        commentResponses2.add(commentResponse2);

        List<QuestionDto.Response> responses = List.of(
                new QuestionDto.Response(
                        1L,
                        "닉네임1",
                        "제목1",
                        "본문1",
                        LocalDateTime.now(),
                        LocalDateTime.now(),
                        1,
                        1,
                        answerResponses1,
                        commentResponses1
                ),
                new QuestionDto.Response(
                        2L,
                        "닉네임2",
                        "제목2",
                        "본문2",
                        LocalDateTime.now(),
                        LocalDateTime.now(),
                        2,
                        2,
                        answerResponses2,
                        commentResponses2
                )
        );

        // Stubbing 메서드
        given(questionService.findQuestions(Mockito.anyInt(), Mockito.anyString())).willReturn(pageQuestions);
        given(mapper.QuestionsToQuestionResponseDtos(Mockito.anyList())).willReturn(responses);

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("page","1");
        params.add("sort","new");


        // when
        ResultActions actions = mockMvc.perform(
                get("/questions")
                        .params(params)
                        .accept(MediaType.APPLICATION_JSON)
        );

        // then
        actions.andDo(print())
                .andExpect(status().isOk())
                // 배열 형태로
                .andExpect(jsonPath("$.data").isArray())
                .andDo(document("get-questions",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestParameters(
                                parameterWithName("page").description("페이지 번호"),
                                parameterWithName("sort").description("정렬 기준 (new, views, votes)")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data").type(JsonFieldType.ARRAY).description("질문 목록"),
                                        fieldWithPath("data[].questionId").type(JsonFieldType.NUMBER).description("질문 식별자"),
                                        fieldWithPath("data[].nickname").type(JsonFieldType.STRING).description("닉네임"),
                                        fieldWithPath("data[].title").type(JsonFieldType.STRING).description("제목"),
                                        fieldWithPath("data[].content").type(JsonFieldType.STRING).description("본문"),
                                        fieldWithPath("data[].createdAt").type(JsonFieldType.STRING).description("생성일"),
                                        fieldWithPath("data[].modifiedAt").type(JsonFieldType.STRING).description("수정일"),
                                        fieldWithPath("data[].views").type(JsonFieldType.NUMBER).description("조회수"),
                                        fieldWithPath("data[].voteScore").type(JsonFieldType.NUMBER).description("투표 수"),

                                        fieldWithPath("data[].answers").type(JsonFieldType.ARRAY).description("질문의 답변 목록"),
                                        fieldWithPath("data[].answers[].answerId").type(JsonFieldType.NUMBER).description("답변 식별자"),
                                        fieldWithPath("data[].answers[].questionId").type(JsonFieldType.NUMBER).description("질문 식별자"),
                                        fieldWithPath("data[].answers[].nickname").type(JsonFieldType.STRING).description("답변자 닉네임"),
                                        fieldWithPath("data[].answers[].content").type(JsonFieldType.STRING).description("답변 내용"),
                                        fieldWithPath("data[].answers[].memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("data[].answers[].createdAt").type(JsonFieldType.STRING).description("답변 생성일"),
                                        fieldWithPath("data[].answers[].modifiedAt").type(JsonFieldType.STRING).description("답변 수정일"),

                                        fieldWithPath("data[].comments").type(JsonFieldType.ARRAY).description("댓글 목록"),
                                        fieldWithPath("data[].comments[].commentId").type(JsonFieldType.NUMBER).description("댓글 식별자"),
                                        fieldWithPath("data[].comments[].content").type(JsonFieldType.STRING).description("댓글 내용"),
                                        fieldWithPath("data[].comments[].memberId").type(JsonFieldType.NUMBER).description("댓글을 단 회원의 식별자"),
                                        fieldWithPath("data[].comments[].nickname").type(JsonFieldType.STRING).description("댓글을 단 회원의 닉네임"),
                                        fieldWithPath("data[].comments[].createdAt").type(JsonFieldType.STRING).description("댓글 생성일"),
                                        fieldWithPath("data[].comments[].modifiedAt").type(JsonFieldType.STRING).description("댓글 수정일"),

                                        fieldWithPath("pageInfo").type(JsonFieldType.OBJECT).description("페이지 정보"),
                                        fieldWithPath("pageInfo.page").type(JsonFieldType.NUMBER).description("페이지 번호"),
                                        fieldWithPath("pageInfo.size").type(JsonFieldType.NUMBER).description("페이지 사이즈"),
                                        fieldWithPath("pageInfo.totalElements").type(JsonFieldType.NUMBER).description("전체 질문 수"),
                                        fieldWithPath("pageInfo.totalPages").type(JsonFieldType.NUMBER).description("전체 페이지 수")
                                )
                        )
                ));

    }



    @Test
    @DisplayName("질문 검색 테스트")
    public void searchQuestionTest() throws Exception{

        // given
        Question question1 = new Question("제목1","본문1",1,1);
        Question question2 = new Question("제목2","본문2",2,2);

        PageImpl<Question> pageQuestions =
                new PageImpl<>(List.of(question1,question2),
                        PageRequest.of(0,5, Sort.by("questionId").descending()),2);


        List<QuestionDto.SearchResponse> responses = List.of(
                new QuestionDto.SearchResponse(
                        1L,
                        "닉네임1",
                        "제목1",
                        "본문1",
                        1,
                        1
                ),
                new QuestionDto.SearchResponse(
                        2L,
                        "닉네임2",
                        "제목2",
                        "본문2",
                        2,
                        2
                )
        );

        // Stubbing 메서드
        given(questionService.searchQuestion(Mockito.anyInt(), Mockito.anyString())).willReturn(pageQuestions);
        given(mapper.QuestionsToQuestionSearchResponseDtos(Mockito.anyList())).willReturn(responses);


        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("page","1");
        params.add("keyword","1");

        // when
        ResultActions actions = mockMvc.perform(
                get("/questions/search")
                        .params(params)
                        .accept(MediaType.APPLICATION_JSON)
        );

        // then
        actions.andDo(print())
                .andExpect(status().isOk())
                .andDo(document("search-question",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestParameters(
                                parameterWithName("page").description("페이지 번호"),
                                parameterWithName("keyword").description("검색어")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data").type(JsonFieldType.ARRAY).description("질문 목록"),
                                        fieldWithPath("data[].questionId").type(JsonFieldType.NUMBER).description("질문 식별자"),
                                        fieldWithPath("data[].nickname").type(JsonFieldType.STRING).description("작성자 닉네임"),
                                        fieldWithPath("data[].title").type(JsonFieldType.STRING).description("제목"),
                                        fieldWithPath("data[].content").type(JsonFieldType.STRING).description("본문"),
                                        fieldWithPath("data[].view").type(JsonFieldType.NUMBER).description("조회수"),
                                        fieldWithPath("data[].voteScore").type(JsonFieldType.NUMBER).description("투표수"),

                                        fieldWithPath("pageInfo").type(JsonFieldType.OBJECT).description("페이지 정보"),
                                        fieldWithPath("pageInfo.page").type(JsonFieldType.NUMBER).description("페이지 번호"),
                                        fieldWithPath("pageInfo.size").type(JsonFieldType.NUMBER).description("페이지 사이즈"),
                                        fieldWithPath("pageInfo.totalElements").type(JsonFieldType.NUMBER).description("전체 질문 수"),
                                        fieldWithPath("pageInfo.totalPages").type(JsonFieldType.NUMBER).description("전체 페이지 수")
                                )
                        )
                ));
    }



    @Test
    @DisplayName("질문 삭제 테스트")
    public void deleteQuestionTest() throws Exception{

        // given
        long Id = 1L;

        // stubbing
        doNothing().when(questionService).deleteQuestion(Id);

        // when
        ResultActions actions = mockMvc.perform(
                delete("/questions/{question-id}", Id)
        );

        // then
        actions.andDo(print())
                .andExpect(status().isNoContent())
                .andDo(document("delete-question",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("question-id").description("질문 식별자")
                        )
                ));
    }

}
