package com.stackoverflow.stackoverflowclone.member.service;

import com.stackoverflow.stackoverflowclone.exception.BusinessLogicException;
import com.stackoverflow.stackoverflowclone.exception.ExceptionCode;
import com.stackoverflow.stackoverflowclone.member.entity.Member;
import com.stackoverflow.stackoverflowclone.member.repository.MemberRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


@Service
public class MemberService {
    private final MemberRepository memberRepository;

    //private final PasswordEncoder passwordEncoder;
    //private final CustomAuthorityUtils authorityUtils;

    /*
    public MemberService(MemberRepository memberRepository,
                         PasswordEncoder passwordEncoder,
                         CustomAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

     */

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    /* 회원가입 */
    public Member createMember(Member member) {
        verifyExistsEmail(member.getEmail());
        return memberRepository.save(member);
    }

    /* 회원 정보 수정 */
    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getNickname())
                .ifPresent(nickname -> findMember.setNickname(nickname));
        Optional.ofNullable(member.getPassword())
                .ifPresent(password -> findMember.setPassword(password));
        Optional.ofNullable(member.getLocation())
                .ifPresent(location -> findMember.setLocation(location));
        Optional.ofNullable(member.getBioTitle())
                .ifPresent(biotitle -> findMember.setBioTitle(biotitle));
        Optional.ofNullable(member.getBioContent())
                .ifPresent(biocontent -> findMember.setBioContent(biocontent));

        return memberRepository.save(findMember);

    }

    /* 모든 회원 정보 조회 */
    public List<Member> findMembers() {
        return (List<Member>) memberRepository.findAll();
    }

    /* 특정 회원 정보 조회 */
    public Member findMember(long memberId) {
        return findVerifiedMember(memberId);
    }

    /* 회원 정보 삭제 */
    public void deleteMember(long memberId) {
        Member findMember = findVerifiedMember(memberId);

        memberRepository.delete(findMember);
    }

    /* 이미 존재하는 회원인지를 검증하는 메서드 */
    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember =
                memberRepository.findById(memberId);
        Member findMember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

    /* 이미 등록된 이메일인지를 검증하는 메서드 */
    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
}
