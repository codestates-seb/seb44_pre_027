package com.stackoverflow.stackoverflowclone.answer.mapper;

import com.stackoverflow.stackoverflowclone.answer.dto.AnswerDto;
import com.stackoverflow.stackoverflowclone.answer.entity.Answer;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostToAnswer(AnswerDto.Post requestBody);
    Answer answerPatchToAnswer(AnswerDto.Patch requestBody);
    AnswerDto.Response answerToAnswerResponse(Answer answer);
//    List<AnswerDto.Response> answerToAnswerResponses(List<Answer> answers);


}
