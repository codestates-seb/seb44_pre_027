package com.stackoverflow.stackoverflowclone.member.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberPostDto {
    private String nickname;
    private String email;
    private String password;
    private String location;
    private String bioTitle;
    private String bioContent;
}
