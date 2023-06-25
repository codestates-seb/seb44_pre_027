package com.stackoverflow.stackoverflowclone.member.mapper;

import com.stackoverflow.stackoverflowclone.answer.dto.AnswerDto;
import com.stackoverflow.stackoverflowclone.member.dto.*;
import com.stackoverflow.stackoverflowclone.member.entity.Member;
import com.stackoverflow.stackoverflowclone.question.dto.QuestionDto;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member memberPostDtoToMember(MemberDto.Post memberPostDto);
    Member memberPatchDtoToMember(MemberDto.Patch memberPatchDto);

    MemberDto.PatchResponse memberToMemberPatchResponeDto(Member member);

    /** 회원 정보 조희 **/
    default MemberDto.Response memberToMemberResponseDto(Member member){

        MemberDto.Response memberResponseDto = MemberDto.Response.builder()
                .memberId(member.getMemberId())
                .email(member.getEmail())
                .nickname(member.getNickname())
                .password(member.getPassword())
                .location(member.getLocation())
                .bioTitle(member.getBioTitle())
                .bioContent(member.getBioContent())
                .build();

        if(member.getQuestions() != null){
            List<QuestionDto.questionResponse> questionResponseDtos =
                    member.getQuestions()
                            .stream()
                            .map(question -> QuestionDto.questionResponse.builder()
                                    .questionId(question.getQuestionId())
                                    .title(question.getTitle())
                                    .content(question.getContent())
                                    .createdAt(question.getCreatedAt())
                                    .modifiedAt(question.getModifiedAt())
                                    .views(question.getViews())
                                    .voteScore(question.getVoteScore())
                                    .build())
                            .collect(Collectors.toList());

            memberResponseDto.setQuestions(questionResponseDtos);

            if(member.getAnswers() != null){
                List<AnswerDto.Response> answerResponseDtos =
                        member.getAnswers()
                                .stream()
                                .map(answer -> AnswerDto.Response.builder()
                                        .answerId(answer.getAnswerId())
                                        .questionId(answer.getQuestion().getQuestionId())
                                        .nickname(answer.getMember().getNickname())
                                        .content(answer.getContent())
                                        .memberId(answer.getMember().getMemberId())
                                        .createdAt(answer.getCreatedAt())
                                        .modifiedAt(answer.getModifiedAt())
                                        .build())
                                .collect(Collectors.toList());

                memberResponseDto.setAnswers(answerResponseDtos);
            }
        }

        return memberResponseDto;
    }

    MemberDto.ListResponse memberToMemberListResponseDto(Member member);

    List<MemberDto.ListResponse> membersToMemberListResponseDtos(List<Member> members);

}