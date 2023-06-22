package com.stackoverflow.stackoverflowclone.member.dto;

import com.stackoverflow.stackoverflowclone.answer.dto.AnswerDto;
import com.stackoverflow.stackoverflowclone.answer.entity.Answer;
import com.stackoverflow.stackoverflowclone.question.dto.QuestionDto;
import com.stackoverflow.stackoverflowclone.question.entity.Question;
import lombok.*;

import java.util.List;

/** 회원 정보 조회 responseDto **/
@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberResponseDto {
    private long memberId;
    private String email;
    private String nickname;
    private String password;
    private String location;
    private String bioTitle;
    private String bioContent;

    private List<QuestionDto.questionResponse> questions;

    private List<AnswerDto.Response> answers;
}
