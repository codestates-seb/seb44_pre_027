package com.stackoverflow.stackoverflowclone.question.dto;

import com.stackoverflow.stackoverflowclone.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

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
}
