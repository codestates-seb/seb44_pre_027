package com.stackoverflow.stackoverflowclone.comment.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

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
}
