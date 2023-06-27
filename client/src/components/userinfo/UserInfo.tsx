import React from 'react';
import PencilIcon from '@/assets/icons/PencilIcon';
import { UserSettingType } from '@/mocks/homeinquiry';
//상단의 유저 정보에 대한 컴포넌트

export type UserInfoProps = {
    isSettingOn: boolean;
    setIsSettingOn: React.Dispatch<React.SetStateAction<boolean>>;
    myInfo?:UserSettingType;
  };
  
const UserInfo = ({isSettingOn, setIsSettingOn, }:UserInfoProps) => {
    // console.log('UserInfo위치입니다. ' + myInfo);

    const changeSet = () => {
        setIsSettingOn(true);
    }

    return(
        <main className="mx-4 mt-4 max-w-full-xl flex flex-row justify-between">
            <div className="flex flex-row basis-10/12 ">
                <div className="drop-shadow-lg">
                    {/*유저 이미지*/}
                    <img src="https://www.gravatar.com/avatar/9bcf7a89f50be51792a0ce9e6af9e917?s=48&d=identicon&r=PG" 
                        alt="user image" 
                        className="w-28 h-28" />
                </div>
                <div className="ml-3 flex flex-col justify-center">
                    {/*유저 이름 + 생년 월일 */}
                    <div className=" text-[32px] font-normal mb-2"></div>   
                    <div className=" text-slate-500 font-normal text-sm">
                        <span>생일</span>
                        <span>정보</span>    
                        <span>하드코딩중</span>        
                    </div>             
                </div>
            </div>
            <div className="basis-2/12 flex flex-row">
                {/* 유저 정보 수정 버튼  - 버튼 클릭 시 특정 상태 값 하단 메인 세팅 부분 변경할 수 있게 적용 필요. */}
                <button 
                    className="px-3 py-2 m-2 w-32 h-10 border border-slate-400 rounded flex felx-row justify-center
                                text-sm text-gray-500 font-normal bg-white
                                hover:bg-slate-200"
                    onClick={changeSet}>
                    <PencilIcon className="w-3 h-3 m-1"/>
                    Edit profile
                </button>
                <button 
                    className=" px-3 py-2 m-2 w-24 h-10 border border-slate-400 rounded flex justify-center
                                text-sm text-gray-500 font-normal bg-white
                                hover:bg-slate-200">
                    Profiles
                </button>
            </div>
        </main>
    )
}

export default UserInfo;