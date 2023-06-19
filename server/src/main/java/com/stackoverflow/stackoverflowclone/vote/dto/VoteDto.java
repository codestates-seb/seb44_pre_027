package com.stackoverflow.stackoverflowclone.vote.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Positive;

@Getter
public class VoteDto {

    @Getter
    @Setter
    public static class Post {

        @Positive
        private long memberId;

        @Positive
        private long questionId;
    }

    @Getter @Setter
    @Builder
    public static class Response {

        @Positive
        private long questionId;

        private int score;  // 총 점수
    }
}
