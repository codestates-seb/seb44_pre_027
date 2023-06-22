import React from 'react';
import {cva} from 'class-variance-authority';
import {cn} from '@/utils/cn';


type UserTopNavProps = {
    variant?:'summary' | 'settings' | 'side';
    setIsSettingOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserButton = cva(
    `
    w-20 py-1 px-2 hover:bg-orange-400 rounded-full hover:text-white text-sm text-gray-800
    active:bg-gray-300 active:text-gray-800 cursor-pointer
    focus:bg-orange-400 focus:text-white 
    `,{
        variants:{
            variant:{
                default:'',
                summary:'',
                settings:'',
                side:'w-30 focus:bg-zinc-300 focus:text-gray-800 hover:bg-zinc-300 hover:text-gray-800 active:bg-zinc-300',
                setting:'w-10/12  text-left text-gray-500 text-[14px] hover:bg-gray-300 hover:text-gray-700',
            }
        }
    }
);

export const UserTopNav = ({variant, setIsSettingOn}:UserTopNavProps):JSX.Element => {

    const changeSet = () => {
        setIsSettingOn(true);
    }

    const changeProfile = () => {
        setIsSettingOn(false);
    }

    return(
        <div className="h-10 mt-6 mx-4 ">
            <ul className="flex flex-row justify-between w-1/4">
                <li>
                    <button className={cn(UserButton({variant:variant}))}>Profile</button>
                </li>
                <li>
                    <button 
                    className={cn(UserButton({variant:variant}))}
                    onClick={changeProfile}>Activity</button>
                </li>
                <li>
                    <button className={cn(UserButton({variant:variant}))}>Saves</button>
                </li>
                <li>
                    <button 
                    className={cn(UserButton({variant:variant}))}
                    onClick={changeSet}>Settings</button>
                </li>
            </ul>
        </div>
    )
};



export const UserInfoNav = ():JSX.Element => {
    return(
        <div className="w-32 px-2 m-1">
            <div className="list-none">
                <li><button className={cn(UserButton({variant:"side"}))}>Summary</button></li>
                <li><button className={cn(UserButton({variant:"side"}))}>Answers</button></li>
                <li><button className={cn(UserButton({variant:"side"}))}>Tags</button></li>
                <li><button className={cn(UserButton({variant:"side"}))}>Articles</button></li>
                <li><button className={cn(UserButton({variant:"side"}))}>Following</button></li>
                <li><button className={cn(UserButton({variant:"side"}))}>Bounties</button></li>
                <li><button className={cn(UserButton({variant:"side"}))}>Reputation</button></li>
                <li><button className={cn(UserButton({variant:"side"}))}>All actions</button></li>
                <li><button className={cn(UserButton({variant:"side"}))}>Responses</button></li>
                <li><button className={cn(UserButton({variant:"side"}))}>Votes</button></li>
            </div>
        </div>
    )
};

export const UserSettingNav = ():JSX.Element => {
    return(
        <div className="w-content px-2 mt-3 mx-1">
            <div className="list-none flex flex-col text-start">
                <ul className="mb-6 w-[150px]">
                    <li className="font-semibold text-sxs pl-2">PERSONAL INFORMATION</li>
                    <li><button className={cn(UserButton({variant:"setting"}))}>Edit profile</button></li>
                    <li><button className={cn(UserButton({variant:"setting"}))}>Delete profile</button></li>
                </ul>
                <ul className="mb-6">
                    <li className="font-semibold text-sxs pl-2">EMAIL SETTINGS</li>
                    <li><button className={cn(UserButton({variant:"setting"}))}>Tags</button></li>
                    <li><button className={cn(UserButton({variant:"setting"}))}>Articles</button></li>
                    <li><button className={cn(UserButton({variant:"setting"}))}>Badges</button></li>
                    <li><button className={cn(UserButton({variant:"setting"}))}>Following</button></li>
                </ul>
                <ul className="mb-6">
                    <li className="font-semibold text-sxs pl-2">SITE SETTINGS</li>
                    <li><button className={cn(UserButton({variant:"setting"}))}>Bounties</button></li>
                    <li><button className={cn(UserButton({variant:"setting"}))}>Reputation</button></li>
                    <li><button className={cn(UserButton({variant:"setting"}))}>All actions</button></li>
                </ul>
                <ul className="mb-6">
                    <li className="font-semibold text-sxs pl-2">ACESS</li>
                    <li><button className={cn(UserButton({variant:"setting"}))}>Responses</button></li>
                    <li><button className={cn(UserButton({variant:"setting"}))}>Votes</button></li>
                </ul>
                <ul className="mb-6">
                    <li className="font-semibold text-sxs pl-2">API</li>
                    <li><button className={cn(UserButton({variant:"setting"}))}>Responses</button></li>
                </ul>
            </div>
        </div>
    )
};