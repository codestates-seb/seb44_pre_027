package com.stackoverflow.stackoverflowclone.question.mapper;

import com.stackoverflow.stackoverflowclone.question.dto.QuestionDto;
import com.stackoverflow.stackoverflowclone.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    @Mapping(source = "memberId", target = "member.memberId")
    Question QuestionPostDtoToQuestion(QuestionDto.Post post);

    Question QuestionPatchDtoToQuestion(QuestionDto.Patch patch);
}
