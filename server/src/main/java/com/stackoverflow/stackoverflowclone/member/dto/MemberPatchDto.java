package com.stackoverflow.stackoverflowclone.member.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Min;

@Getter
@Setter
public class MemberPatchDto {

    private long memberId;
    private String nickname;
    @Min(value = 8, message = "비밀번호는 8자 이상이어야합니다.")
    private String password;
    private String location;
    private String bioTitle;
    private String bioContent;

    public void setMemberId(long memberId) {
        this.memberId = memberId;
    }
}
