import React, {useState, useEffect} from 'react';
import UserInfo from '../../components/userinfo/UserInfo';
import {UserTopNav} from '../../components/userinfo/UserNav';
import UserMain from '../../components/userinfo/UserMain';
import Wrapper from '../../common/Wrapper';
import LeftSideBar from '../../components/LeftSideBar';
import {DeletAlert} from '../../components/Alert';

import { useSelector } from 'react-redux';
import { RootState } from '../../modules/store';
import { UserSettingType } from '../../mocks/homeinquiry';
import { call } from '@/utils/ApiService';

export interface indexUser {
    myinfo:UserSettingType[];
}



const UserPage = () => {
    const [isSettingOn, setIsSettingOn] = useState<boolean>(false);
    const [isAlert, setIsAlert] = useState(false); //알림창 
    const isUser = useSelector((state: RootState) => state.login); //로그인 여부 : boolean
    const [myInfo, setMyInfo] = useState<UserSettingType>();

    //memberId가져오기 
    const isLogin = useSelector((state:RootState) => (state.login));
    const localmemberId = isLogin.memberId;
    console.log('userPage ID: ' + localmemberId); //동작 완

    useEffect(() => {
        const fetchUserData = async () => {
            return call(`/users/${localmemberId}`, 'GET', null)
            .then((res) => {
                setMyInfo(res);
                console.log(`USER 정보 출력:  ${res}`);
                console.log(`USER 정보 2차 출력: ${res.nickname}`)
            })
            .catch((Err) => console.log('유저정보 GET 에러 발생: ' + Err));
        };

        fetchUserData();
    }, [])

    //DELETE 요청 실행 버튼 함수  
    const handleDeleteAccount = async (localmemberId) => {
        return call(`users/${localmemberId}`, 'DELETE', {...myInfo})
        .then((res) =>{
            setIsAlert(true);
            setTimeout(() => {
                setIsAlert(false);
            }, 2000);
        })
        .catch((Err) => console.log('DELETE 에러 발생: ' + Err));
    }

    const handleSetting = () => {
        setIsSettingOn(!isSettingOn);
    }

    return(
        <Wrapper>
            {isAlert ? <DeletAlert/> : null}
            <div className="flex flex-row ">
                <LeftSideBar/>
                <main className="mx-auto mb-20 flex flex-col">
                    <UserInfo isSettingOn={isSettingOn} setIsSettingOn={setIsSettingOn} myInfo={myInfo}/>
                    <div>
                        <UserTopNav setIsSettingOn={setIsSettingOn}/>
                        <UserMain 
                        isSettingOn={isSettingOn} 
                        myInfo={myInfo as UserSettingType } 
                        setMyInfo={setMyInfo as React.Dispatch<React.SetStateAction<UserSettingType>>}
                         />
                    </div>
                    <div>
                        <button 
                        className="px-3 py-2 mx-3 w-32 h-10 border border-slate-400 rounded flex felx-row justify-center
                        text-sm text-gray-500 font-normal bg-sky-200
                        hover:bg-slate-200"
                        onClick={() => handleDeleteAccount(myInfo.memberId)}>
                            회원 탈퇴
                        </button>
                    </div>
                </main>
            </div>
        </Wrapper>
    )
}

export default UserPage;