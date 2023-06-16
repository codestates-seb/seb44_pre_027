package com.stackoverflow.stackoverflowclone.member.mapper;

import com.stackoverflow.stackoverflowclone.member.dto.MemberPatchDto;
import com.stackoverflow.stackoverflowclone.member.dto.MemberPostDto;
import com.stackoverflow.stackoverflowclone.member.dto.MemberResponseDto;
import com.stackoverflow.stackoverflowclone.member.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
        Member memberPostDtoToMember(MemberPostDto memberPostDto);
        Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);
        MemberResponseDto memberToMemberResponseDto(Member member);
        List<MemberResponseDto> membersToMemberResponseDtos(List<Member> members);

}
