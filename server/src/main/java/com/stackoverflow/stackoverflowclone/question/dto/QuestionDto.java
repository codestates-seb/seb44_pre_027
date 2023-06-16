package com.stackoverflow.stackoverflowclone.question.dto;

import com.stackoverflow.stackoverflowclone.answer.dto.AnswerDto;
import com.stackoverflow.stackoverflowclone.answer.entity.Answer;
import com.stackoverflow.stackoverflowclone.member.entity.Member;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {

    @Getter
    @AllArgsConstructor // Test
    @NoArgsConstructor
    public static class Post {

        @Positive
        private long memberId;

        @NotBlank
        private String title;

        @NotBlank
        private String content;

        public Member getMember(){
            Member member = new Member();
            member.setMemberId(memberId);
            return member;
        }
    }

    @Getter
    public static class Patch {

        @Positive
        private long questionId;

        private String title;

        private String content;

        public void addQuestionId(long questionId){
            this.questionId = questionId;
        }

    }

    @Getter @Setter
    @Builder
    public static class Response {
        @Positive
        private long questionId;

        private String nickname;

        private String title;

        private String content;

        private LocalDateTime createdAt;

        private LocalDateTime modifiedAt;

        private int views;

        private List<AnswerDto.Response> answers;
    }


    // TODO : 나중에 vote도 추가해야함
    @Getter @Setter
    @Builder
    public static class SearchResponse {

        private long questionId;

        private String title;

        private String content;

        private int view;
    }
}
