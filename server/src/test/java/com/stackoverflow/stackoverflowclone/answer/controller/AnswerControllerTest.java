package com.stackoverflow.stackoverflowclone.answer.controller;

import com.google.gson.Gson;
import com.stackoverflow.stackoverflowclone.answer.dto.AnswerDto;
import com.stackoverflow.stackoverflowclone.answer.entity.Answer;
import com.stackoverflow.stackoverflowclone.answer.mapper.AnswerMapper;
import com.stackoverflow.stackoverflowclone.answer.service.AnswerService;
import com.stackoverflow.stackoverflowclone.member.auth.config.SecurityConfiguration;
import com.stackoverflow.stackoverflowclone.member.controller.MemberController;
import com.stackoverflow.stackoverflowclone.member.entity.Member;
import com.stackoverflow.stackoverflowclone.member.service.MemberService;
import com.stackoverflow.stackoverflowclone.question.entity.Question;
import com.stackoverflow.stackoverflowclone.question.service.QuestionService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

import static com.stackoverflow.stackoverflowclone.util.ApiDocumentUtils.getRequestPreProcessor;
import static com.stackoverflow.stackoverflowclone.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.*;
import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
import static org.springframework.restdocs.headers.HeaderDocumentation.responseHeaders;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestFields;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(
        controllers = {AnswerController.class}, // 테스트 하고자 하는 Controller를 지정한다.
        excludeAutoConfiguration = SecurityAutoConfiguration.class, // Spring Security의 자동 구성을 사용하지 않도록 한다.
        excludeFilters = {      // 테스트 수행 시, 사용하지 않을 필터를 지정한다. 여기서는 SecurityConfiguration에서 설정하는 필터를 제외한다.
                @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE,
                        classes = SecurityConfiguration.class)
        }
)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class AnswerControllerTest {
    @MockBean
    private AnswerMapper answerMapper;

    @MockBean
    private AnswerService answerService;

    @MockBean
    private QuestionService questionService;

    @MockBean
    private MemberService memberService;

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;


//    @BeforeAll
//    void initData() {
//        //TODO: 초기화
//    }

    @Test
    @DisplayName("답변 등록 테스트")
    public void createAnswerTest() throws Exception {

        // given
        AnswerDto.Post post = new AnswerDto.Post(1L, 1L, "답변입니다.");
        long Id = post.getQuestionId();
        String jsonizedPost = gson.toJson(post);

        given(answerMapper.answerPostToAnswer(Mockito.any(AnswerDto.Post.class))).willReturn(new Answer());
        Answer mockResultAnswer = new Answer();

        mockResultAnswer.setAnswerId(1L);
        given(answerService.createAnswer(Mockito.any(Answer.class))).willReturn(mockResultAnswer);

        // when
        ResultActions actions =
                mockMvc.perform(
                        post("/questions/{question-id}/answers",Id)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(jsonizedPost)
                );

        // then
        actions
                .andDo(print())
                .andExpect(status().isCreated())
                .andDo(document("post-answer",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestFields(
                                List.of(
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문 식별자").ignored(),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("답변")
                                )
                        ),
                        pathParameters(
                                parameterWithName("question-id").description("질문 식별자")
                        ),
                        /** response header **/
                        responseHeaders(
                                headerWithName(HttpHeaders.LOCATION).description("Location header. 등록된 리소스의 URI")
                        )
                ));
    }

    @Test
    @DisplayName("답변 수정 테스트")
    public void patchAnswerTest() throws Exception{

        // given
        long answerId = 1L;
        AnswerDto.Patch patch = new AnswerDto.Patch(1L,"답변");
        patch.setAnswerId(answerId);

        long questionId = patch.getQuestionId();

        String content = gson.toJson(patch);

        // stubbing
        given(answerMapper.answerPatchToAnswer(Mockito.any(AnswerDto.Patch.class))).willReturn(new Answer());

        given(answerService.updateAnswer(Mockito.any(Answer.class))).willReturn(new Answer());

        // when
        ResultActions actions = mockMvc.perform(
                patch("/questions/{question-id}/answers/{answer-id}", questionId, answerId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );

        // then
        actions
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("patch-answer",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        /** 파라미터 **/
                        pathParameters(
                                parameterWithName("question-id").description("질문 식별자"),
                                parameterWithName("answer-id").description("답변 식별자")
                        ),
                        /** request body **/
                        requestFields(
                                List.of(
                                        fieldWithPath("answerId").type(JsonFieldType.NUMBER).description("답변 식별자").ignored(),
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문 식별자").ignored(),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("답변")
                                )
                        )
                ));
    }

    @Test
    @DisplayName("답변 삭제 테스트")
    public void deleteAnswerTest() throws Exception{

        // given
        long answerId = 1L;
        long questionId = 1L;

        // stubbing
        doNothing().when(answerService).deleteAnswer(answerId);

        // when
        ResultActions actions = mockMvc.perform(
                delete("/questions/{question-id}/answers/{answer-id}", questionId, answerId)
        );

        // then
        actions.andDo(print())
                .andExpect(status().isNoContent())
                .andDo(document("delete-answer",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("question-id").description("질문 식별자"),
                                parameterWithName("answer-id").description("답변 식별자")
                        )
                ));
    }

}