package com.stackoverflow.stackoverflowclone.member.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Min;

@Builder
@Getter @Setter
@AllArgsConstructor
public class MemberResponseDto {
    private long memberId;
    private String email;
    private String nickname;
    private String password;
    private String location;
    private String bioTitle;
    private String bioContent;
}
