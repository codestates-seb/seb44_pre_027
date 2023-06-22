package com.stackoverflow.stackoverflowclone.member.dto;

import lombok.*;

/** 회원 목록 조회 responseDto **/

@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberListResponseDto {

    private long memberId;
    private String email;
    private String nickname;
    private String location;
}
