package com.stackoverflow.stackoverflowclone.member.service;

import com.stackoverflow.stackoverflowclone.member.entity.Member;
import org.springframework.stereotype.Service;

import java.util.regex.Pattern;

@Service
public class MemberService {
    public Member createMember(Member member) {
        Member createdMember = member;
        return createdMember
    }

    // 이메일과 비밀번호 유효성 검사
    private boolean isValidEmail(String email) {
        String emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";
        return Pattern.matches(emailRegex, email);
    }

    private boolean isValidPassword(String password) {
        return password.length() >= 8;
    }
}
