package com.stackoverflow.stackoverflowclone.vote.repository;

import com.stackoverflow.stackoverflowclone.vote.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VoteRepository extends JpaRepository<Vote,Long> {
}
