package com.stackoverflow.stackoverflowclone.member.auth.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackoverflow.stackoverflowclone.exception.BusinessLogicException;
import com.stackoverflow.stackoverflowclone.exception.ExceptionCode;
import com.stackoverflow.stackoverflowclone.member.entity.Member;
import com.stackoverflow.stackoverflowclone.member.repository.MemberRepository;
import com.stackoverflow.stackoverflowclone.member.service.MemberService;
import com.stackoverflow.stackoverflowclone.response.AuthResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

@Slf4j
public class MemberAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    private final MemberRepository memberRepository;

    public MemberAuthenticationSuccessHandler(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    /** 인증 성공할때 **/
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException{
        log.info("# 인증 성공!");

        // 인증된 멤버의 ID 가져오기
        String username = authentication.getName();  // 이메일 출력

        Optional<Member> findMember = memberRepository.findByEmail(username);
        Member member = findMember.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.MEMBER_EXISTS));

        long memberId = member.getMemberId();

        // 응답 본문에 ID를 포함시키기
        AuthResponse authResponse = new AuthResponse(memberId, "로그인 성공");

        // JSON 형태로 변환하여 응답하기
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonResponse = objectMapper.writeValueAsString(authResponse);

        response.setContentType("application/json");
        response.getWriter().write(jsonResponse);
    }
}
