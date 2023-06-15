package com.stackoverflow.stackoverflowclone.question.mapper;

import com.stackoverflow.stackoverflowclone.member.entity.Member;
import com.stackoverflow.stackoverflowclone.question.dto.QuestionDto;
import com.stackoverflow.stackoverflowclone.question.entity.Question;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-15T20:30:11+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.19 (Azul Systems, Inc.)"
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

    protected Member postToMember(QuestionDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( post.getMemberId() );

        return member;
    }
}
