package com.stackoverflow.stackoverflowclone.vote.controller;

import com.google.gson.Gson;
import com.stackoverflow.stackoverflowclone.member.entity.Member;
import com.stackoverflow.stackoverflowclone.question.entity.Question;
import com.stackoverflow.stackoverflowclone.vote.dto.VoteDto;
import com.stackoverflow.stackoverflowclone.vote.entity.Vote;
import com.stackoverflow.stackoverflowclone.vote.mapper.VoteMapper;
import com.stackoverflow.stackoverflowclone.vote.service.VoteService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.List;

import static com.stackoverflow.stackoverflowclone.util.ApiDocumentUtils.getRequestPreProcessor;
import static com.stackoverflow.stackoverflowclone.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(VoteController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class VoteControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @MockBean
    private VoteService voteService;

    @MockBean
    private VoteMapper voteMapper;

    @Test
    @DisplayName("투표 기능 테스트")
    public void postVoteTest() throws Exception{

        // given
        long Id = 1L;
        Question question = new Question("제목","본문",3,4);
        question.setQuestionId(Id);

        Member member = new Member("닉네임","hihi@naver.com","hihihi1212","지역","title","content");
        member.setMemberId(1L);

        VoteDto.Post post = new VoteDto.Post(1L, question.getQuestionId());
        String content = gson.toJson(post);

        VoteDto.Response response = new VoteDto.Response(question.getQuestionId(), 3);

        Vote vote = new Vote();
        vote.setVoteId(1L);
        vote.setQuestion(question);
        vote.setMember(member);
        vote.setStatus(Vote.voteStatus.GOOD);

        // stubbing
        given(voteMapper.votePostDtoToVote(Mockito.any(VoteDto.Post.class))).willReturn(new Vote());
        given(voteService.createVote(Mockito.any(Vote.class),Mockito.anyString())).willReturn(vote);
        given(voteMapper.voteToVoteResponseDto(Mockito.any(Vote.class))).willReturn(response);

        // when
        ResultActions actions = mockMvc.perform(
                post("/questions/{question-id}/votes", Id)
                        .param("status", "good")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );

        // then
        actions
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("post-vote",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        /** request body **/
                        requestFields(
                                List.of(
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문 식별자").ignored()
                                )
                        ),
                        pathParameters(
                                parameterWithName("question-id").description("질문 식별자")
                        ),
                        /** 요청 파라미터 **/
                        requestParameters(
                                parameterWithName("status").description("추천 : good, 비추천 : bad")
                        ),
                        /** response body **/
                        responseFields(
                                List.of(
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문 식별자"),
                                        fieldWithPath("score").type(JsonFieldType.NUMBER).description("해당 질문의 총 점수")
                                )
                        )

                ));
    }





}
