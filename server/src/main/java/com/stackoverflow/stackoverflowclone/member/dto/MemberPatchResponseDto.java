package com.stackoverflow.stackoverflowclone.member.dto;

import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberPatchResponseDto {

    private long memberId;
    private String email;
    private String nickname;
    private String password;
    private String location;
    private String bioTitle;
    private String bioContent;
}
