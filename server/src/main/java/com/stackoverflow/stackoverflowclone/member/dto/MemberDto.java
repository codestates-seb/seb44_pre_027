package com.stackoverflow.stackoverflowclone.member.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.regex.Pattern;

@Getter
@Setter
@NoArgsConstructor
public class MemberDto {
    private String nickname;
    private String email;
    private String password;
    private String location;
    private String bioTitle;
    private String bioContent;

    public MemberDto(String nickname, String email, String password, String location, String title, String content) {
        this.nickname = nickname;
        this.email = email;
        this.password = password;
        this.location = location;
        this.bioTitle = title;
        this.bioContent = content;
    }
    // 이메일과 비밀번호 유효성 검사
    /*
    private boolean isValidEmail(String email) {
        String emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";
        return Pattern.matches(emailRegex, email);
    }

    private boolean isValidPassword(String password) {
        return password.length() >= 8;
    }
     */
}
