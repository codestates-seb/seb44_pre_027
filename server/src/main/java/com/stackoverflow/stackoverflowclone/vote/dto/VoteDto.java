package com.stackoverflow.stackoverflowclone.vote.dto;

import lombok.*;

import javax.validation.constraints.Positive;

@Getter
public class VoteDto {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {

        @Positive
        private long memberId;

        @Positive
        private long questionId;
    }

    @Getter @Setter
    @Builder
    @AllArgsConstructor
    public static class Response {

        @Positive
        private long questionId;

        private int score;  // 총 점수
    }
}
