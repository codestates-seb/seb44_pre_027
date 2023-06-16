package com.stackoverflow.stackoverflowclone.answer.mapper;

import com.stackoverflow.stackoverflowclone.answer.dto.AnswerDto;
import com.stackoverflow.stackoverflowclone.answer.entity.Answer;
import com.stackoverflow.stackoverflowclone.question.service.QuestionService;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    default Answer answerPostToAnswer(long questionId, QuestionService questionService, AnswerDto.Post requestBody){
        Answer answer = new Answer();
        answer.setContent(requestBody.getContent());
        answer.setQuestion(questionService.findVerifiedQuestion(questionId));
        //user set 필요
        return answer;
    }
    Answer answerPostToAnswer(AnswerDto.Post requestBody);
    Answer answerPatchToAnswer(AnswerDto.Patch requestBody);
    AnswerDto.Response answerToAnswerResponse(Answer answer);

    List<AnswerDto.Response> answersToAnswerResponses(List<Answer> answers);


}