package com.stackoverflow.stackoverflowclone.member.dto;

import com.stackoverflow.stackoverflowclone.answer.dto.AnswerDto;
import com.stackoverflow.stackoverflowclone.question.dto.QuestionDto;
import lombok.*;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
public class MemberDto {

    @Getter @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {

        private String nickname;

        /* 이메일 유효성 검사 */
        @Pattern(regexp = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$" ,
                message = "올바른 이메일 구성이 아닙니다.")
        private String email;

        /* 패스워드 유효성 검사 */
        @Size(min = 8, message = "비밀번호는 8자 이상이어야합니다.")
        private String password;

    }

    @Getter @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {

        private long memberId;
        private String nickname;
        @Size(min = 8, message = "비밀번호는 8자 이상이어야합니다.")
        private String password;
        private String location;
        private String bioTitle;
        private String bioContent;

        public void setMemberId(long memberId) {
            this.memberId = memberId;
        }

        public Patch(String nickname, String password, String location, String bioTitle, String bioContent) {
            this.nickname = nickname;
            this.password = password;
            this.location = location;
            this.bioTitle = bioTitle;
            this.bioContent = bioContent;
        }
    }

    /** patch Response **/
    @Builder
    @Getter @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PatchResponse {

        private long memberId;
        private String email;
        private String nickname;
        private String password;
        private String location;
        private String bioTitle;
        private String bioContent;
    }

    /** 회원 정보 상세 조회 response **/
    @Builder
    @Getter @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response {

        private long memberId;
        private String email;
        private String nickname;
        private String password;
        private String location;
        private String bioTitle;
        private String bioContent;
        private List<QuestionDto.questionResponse> questions;
        private List<AnswerDto.Response> answers;

    }

    /** 회원 목록 조회 Response **/
    @Builder
    @Getter @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ListResponse {
        private long memberId;
        private String email;
        private String nickname;
        private String location;
    }

}
