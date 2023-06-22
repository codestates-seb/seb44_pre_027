package com.stackoverflow.stackoverflowclone.member.mapper;

import com.stackoverflow.stackoverflowclone.member.dto.MemberListResponseDto;
import com.stackoverflow.stackoverflowclone.member.dto.MemberPatchDto;
import com.stackoverflow.stackoverflowclone.member.dto.MemberPatchResponseDto;
import com.stackoverflow.stackoverflowclone.member.dto.MemberPostDto;
import com.stackoverflow.stackoverflowclone.member.entity.Member;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-22T19:17:09+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 17.0.6 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostDtoToMember(MemberPostDto memberPostDto) {
        if ( memberPostDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setNickname( memberPostDto.getNickname() );
        member.setEmail( memberPostDto.getEmail() );
        member.setPassword( memberPostDto.getPassword() );

        return member;
    }

    @Override
    public Member memberPatchDtoToMember(MemberPatchDto memberPatchDto) {
        if ( memberPatchDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( memberPatchDto.getMemberId() );
        member.setNickname( memberPatchDto.getNickname() );
        member.setPassword( memberPatchDto.getPassword() );
        member.setLocation( memberPatchDto.getLocation() );
        member.setBioTitle( memberPatchDto.getBioTitle() );
        member.setBioContent( memberPatchDto.getBioContent() );

        return member;
    }

    @Override
    public MemberPatchResponseDto memberToMemberPatchResponeDto(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberPatchResponseDto.MemberPatchResponseDtoBuilder memberPatchResponseDto = MemberPatchResponseDto.builder();

        if ( member.getMemberId() != null ) {
            memberPatchResponseDto.memberId( member.getMemberId() );
        }
        memberPatchResponseDto.email( member.getEmail() );
        memberPatchResponseDto.nickname( member.getNickname() );
        memberPatchResponseDto.password( member.getPassword() );
        memberPatchResponseDto.location( member.getLocation() );
        memberPatchResponseDto.bioTitle( member.getBioTitle() );
        memberPatchResponseDto.bioContent( member.getBioContent() );

        return memberPatchResponseDto.build();
    }

    @Override
    public MemberListResponseDto memberToMemberListResponseDto(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberListResponseDto.MemberListResponseDtoBuilder memberListResponseDto = MemberListResponseDto.builder();

        if ( member.getMemberId() != null ) {
            memberListResponseDto.memberId( member.getMemberId() );
        }
        memberListResponseDto.email( member.getEmail() );
        memberListResponseDto.nickname( member.getNickname() );
        memberListResponseDto.location( member.getLocation() );

        return memberListResponseDto.build();
    }

    @Override
    public List<MemberListResponseDto> membersToMemberListResponseDtos(List<Member> members) {
        if ( members == null ) {
            return null;
        }

        List<MemberListResponseDto> list = new ArrayList<MemberListResponseDto>( members.size() );
        for ( Member member : members ) {
            list.add( memberToMemberListResponseDto( member ) );
        }

        return list;
    }
}
