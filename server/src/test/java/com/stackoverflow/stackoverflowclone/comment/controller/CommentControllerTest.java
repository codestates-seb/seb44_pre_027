package com.stackoverflow.stackoverflowclone.comment.controller;

import com.google.gson.Gson;
import com.stackoverflow.stackoverflowclone.answer.controller.AnswerController;
import com.stackoverflow.stackoverflowclone.comment.dto.CommentDto;
import com.stackoverflow.stackoverflowclone.comment.entity.Comment;
import com.stackoverflow.stackoverflowclone.comment.mapper.CommentMapper;
import com.stackoverflow.stackoverflowclone.comment.service.CommentService;
import com.stackoverflow.stackoverflowclone.member.auth.config.SecurityConfiguration;
import com.stackoverflow.stackoverflowclone.member.service.MemberService;
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
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.List;

import static com.stackoverflow.stackoverflowclone.util.ApiDocumentUtils.getRequestPreProcessor;
import static com.stackoverflow.stackoverflowclone.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
import static org.springframework.restdocs.headers.HeaderDocumentation.responseHeaders;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestFields;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(
        controllers = {CommentController.class}, // 테스트 하고자 하는 Controller를 지정한다.
        excludeAutoConfiguration = SecurityAutoConfiguration.class, // Spring Security의 자동 구성을 사용하지 않도록 한다.
        excludeFilters = {      // 테스트 수행 시, 사용하지 않을 필터를 지정한다. 여기서는 SecurityConfiguration에서 설정하는 필터를 제외한다.
                @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE,
                        classes = SecurityConfiguration.class)
        }
)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class CommentControllerTest {

    @Autowired
    private Gson gson;

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CommentService commentService;

    @MockBean
    private CommentMapper commentMapper;

    @MockBean
    private QuestionService questionService;

    @MockBean
    private MemberService memberService;


    @Test
    @DisplayName("댓글 등록 테스트")
    public void postCommentTest() throws Exception{

        // given
        CommentDto.Post post = new CommentDto.Post(1L, "댓글");
        long questionId = 1L;
        String content = gson.toJson(post);

        // stubbing
        given(commentMapper.commentPostToComment(Mockito.any(CommentDto.Post.class))).willReturn(new Comment());

        Comment comment = new Comment();
        comment.setCommentId(1L);

        given(commentService.createComment(Mockito.any(Comment.class))).willReturn(comment);

        // when
        ResultActions actions = mockMvc.perform(
                post("/questions/{question-id}/comments", questionId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );

        // then
        actions.andDo(print())
                .andExpect(status().isCreated())
                .andDo(document("post-comment",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("question-id").description("질문 식별자")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("댓글")
                                )
                        ),
                        responseHeaders(
                                headerWithName(HttpHeaders.LOCATION).description("Location header. 등록된 리소스의 URI")
                        )
        ));
    }

    @Test
    @DisplayName("댓글 수정 테스트")
    public void patchCommentTest() throws Exception{

        // given
        long commentId = 1L;
        long questionId = 1L;

        CommentDto.Patch patch = new CommentDto.Patch(1L, "댓글");
        patch.setCommentId(commentId);
        String content = gson.toJson(patch);

        // stubbing
        given(commentMapper.commentPatchToComment(Mockito.any(CommentDto.Patch.class))).willReturn(new Comment());
        given(commentService.updateComment(Mockito.any(Comment.class))).willReturn(new Comment());

        // when
        ResultActions actions = mockMvc.perform(
                patch("/questions/{question-id}/comments/{comment-id}", questionId, commentId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );

        // then
        actions.andDo(print())
                .andExpect(status().isOk())
                .andDo(document("patch-comment",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("question-id").description("질문 식별자"),
                                parameterWithName("comment-id").description("댓글 식별자")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("commentId").type(JsonFieldType.NUMBER).description("댓글 식별자").ignored(),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("댓글 내용")
                                )
                        )
                ));

    }

    @Test
    @DisplayName("댓글 삭제 테스트")
    public void deleteCommentTest() throws Exception{

        // given
        long questionId = 1L;
        long commentId = 1L;

        // stubbing
        doNothing().when(commentService).deleteComment(commentId);

        // when
        ResultActions actions = mockMvc.perform(
                delete("/questions/{question-id}/comments/{comment-id}", questionId, commentId)
        );

        // then
        actions.andDo(print())
                .andExpect(status().isNoContent())
                .andDo(document("delete-comment",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("question-id").description("질문 식별자"),
                                parameterWithName("comment-id").description("댓글 식별자")
                        )
                ));
    }

}
