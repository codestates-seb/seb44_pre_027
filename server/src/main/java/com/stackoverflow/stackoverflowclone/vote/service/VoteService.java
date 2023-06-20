package com.stackoverflow.stackoverflowclone.vote.service;

import com.stackoverflow.stackoverflowclone.question.entity.Question;
import com.stackoverflow.stackoverflowclone.question.repository.QuestionRepository;
import com.stackoverflow.stackoverflowclone.question.service.QuestionService;
import com.stackoverflow.stackoverflowclone.vote.entity.Vote;
import com.stackoverflow.stackoverflowclone.vote.repository.VoteRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
public class VoteService {

    public final QuestionService questionService;
    public final VoteRepository voteRepository;



    /** 투표 메서드
     * - 파라미터로 받아서 good이면  status : GOOD, bad이면 status : BAD
     * - find()를 사용하여 나온 entity는 영속성 컨텍스트에 포함된다
     *   영속성 컨텍스트에 포함되어있는 entity 객체를 수정할 경우,
     *   트랜잭션이 커밋되는 시점에 내부적으로 UPDATE 쿼리를 생성하여 전달한다.
     * **/
    @Transactional
    public Vote createVote(Vote vote, String status) {

        // 처음 등록하는 vote 일때
        if(isVoteExists(vote.getMember().getMemberId(), vote.getQuestion().getQuestionId()) == false) {

            Question question = questionService.findVerifiedQuestion(vote.getQuestion().getQuestionId());

            if(status.equals("good")){
                vote.setStatus(Vote.voteStatus.GOOD);
            } else if (status.equals("bad")) {
                vote.setStatus(Vote.voteStatus.BAD);
            }

            // 연관관계 설정 후 calculateVoteScore
            question.addVoteScore(vote);

            return voteRepository.save(vote);
        }

        // 이미 등록된 vote 일때
        else {
            Vote findVote = getVoteByMemberIdAndQuestionId(vote.getMember().getMemberId(), vote.getQuestion().getQuestionId());

            Question findQuestion = questionService.findVerifiedQuestion(findVote.getQuestion().getQuestionId());

            // 투표 수정
            if ((findVote.getStatus() == Vote.voteStatus.GOOD || findVote.getStatus() == null ) && status.equals("bad")) {
                findVote.setStatus(Vote.voteStatus.BAD);
            } else if ((findVote.getStatus() == Vote.voteStatus.BAD || findVote.getStatus() == null )  && status.equals("good")) {
                findVote.setStatus(Vote.voteStatus.GOOD);
            }
            // 투표 취소
            else if (findVote.getStatus() == Vote.voteStatus.GOOD && status.equals("good")){
                findVote.setStatus(null);
            } else if (findVote.getStatus() == Vote.voteStatus.BAD && status.equals("bad")){
                findVote.setStatus(null);
            }

            findQuestion.calculateVoteScore();

            return voteRepository.save(findVote);

        }

    }

    /** 해당 memberId와 questionId를 가진 vote가 존재하는지 확인
     * - false : 신규
     * - true : 존재
     * **/
    public boolean isVoteExists(long memberId, long questionId) {
        int count = voteRepository.countByMemberIdAndQuestionId(memberId, questionId);
        return count > 0;
    }


    /** 존재하는 vote 가져오는 메서드 **/
    public Vote getVoteByMemberIdAndQuestionId(long memberId, long questionId) {
        return voteRepository.findByMemberMemberIdAndQuestionQuestionId(memberId, questionId);
    }

}
