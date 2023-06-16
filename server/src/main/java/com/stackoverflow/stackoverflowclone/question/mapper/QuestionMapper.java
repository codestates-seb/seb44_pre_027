package com.stackoverflow.stackoverflowclone.question.mapper;

import com.stackoverflow.stackoverflowclone.answer.dto.AnswerDto;
import com.stackoverflow.stackoverflowclone.question.dto.QuestionDto;
import com.stackoverflow.stackoverflowclone.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    @Mapping(source = "memberId", target = "member.memberId")
    Question QuestionPostDtoToQuestion(QuestionDto.Post post);

    Question QuestionPatchDtoToQuestion(QuestionDto.Patch patch);

    List<QuestionDto.SearchResponse> QuestionsToQuestionSearchResponseDtos(List<Question> questions);

    List<QuestionDto.Response> QuestionsToQuestionResponseDtos(List<Question> questions);

    /** mapper로 user, question, answer, comment, vote 같이 받아서 사용 **/
    default QuestionDto.Response QuestionToQuestionResponseDto(Question question){

        QuestionDto.Response questionResponseDto =
                QuestionDto.Response.builder()
                        .questionId(question.getQuestionId())
                        .nickname(question.getMember().getNickname())
                        .title(question.getTitle())
                        .content(question.getContent())
                        .createdAt(question.getCreatedAt())
                        .modifiedAt(question.getModifiedAt())
                        .views(question.getViews())
                        .build();

        if (question.getAnswers() != null) {
            List<AnswerDto.Response> answerResponseDtos =
                    question.getAnswers()
                            .stream()
                            .map(answer -> AnswerDto.Response.builder()
                                .answerId(answer.getAnswerId())
                                .questionId(answer.getQuestion().getQuestionId())
                                .content(answer.getContent())
                                .memberId(answer.getMember().getMemberId())
                                .createdAt(answer.getCreatedAt())
                                .modifiedAt(answer.getModifiedAt())
                                .build())
                            .collect(Collectors.toList());

            questionResponseDto.setAnswers(answerResponseDtos);
        }

        return questionResponseDto;
    }
}
