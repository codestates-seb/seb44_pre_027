import React, {useState, useEffect} from 'react';
import UserInfo from '../../components/userinfo/UserInfo';
import {UserTopNav} from '../../components/userinfo/UserNav';
import UserMain from '@/components/userinfo/UserMain';
import Wrapper from '@/common/Wrapper';
import LeftSideBar from '@/components/LeftSideBar';

import { useSelector } from 'react-redux';
import { RootState } from '@/modules/store';
import { UserSettingType, userinquiry } from '@/mocks/homeinquiry';

export interface indexUser {
    user_id?:number;
    user_nickname?:string;
    user_location?:string;
    bio_title?:string;
    bio_content?:string;
    myinfo:UserSettingType[];
}



const UserPage = () => {
    const [isSettingOn, setIsSettingOn] = useState<boolean>(false);
    const isUser = useSelector((state: RootState) => state.login); //로그인 여부 : boolean
    const [myInfo, setMyInfo] = useState<indexUser>();
    //const userId=isUser.accesstoken; // 로그인 된 유저의 고유의 id를 가져옵니다.
    const userId = 1; //임시

    useEffect(() => {
        const fetchUserData = async () => {
            try{ 
                const response = await fetch(`/users/${userId}`);
                if(response.ok){
                    const userData = await response.json();
                    const filteredData = userData.data;
                    const finalFiltere = filteredData.users;
                    setMyInfo(finalFiltere);
                    
                }else{
                    console.log('화나지만 ERROR 발생');
                }
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchUserData();
    }, [])

    //console.log(myInfo);

    const handleSetting = () => {
        setIsSettingOn(!isSettingOn);
    }

    return(
        <Wrapper>
            <div className="flex flex-row ">
                <LeftSideBar/>
                <main className="mx-auto mb-20 flex flex-col">
                    <UserInfo isSettingOn={isSettingOn} handleSetting={handleSetting}/>
                    <div>
                        <UserTopNav handleSetting={handleSetting}/>
                        <UserMain isSettingOn={isSettingOn} myInfo={myInfo as indexUser} />
                    </div>
                    <div>
                        <button 
                        className="px-3 py-2 mx-3 w-32 h-10 border border-slate-400 rounded flex felx-row justify-center
                        text-sm text-gray-500 font-normal bg-sky-200
                        hover:bg-slate-200">
                            회원 탈퇴
                        </button>
                    </div>
                </main>
            </div>
        </Wrapper>
    )
}

export default UserPage;