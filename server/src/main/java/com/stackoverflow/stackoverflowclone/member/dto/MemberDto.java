package com.stackoverflow.stackoverflowclone.member.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
}
