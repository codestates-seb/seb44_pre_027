package com.stackoverflow.stackoverflowclone.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberPostDto {
    private String nickname;
    /* 이메일 유효성 검사 */
    @Pattern(regexp = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$" ,
            message = "올바른 이메일 구성이 아닙니다.")
    private String email;
    /* 패스워드 유효성 검사 */
    @Size(min = 8, message = "비밀번호는 8자 이상이어야합니다.")
    private String password;
    private String location;
    private String bioTitle;
    private String bioContent;

}
