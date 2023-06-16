import React from 'react';
import UserInfo from '../../components/userinfo/UserInfo';
import {UserTopNav} from '../../components/userinfo/UserNav';
import UserMain from '@/components/userinfo/UserMain';

interface Userpage {}

const UserPage = ({}:Userpage) => {
    return(
        <main className="max-w-screen-xl">
            <UserInfo/>
            <UserTopNav/>
            <UserMain/>
        </main>
    )
}

export default UserPage;