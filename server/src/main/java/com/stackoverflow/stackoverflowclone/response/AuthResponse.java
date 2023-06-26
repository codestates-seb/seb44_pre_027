package com.stackoverflow.stackoverflowclone.response;

import lombok.Getter;

@Getter
public class AuthResponse {
    private long memberId;
    private String message;

    public AuthResponse(long memberId, String message) {
        this.memberId = memberId;
        this.message = message;
    }
}
