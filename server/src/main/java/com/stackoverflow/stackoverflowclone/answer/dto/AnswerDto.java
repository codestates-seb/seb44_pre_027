package com.stackoverflow.stackoverflowclone.answer.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
@Getter
public class AnswerDto {
    @Getter
    @Setter
    public static class Post {
        @JsonProperty("answer-id")
        private long answerId;
        @JsonProperty("question-id")
        private long questionId;
        @NotBlank
        private String content;
    }
    @Getter
    @Setter
    public static class Patch {
        @JsonProperty("answer-id")
        private long answerId;
        @JsonProperty("question-id")
        private long questionId;
        @NotBlank
        private String content;
    }

    @AllArgsConstructor
    @Getter
    @Setter
    public static class Response {
        private long answerId;
        private long questionId;
        @NotBlank
        private String content;
    }
}