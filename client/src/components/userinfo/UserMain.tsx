import React , {useState} from 'react';
import {UserSettingNav, UserInfoNav} from '../../components/userinfo/UserNav';
import UserSetting from './UserSetting';
import UserSummary from './UserSummary';


const UserMain = () => {
    const [isProfile, setIsProfile] = useState(true);
    return(
        <main className="ml-4 flex flex-row flex-grow-1">
            {isProfile ? 
            (   <>
                <div className="basis-2/12">
                    <UserSettingNav/>
                </div>
                <div className="mr-4 pl-4 basis-10/12">
                    <UserSetting/>
                </div>
                </>
            ) : (
                <>
                <div className="basis-2/12">
                    <UserInfoNav/>
                </div>
                <div className="mr-4 pl-4 basis-10/12">
                    <UserSummary/>
                </div>
                </>
            )}
        </main>
    )
};

export default UserMain;