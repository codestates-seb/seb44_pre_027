package com.stackoverflow.stackoverflowclone.member.mapper;

import com.stackoverflow.stackoverflowclone.member.dto.MemberPostDto;
import com.stackoverflow.stackoverflowclone.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
        Member memberPostDtoToMember(MemberPostDto memberPostDto);
}
