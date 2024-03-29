package com.stackoverflow.stackoverflowclone.member.controller;


import com.stackoverflow.stackoverflowclone.member.dto.MemberDto;
import com.stackoverflow.stackoverflowclone.member.entity.Member;
import com.stackoverflow.stackoverflowclone.member.mapper.MemberMapper;
import com.stackoverflow.stackoverflowclone.member.service.MemberService;
import com.stackoverflow.stackoverflowclone.utils.UriCreator;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import java.net.URI;
import java.util.List;


@RestController
@RequestMapping("/users")
@Validated
public class MemberController {

    public final static String USER_DEFAULT_URL = "/users";
    private final MemberService memberService;
    private final MemberMapper memberMapper;

    public MemberController(MemberService memberService, MemberMapper memberMapper) {
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }

    @PostMapping("/signup")
    public ResponseEntity registerMember(@Valid @RequestBody MemberDto.Post memberPostDto) {
        Member member = memberMapper.memberPostDtoToMember(memberPostDto);

        Member response = memberService.createMember(member);

        URI location = UriCreator.createUri(USER_DEFAULT_URL, response.getMemberId());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") @Positive long memberId,
                                      @Valid @RequestBody MemberDto.Patch memberPatchDto) {
        memberPatchDto.setMemberId(memberId);

        Member response =
                memberService.updateMember(memberMapper.memberPatchDtoToMember(memberPatchDto));

        return new ResponseEntity<>(memberMapper.memberToMemberPatchResponeDto(response),
                HttpStatus.OK);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId) {
        Member response = memberService.findMember(memberId);

        return new ResponseEntity<>(memberMapper.memberToMemberResponseDto(response), HttpStatus.OK);
    }

    /** 회원 목록 조회 **/
    @GetMapping
    public ResponseEntity getMembers() {
        List<Member> members = memberService.findMembers();

        return new ResponseEntity<>(memberMapper.membersToMemberListResponseDtos(members), HttpStatus.OK);
    }

    // 추가
    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(
            @PathVariable("member-id") @Positive long memberId,
            @RequestParam("password") String password) {

        memberService.deleteMember(memberId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}

