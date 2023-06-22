package com.stackoverflow.stackoverflowclone.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberPatchDto {

    private long memberId;
    private String nickname;

    // @Min이 아니라 @Size를 사용해야해서 고쳤습니다!
    @Size(min = 8, message = "비밀번호는 8자 이상이어야합니다.")
    private String password;
    private String location;
    private String bioTitle;
    private String bioContent;

    public void setMemberId(long memberId) {
        this.memberId = memberId;
    }

    public MemberPatchDto(String nickname, String password, String location, String bioTitle, String bioContent) {
        this.nickname = nickname;
        this.password = password;
        this.location = location;
        this.bioTitle = bioTitle;
        this.bioContent = bioContent;
    }
}
