package com.stackoverflow.stackoverflowclone.vote.controller;

import com.stackoverflow.stackoverflowclone.vote.dto.VoteDto;
import com.stackoverflow.stackoverflowclone.vote.entity.Vote;
import com.stackoverflow.stackoverflowclone.vote.mapper.VoteMapper;
import com.stackoverflow.stackoverflowclone.vote.service.VoteService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/questions")
public class VoteController {

    private final VoteService voteService;
    private final VoteMapper voteMapper;

    /** 투표 등록, 수정, 삭제를 한번에 **/
    @PostMapping("/{question-id}/votes")
    public ResponseEntity postVote(@Positive @PathVariable("question-id") long questionId,
                                   @RequestParam String status,
                                   @RequestBody VoteDto.Post post){

        post.setQuestionId(questionId);

        Vote vote = voteService.createVote(voteMapper.votePostDtoToVote(post), status);

        return new ResponseEntity<>(voteMapper.voteToVoteResponseDto(vote), HttpStatus.OK);
    }
}
