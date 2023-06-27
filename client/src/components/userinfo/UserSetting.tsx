import React, {useState, memo, useEffect} from 'react';
import {ReputationAlert} from '@/components/Alert';
import TwitterIcon from '@/assets/icons/TwitterIcon';
import GitHubIcon from '@/assets/icons/GithubIcon';
import LinkIcon from '@/assets/icons/LinkIcon';
import { WholeUserTypes } from './UserMain';
import { call } from '@/utils/ApiService';

interface ButtonProps {
    onClick:React.MouseEventHandler<HTMLButtonElement>;
    children:string;
}
const UserSetting = ({myInfo, setMyInfo}:WholeUserTypes) => {
    const [isAlert, setIsAlert] = useState(false);
    const [isButtonClick, setIsButtonClick] = useState(false);
    const [textValue, setTextValue] = useState(
        {

            "nickname":`${myInfo.nickname}`,
            "location":`${myInfo.location}`,
            "bioTitle":`${myInfo.bioTitle}`,
            "bioContent": `${myInfo.bioContent}`,

        }
    );
    
    //버튼이 동작 할 때마다 리렌더링 되면서 초기값으로 돌아오거나 저장된 내용이 반영됩니다.
    useEffect(() => {
    }, [isButtonClick])

    const handleReputation = () => {
        setIsAlert(!isAlert);
        
        setTimeout(() => {
            setIsAlert(false);
        }, 2000); 
    }

    const handleUserName = (e:React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        const updateValue = {...textValue}
        updateValue.nickname = newValue;
        setTextValue(updateValue);
    }

    const handleUserLocation = (e:React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        const updateValue = {...textValue};
        updateValue.location = newValue;
        setTextValue(updateValue);
    }

    const handleUserTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        const updateValue = {...textValue};
        updateValue.bioTitle = newValue;
        setTextValue(updateValue);
    }

    const handleUserContent = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        const updateValue = {...textValue};
        updateValue.bioContent = newValue;
        setTextValue(updateValue);
    }

    const ReRenderButton: React.FC<ButtonProps> = memo(({onClick, children}) => {
        return (
                <button className="bg-sky-50 text-sky-500 w-24 py-2 px-3 mx-2 hover:bg-blue-200 hover:rounded font-normal
                                     border border-zinc-200"
                        onClick={onClick}>{children}
                </button>
        );
    });


    const handleSaveBtn = async (memberId) => {
        return call(`/users/${memberId}`, 'PATCH', {memberId:memberId, ...textValue})
        .then((res) => {
            console.log('PATCH 성공');
            setMyInfo(textValue);
            setIsButtonClick(!isButtonClick);
            setMyInfo(res);
        })
        .catch((Err) => console.log('PATCH 실패 : '+ Err));
    }

    const handleCancleBtn = () => {
        setTextValue({

            "nickname":`${myInfo.nickname}`,
            "location":`${myInfo.location}`,
            "bioTitle":`${myInfo.bioTitle}`,
            "bioContent": `${myInfo.bioContent}`,

        })
        setIsButtonClick(!isButtonClick);
    }
    
    //console.log(textValue);
    return(
        <div className=" ">
            {isAlert ? <ReputationAlert/> : null}
            <div className="border-b border-zinc-200 font-normal text-[28px] pb-2">Edit your profile</div>
            <h2 className="pt-4 pb-1 text-[20px]">Public information</h2>
            <div className=" border border-zinc-200 rounded">
                <div className="p-4">
                    <div className=" ">
                            <h3 className="font-normal">Profile image</h3>
                            <div className=" relative">
                                {/*유저 이미지*/}
                                <img src="https://www.gravatar.com/avatar/9bcf7a89f50be51792a0ce9e6af9e917?s=48&d=identicon&r=PG" 
                                    alt="user image" 
                                    className="w-32 h-32" />
                                 <button className="absolute bottom-0 bg-opacity-80 w-32 
                                        bg-slate-900 text-white text-xs p-2 text-center
                                        cursor-pointer"
                                        onClick={handleReputation}
                                        >
                                        Change picture
                                </button>
                            </div>
                        <div>
                            <div className="mb-2">
                                <div className=" mt-4 rounded-sm mb-3 "> Display name </div>
                                <input 
                                    type="text"
                                    className=" w-96 rounded-md border border-slate-300 
                                                px-3 py-2 text-xs"
                                    maxLength={20}
                                    value={textValue.nickname}
                                    onChange={handleUserName}
                                    >
                                        
                                </input>
                            </div>
                        </div>
                        <div>
                            <div className="mb-2">
                                <div className=" mt-4 rounded-sm mb-3 "> Location </div>
                                <input 
                                    type="text"
                                    className=" w-96 rounded-md border border-slate-300 
                                                px-3 py-2 text-xs "
                                    maxLength={20}
                                    value={textValue.location}
                                    onChange={handleUserLocation}
                                    >

                                </input>
                            </div>    
                        </div>
                        <div>
                            <div className="mb-2">
                                <div className=" mt-4 rounded-sm mb-3 "> Title </div>
                                <input 
                                    type="text"
                                    className=" w-96 rounded-md border border-slate-300 
                                                px-3 py-2 text-xs"
                                    placeholder="No title has been set"
                                    maxLength={20}
                                    value={textValue.bioTitle}
                                    onChange={handleUserTitle}
                                    >

                                </input>
                            </div>
                        </div>
                        <div>
                        <div className="mb-2">
                                <div className=" mt-4 rounded-sm mb-3 "> About me </div>
                                <textarea 
                                    className=" w-full rounded-md border border-slate-300 
                                                px-3 py-2 text-xs min-h-[180px]"
                                    maxLength={100}
                                    value={textValue.bioContent}
                                    onChange={handleUserContent}
                                    >

                                </textarea>
                            </div>
                        </div>
                    </div>
                    <h1 className="pt-4 pb-1 text-[20px]">Links</h1>
                    <div className="flex flex-row justify-between border border-zinc-200 p-4">
                        <div className="flex flex-col"><span>WebsiteLink</span>
                            <div className="relative mt-1">
                                <div className="absolute insert-y-0 left-0 flex items-center pt-2 pl-2 pointer-events-none"><LinkIcon className="fill-gray-500"/></div>
                                <input className=" block w-52 mr-2 rounded-md border border-slate-300 pl-7 py-2 text-xs" onClick={handleReputation}></input>
                            </div>
                        </div>
                        <div className="flex flex-col"><span>Twitter link or username</span>
                            <div className="relative mt-1">
                                <div className="absolute insert-y-0 left-0 flex items-center pt-2 pl-2 pointer-events-none"><TwitterIcon /></div>
                                <input className=" block w-52 mr-2 rounded-md border border-slate-300 pl-7 py-2 text-xs" onClick={handleReputation}></input>
                            </div>
                        </div>
                        <div className="flex flex-col"><span>GitHub link or username</span>
                            <div className="relative mt-1">
                                <div className="absolute insert-y-0 left-0 flex items-center pt-2 pl-2 pointer-events-none"><GitHubIcon /></div>
                                <input className=" block w-52 rounded-md border border-slate-300 pl-7 py-2 text-xs" onClick={handleReputation}></input>
                            </div>
                        </div>
                    </div>
                    <div className="my-20 text-sm">
                        <ReRenderButton
                            onClick={handleReputation}>
                            Save edits
                        </ReRenderButton>
                        <ReRenderButton
                            onClick={handleCancleBtn}>
                            Cancel
                        </ReRenderButton>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserSetting;