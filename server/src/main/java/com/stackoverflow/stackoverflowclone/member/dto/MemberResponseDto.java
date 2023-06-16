package com.stackoverflow.stackoverflowclone.member.dto;

import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.Min;

@Builder
@Getter
public class MemberResponseDto {
    private long memberId;
    private String email;
    private String nickname;
    private String password;
    private String location;
    private String bioTitle;
    private String bioContent;
}
