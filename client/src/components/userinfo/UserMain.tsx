import React from 'react';
import {UserSettingNav, UserInfoNav} from '../../components/userinfo/UserNav';
import UserSetting from './UserSetting';
import UserSummary from './UserSummary';


const UserMain = () => {
    return(
        <main className="ml-4 h-screen flex flex-row">
            {/*
                <UserSettingNav/>
                <UserSetting/>
            */}
            <div className="basis-2/12">
                <UserInfoNav/>
            </div>
            <div className="mr-4 pl-4 basis-10/12">
                <UserSummary/>
            </div>
        </main>
    )
};

export default UserMain;