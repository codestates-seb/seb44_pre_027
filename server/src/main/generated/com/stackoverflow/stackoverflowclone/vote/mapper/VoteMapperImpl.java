package com.stackoverflow.stackoverflowclone.vote.mapper;

import com.stackoverflow.stackoverflowclone.member.entity.Member;
import com.stackoverflow.stackoverflowclone.question.entity.Question;
import com.stackoverflow.stackoverflowclone.vote.dto.VoteDto;
import com.stackoverflow.stackoverflowclone.vote.entity.Vote;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-22T19:17:09+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 17.0.6 (Azul Systems, Inc.)"
)
@Component
public class VoteMapperImpl implements VoteMapper {

    @Override
    public Vote votePostDtoToVote(VoteDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Vote vote = new Vote();

        vote.setMember( postToMember( post ) );
        vote.setQuestion( postToQuestion( post ) );

        return vote;
    }

    protected Member postToMember(VoteDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( post.getMemberId() );

        return member;
    }

    protected Question postToQuestion(VoteDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Question question = new Question();

        question.setQuestionId( post.getQuestionId() );

        return question;
    }
}
