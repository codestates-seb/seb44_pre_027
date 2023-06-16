package com.stackoverflow.stackoverflowclone.answer.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Getter
public class AnswerDto{
    @Getter
    @Setter
    public static class Post {
        @JsonProperty("member-id")
        private long MemberId;

        private long questionId;

        @NotBlank(message = "내용을 입력하세요.")
        private String content;
    }

    @Getter
    @Setter
    public static class Patch {

//        @JsonProperty("answer-id")
        private long answerId;

        @JsonProperty("question-id")
        private long questionId;

        @NotBlank
        private String content;
    }

    @AllArgsConstructor
    @Getter
    @Setter
    @Builder
    public static class Response {

        private long answerId;

        private long questionId;

        @NotBlank
        private String content;

        private long memberId;

        private LocalDateTime createdAt;

        private LocalDateTime modifiedAt;

    }
}