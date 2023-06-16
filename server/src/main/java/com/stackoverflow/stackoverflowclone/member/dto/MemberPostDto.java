package com.stackoverflow.stackoverflowclone.member.dto;

import lombok.Getter;

import javax.validation.constraints.Min;
import javax.validation.constraints.Pattern;

@Getter
public class MemberPostDto {
    private String nickname;
    /* 이메일 유효성 검사 */
    @Pattern(regexp = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$" ,
            message = "올바른 이메일 구성이 아닙니다.")
    private String email;
    /* 패스워드 유효성 검사 */
    @Min(value = 8, message = "비밀번호는 8자 이상이어야합니다.")
    private String password;
    private String location;
    private String bioTitle;
    private String bioContent;

}
