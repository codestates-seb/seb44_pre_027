package com.stackoverflow.stackoverflowclone.member.auth.dto;

import lombok.Getter;

// 클라이언트가 전송한 email/password 정보를 Security Filter에서 사용할 수 있도록 역직렬화
@Getter
public class LoginDto {
    private String email;
    private String password;
}
