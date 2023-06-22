package com.stackoverflow.stackoverflowclone.vote.mapper;

import com.stackoverflow.stackoverflowclone.vote.dto.VoteDto;
import com.stackoverflow.stackoverflowclone.vote.entity.Vote;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;


@Mapper(componentModel = "spring")
public interface VoteMapper {

    @Mapping(source = "memberId", target = "member.memberId")
    @Mapping(source = "questionId", target = "question.questionId")
    Vote votePostDtoToVote(VoteDto.Post post);

    default VoteDto.Response voteToVoteResponseDto(Vote vote) {

        long questionId = vote.getQuestion().getQuestionId();

        return VoteDto.Response.builder()
                .questionId(questionId)
                .score(vote.getQuestion().getVoteScore())
                .build();
    }
}
