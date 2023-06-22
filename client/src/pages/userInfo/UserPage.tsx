import React from 'react';
import UserInfo from '../../components/userinfo/UserInfo';
import {UserTopNav} from '../../components/userinfo/UserNav';
import UserMain from '@/components/userinfo/UserMain';
import Wrapper from '@/common/Wrapper';
import LeftSideBar from '@/components/LeftSideBar';
import {Routes, Route} from 'react-router-dom';

interface Userpage {}

const UserPage = ({}:Userpage) => {
    return(
        <Wrapper>
            <div className="flex flex-row ">
                <LeftSideBar/>
                <main className="mx-auto mb-20 flex flex-col">
                    <UserInfo/>
                    <div>
                        <UserTopNav/>
                        <UserMain/>
                    </div>
                </main>
            </div>
        </Wrapper>
    )
}

export default UserPage;