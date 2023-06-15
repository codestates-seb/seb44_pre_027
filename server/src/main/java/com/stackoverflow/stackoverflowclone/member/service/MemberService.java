package com.stackoverflow.stackoverflowclone.member.service;

import com.stackoverflow.stackoverflowclone.member.dto.MemberDTO;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

public class MemberService {
    private List<MemberDTO> members;

    public MemberService() {
        members = new ArrayList<>();
    }

    // 회원 가입
    public void registerMember(MemberDTO member) {
        if(!isValidEmail(member.getEmail())) {
            System.out.println("올바른 이메일 형식이 아닙니다.");
            return;
        }

        if(!isValidPassword(member.getPassword())) {
            System.out.println("패스워드는 8자 이상이어야 합니다.");
            return;
        }

        members.add(member);
        System.out.println("회원가입이 완료되었습니다.");
    }

    // 회원 검색
    public MemberDTO getMemberByEmail(String email) {
        for(MemberDTO member : members) {
            if(member.getEmail().equals(email)) {
                return member;
            }
        }
        return null;
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
