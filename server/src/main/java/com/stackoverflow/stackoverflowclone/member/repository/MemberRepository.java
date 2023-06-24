package com.stackoverflow.stackoverflowclone.member.repository;

import com.stackoverflow.stackoverflowclone.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);
}
