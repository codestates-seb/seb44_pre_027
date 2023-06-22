package com.stackoverflow.stackoverflowclone.member.controller;

import com.google.gson.Gson;
import com.stackoverflow.stackoverflowclone.member.dto.MemberPatchDto;
import com.stackoverflow.stackoverflowclone.member.dto.MemberPostDto;
import com.stackoverflow.stackoverflowclone.member.dto.MemberResponseDto;
import com.stackoverflow.stackoverflowclone.member.entity.Member;
import com.stackoverflow.stackoverflowclone.member.mapper.MemberMapper;
import com.stackoverflow.stackoverflowclone.member.service.MemberService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

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

/** Spring security 적용 전 **/
@WebMvcTest(MemberController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class MemberControllerTest {

    @Autowired
    private Gson gson;

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private MemberService memberService;

    @MockBean
    private MemberMapper memberMapper;

    @Test
    @DisplayName("회원 가입 테스트")
    public void registerMemberTest() throws Exception{

        // given
        MemberPostDto post = new MemberPostDto("닉네임", "name@example.com", "password1234", "서울", "자기소개", "내용");
        String content = gson.toJson(post);

        // stubbing
        given(memberMapper.memberPostDtoToMember(Mockito.any(MemberPostDto.class))).willReturn(new Member());

        Member member = new Member();
        member.setMemberId(1L);

        given(memberService.createMember(Mockito.any(Member.class))).willReturn(member);

        // when
        ResultActions actions = mockMvc.perform(
                post("/users/signup")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );

        // then
        actions.andDo(print())
                .andExpect(status().isCreated())
                .andDo(document("signup-user",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestFields(
                                List.of(
                                        fieldWithPath("nickname").type(JsonFieldType.STRING).description("닉네임"),
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호"),
                                        fieldWithPath("location").type(JsonFieldType.STRING).description("지역"),
                                        fieldWithPath("bioTitle").type(JsonFieldType.STRING).description("자기소개 제목"),
                                        fieldWithPath("bioContent").type(JsonFieldType.STRING).description("자기소개 본문")
                                )
                        ),
                        responseHeaders(
                                headerWithName(HttpHeaders.LOCATION).description("Location header. 등록된 리소스의 URI")
                        )
                ));
    }

    @Test
    @DisplayName("회원 수정 테스트")
    public void patchMemberTest() throws Exception{

        // given
        long memberId = 1L;

        MemberPatchDto patch = new MemberPatchDto("닉네임",  "password1234", "서울", "자기소개", "내용");
        patch.setMemberId(memberId);
        String content = gson.toJson(patch);

        MemberResponseDto response = new MemberResponseDto(patch.getMemberId(), "name@example.com","닉네임",  "password1234", "서울", "자기소개", "내용" );

        // stubbing
        given(memberMapper.memberPatchDtoToMember(Mockito.any(MemberPatchDto.class))).willReturn(new Member());
        given(memberService.updateMember(Mockito.any(Member.class))).willReturn(new Member());
        given(memberMapper.memberToMemberResponseDto(Mockito.any(Member.class))).willReturn(response);

        // when
        ResultActions actions = mockMvc.perform(
                patch("/users/{member-id}", memberId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );

        // then
        actions.andDo(print())
                .andExpect(status().isOk())
                .andDo(document("patch-user",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("member-id").description("회원 식별자")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 식별자").ignored(),
                                        fieldWithPath("nickname").type(JsonFieldType.STRING).description("닉네임").optional(),
                                        fieldWithPath("password").type(JsonFieldType.STRING).description("비밀 번호").optional(),
                                        fieldWithPath("location").type(JsonFieldType.STRING).description("지역").optional(),
                                        fieldWithPath("bioTitle").type(JsonFieldType.STRING).description("자기소개 제목").optional(),
                                        fieldWithPath("bioContent").type(JsonFieldType.STRING).description("자기소개 본문").optional()
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("nickname").type(JsonFieldType.STRING).description("닉네임"),
                                        fieldWithPath("password").type(JsonFieldType.STRING).description("비밀 번호"),
                                        fieldWithPath("location").type(JsonFieldType.STRING).description("지역"),
                                        fieldWithPath("bioTitle").type(JsonFieldType.STRING).description("자기소개 제목"),
                                        fieldWithPath("bioContent").type(JsonFieldType.STRING).description("자기소개 본문")
                                )
                        )
                ));
    }


    @Test
    @DisplayName("회원 조회 테스트")
    public void getMemberTest() throws Exception{

        // given
        long memberId = 1L;
        Member member = new Member("닉네임", "name@example.com", "password1234", "서울", "자기소개", "내용");
        member.setMemberId(memberId);

        MemberResponseDto response = new MemberResponseDto(member.getMemberId(), "name@example.com","닉네임",  "password1234", "서울", "자기소개", "내용" );

        // stubbing
        given(memberService.findMember(Mockito.anyLong())).willReturn(new Member());
        given(memberMapper.memberToMemberResponseDto(Mockito.any(Member.class))).willReturn(response);

        // when
        ResultActions actions = mockMvc.perform(
                get("/users/{member-id}", memberId)
                        .accept(MediaType.APPLICATION_JSON)
        );

        // then
        actions.andDo(print())
                .andExpect(status().isOk())
                .andDo(document("get-member",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("member-id").description("회원 식별자")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("nickname").type(JsonFieldType.STRING).description("닉네임"),
                                        fieldWithPath("password").type(JsonFieldType.STRING).description("비밀 번호"),
                                        fieldWithPath("location").type(JsonFieldType.STRING).description("지역"),
                                        fieldWithPath("bioTitle").type(JsonFieldType.STRING).description("자기소개 제목"),
                                        fieldWithPath("bioContent").type(JsonFieldType.STRING).description("자기소개 본문")
                                )
                        )
                ));
    }

    @Test
    @DisplayName("회원 목록 조회 테스트")
    public void getMembers() throws Exception{

        // given
        Member member1 = new Member("닉네임", "name@example.com", "password1234", "서울", "자기소개", "내용");
        Member member2 = new Member("닉네임2", "name2@example.com", "password12345", "서울", "자기소개", "내용");

        List<Member> members = new ArrayList<>();
        members.add(member1);
        members.add(member2);

        MemberResponseDto response1 = new MemberResponseDto(1L, "name@example.com","닉네임",  "password1234", "서울", "자기소개", "내용" );
        MemberResponseDto response2 = new MemberResponseDto(2L, "name2@example.com","닉네임2",  "password12345", "서울", "자기소개", "내용" );

        List<MemberResponseDto> response = new ArrayList<>();
        response.add(response1);
        response.add(response2);

        // stubbing
        given(memberService.findMembers()).willReturn(members);
        given(memberMapper.memberToMemberResponseDto(member1)).willReturn(response1);
        given(memberMapper.memberToMemberResponseDto(member2)).willReturn(response2);
        given(memberMapper.membersToMemberResponseDtos(Mockito.anyList())).willReturn(response);

        // when
        ResultActions actions = mockMvc.perform(
                get("/users")
                        .accept(MediaType.APPLICATION_JSON)
        );

        // then
        actions.andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andDo(document("get-members",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        responseFields(
                                List.of(
                                        fieldWithPath("[]").type(JsonFieldType.ARRAY).description("회원 목록"),
                                        fieldWithPath("[].memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("[].email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("[].nickname").type(JsonFieldType.STRING).description("닉네임"),
                                        fieldWithPath("[].password").type(JsonFieldType.STRING).description("비밀번호"),
                                        fieldWithPath("[].location").type(JsonFieldType.STRING).description("지역"),
                                        fieldWithPath("[].bioTitle").type(JsonFieldType.STRING).description("자기소개 제목"),
                                        fieldWithPath("[].bioContent").type(JsonFieldType.STRING).description("자기소개 본문")
                                )
                        )
                ));

    }

    @Test
    @DisplayName("회원 삭제 테스트")
    public void deleteMemberTest() throws Exception{

        // given
        long memberId = 1L;

        // stubbing
        doNothing().when(memberService).deleteMember(memberId);

        // when
        ResultActions actions = mockMvc.perform(
                delete("/users/{member-id}", memberId)
                        .param("password", "password1234")
                        .accept(MediaType.APPLICATION_JSON)
        );

        // then
        actions.andDo(print())
                .andExpect(status().isNoContent())
                .andDo(document("delete-member",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("member-id").description("회원 식별자")
                        ),
                        requestParameters(
                                parameterWithName("password").description("비밀 번호")
                        )
                ));
    }


}
