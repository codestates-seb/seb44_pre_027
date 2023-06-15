package com.stackoverflow.stackoverflowclone.member.controller;


import com.stackoverflow.stackoverflowclone.member.dto.MemberDto;
import com.stackoverflow.stackoverflowclone.member.dto.MemberPostDto;
import com.stackoverflow.stackoverflowclone.member.entity.Member;
import com.stackoverflow.stackoverflowclone.member.mapper.MemberMapper;
import com.stackoverflow.stackoverflowclone.member.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/members")
@Validated
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper memberMapper;

    public MemberController(MemberService memberService, MemberMapper memberMapper) {
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }

    @PostMapping
    public ResponseEntity registerMember(@Valid @RequestBody MemberPostDto memberPostDto) {
        Member member = memberMapper.memberPostDtoToMember(memberPostDto);

        Member response = memberService.createMember(member);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

}

