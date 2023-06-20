package com.stackoverflow.stackoverflowclone.vote.repository;

import com.stackoverflow.stackoverflowclone.vote.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface VoteRepository extends JpaRepository<Vote,Long> {

    /** 해당 memberId와 questionId를 가진 vote가 존재하는지 확인 **/
    @Query("SELECT COUNT(v) FROM Vote v WHERE v.member.memberId = :memberId AND v.question.questionId = :questionId")
    int countByMemberIdAndQuestionId(@Param("memberId") long memberId, @Param("questionId") long questionId);


    /** 해당 memberId와 questionId를 가진 vote를 가져오는 메서드 **/
    Vote findByMemberMemberIdAndQuestionQuestionId(long memberId, long questionId);
}
