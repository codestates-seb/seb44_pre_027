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

export interface indexUser {
    myinfo:UserSettingType[];
}



const UserPage = () => {
    const [isSettingOn, setIsSettingOn] = useState<boolean>(false);
    const [isAlert, setIsAlert] = useState(false); //알림창 
    const isUser = useSelector((state: RootState) => state.login); //로그인 여부 : boolean
    const [myInfo, setMyInfo] = useState<UserSettingType>();
    //const userId=isUser.accesstoken; // 로그인 된 유저의 고유의 id를 가져옵니다.
    const Id = 1; //임시

    useEffect(() => {
        const fetchUserData = async () => {
            try{ 
                const response = await fetch(`/users/${Id}`, {
                    method:'GET',
                    headers:{
                        'Accept': 'application/json',
                        'Host': 'localhost:8080',
                    }
                });
                
                //GET
                if(response.ok){
                    const userData = await response.json();
                    const myUserData = userData.data;
                    // const finalFiltere = filteredData.users;
                    setMyInfo(myUserData[0]); 
                } 
                //ERROR
                else{
                    console.log('화나지만 GET ERROR 발생');
                }
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchUserData();
    }, [])

    //DELETE 요청 실행 버튼 함수  
    const handleDeleteAccount = async () => {
        try{
            const response = await fetch(`/users/${Id}`, {
                method:'DELETE',
                headers:{
                    'Accept': 'application/json',
                    'Host': 'localhost:8080',
                }
            });

            if(response.ok){
                setIsAlert(true);
                setTimeout(() => {
                    setIsAlert(false);
                }, 2000);
            }else {
                console.log(' DELETE 요청 실패')
            }
        }catch (Error) {
            console.log('DELETE error: ', Error)
        }

    }
    
    //PATH요청 실행 버튼 함수 
    const handlePathAccount = async () => {
        try{
            const pathResponse = await fetch(`/users/${Id}`, {
                method:'PATCH',
                headers:{
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json',
                    'Content-Length': '169',
                    'Host': 'localhost:8080',
                },
                body:JSON.stringify(myInfo),
            });

            //PATCH
            if(pathResponse.ok){
                const userData = await pathResponse.json();
                const myUserData = userData.data;
                setMyInfo(myUserData[0]); 
                //PATCH요청의 body 등 필요한 정보 설정. 
            } else {
                console.log('PATCH 실패')
            }

        } catch (error) {
            console.log('Error: ', error);
        }
    }


    console.log(myInfo);

    const handleSetting = () => {
        setIsSettingOn(!isSettingOn);
    }

    return(
        <Wrapper>
            {isAlert ? <DeletAlert/> : null}
            <div className="flex flex-row ">
                <LeftSideBar/>
                <main className="mx-auto mb-20 flex flex-col">
                    <UserInfo isSettingOn={isSettingOn} setIsSettingOn={setIsSettingOn}/>
                    <div>
                        <UserTopNav setIsSettingOn={setIsSettingOn}/>
                        <UserMain 
                        isSettingOn={isSettingOn} 
                        myInfo={myInfo as UserSettingType } 
                        setMyInfo={setMyInfo as React.Dispatch<React.SetStateAction<UserSettingType>>}
                        handlePathAccount={handlePathAccount} />
                    </div>
                    <div>
                        <button 
                        className="px-3 py-2 mx-3 w-32 h-10 border border-slate-400 rounded flex felx-row justify-center
                        text-sm text-gray-500 font-normal bg-sky-200
                        hover:bg-slate-200"
                        onClick={handleDeleteAccount}>
                            회원 탈퇴
                        </button>
                    </div>
                </main>
            </div>
        </Wrapper>
    )
}

export default UserPage;