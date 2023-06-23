package com.stackoverflow.stackoverflowclone.answer.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Getter
public class AnswerDto{
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {

        private long memberId;

        private long questionId;

        @NotBlank(message = "내용을 입력하세요.")
        private String content;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {

        private long answerId;

        private long questionId;

        @NotBlank
        private String content;

        public Patch(long questionId, String content) {
            this.questionId = questionId;
            this.content = content;
        }
    }

    @AllArgsConstructor
    @Getter
    @Setter
    @Builder
    public static class Response {

        private long answerId;

        private long questionId;

        private String nickname;

        @NotBlank
        private String content;

        private long memberId;

        private LocalDateTime createdAt;

        private LocalDateTime modifiedAt;

    }
}