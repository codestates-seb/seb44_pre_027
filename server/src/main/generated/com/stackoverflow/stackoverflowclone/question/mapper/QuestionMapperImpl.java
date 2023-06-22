package com.stackoverflow.stackoverflowclone.question.mapper;

import com.stackoverflow.stackoverflowclone.member.entity.Member;
import com.stackoverflow.stackoverflowclone.question.dto.QuestionDto;
import com.stackoverflow.stackoverflowclone.question.entity.Question;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-22T19:17:09+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 17.0.6 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question QuestionPostDtoToQuestion(QuestionDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Question question = new Question();

        question.setMember( postToMember( post ) );
        question.setTitle( post.getTitle() );
        question.setContent( post.getContent() );

        return question;
    }

    @Override
    public Question QuestionPatchDtoToQuestion(QuestionDto.Patch patch) {
        if ( patch == null ) {
            return null;
        }

        Question question = new Question();

        question.setQuestionId( patch.getQuestionId() );
        question.setTitle( patch.getTitle() );
        question.setContent( patch.getContent() );

        return question;
    }

    @Override
    public List<QuestionDto.SearchResponse> QuestionsToQuestionSearchResponseDtos(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionDto.SearchResponse> list = new ArrayList<QuestionDto.SearchResponse>( questions.size() );
        for ( Question question : questions ) {
            list.add( QuestionToQuestionSearchResponseDto( question ) );
        }

        return list;
    }

    @Override
    public List<QuestionDto.Response> QuestionsToQuestionResponseDtos(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionDto.Response> list = new ArrayList<QuestionDto.Response>( questions.size() );
        for ( Question question : questions ) {
            list.add( QuestionToQuestionResponseDto( question ) );
        }

        return list;
    }

    @Override
    public QuestionDto.postResponse QuestionToQuestionPostResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionDto.postResponse.postResponseBuilder postResponse = QuestionDto.postResponse.builder();

        if ( question.getQuestionId() != null ) {
            postResponse.questionId( question.getQuestionId() );
        }

        return postResponse.build();
    }

    protected Member postToMember(QuestionDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( post.getMemberId() );

        return member;
    }
}
