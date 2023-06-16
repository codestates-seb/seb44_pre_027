package com.stackoverflow.stackoverflowclone.vote.service;

import com.stackoverflow.stackoverflowclone.question.repository.QuestionRepository;
import com.stackoverflow.stackoverflowclone.vote.repository.VoteRepository;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class VoteService {

    public final VoteRepository voteRepository;

    /** 투표 메서드
     *
     * **/
}
