package com.stackoverflow.stackoverflowclone.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

public class AnswerDto {
    @Getter
    @Setter
    public static class Post {
        private long answerId;
        private long questionId;
        @NotBlank
        private String content;
    }

    @Getter
    public static class Patch {
        private long answerId;
    }

    @AllArgsConstructor
    @Getter
    public static class Response {

    }
}
