package com.stackoverflow.stackoverflowclone.comment.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;

@Getter
public class CommentDto {
    @Getter
    @Setter
    public static class Post {
        @JsonProperty("member-id")
        private long memberId;
        @NotBlank(message = "내용을 입력하세요.")
        private String content;
    }

    @Getter
    @Setter
    public static class Patch {
        @JsonProperty("member-id")
        private long memberId;
        @JsonProperty("comment-id")
        private long commentId;
        @NotBlank
        private String content;
    }


    @Getter @Setter
    @Builder
    @AllArgsConstructor
    public static class Response {

        @Positive
        private long commentId;

        private String content;

        private long memberId;

        private LocalDateTime createdAt;

        private LocalDateTime modifiedAt;
    }

}
