import React, {useState} from 'react';
import {ReputationAlert} from '@/components/Alert';
import TwitterIcon from '@/assets/icons/TwitterIcon';
import GitHubIcon from '@/assets/icons/GithubIcon';
import LinkIcon from '@/assets/icons/LinkIcon';

const UserSetting = () => {
    const [isAlert, setIsAlert] = useState(false);

    const handleReputation = () => {
        setIsAlert(!isAlert);
        
        setTimeout(() => {
            setIsAlert(false);
        }, 2000); //2초 후에 isAlert false로 변경하여 사라지게 만듬.
    }

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
                                    maxLength={20}>
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
                                    maxLength={20}>
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
                                    maxLength={20}>
                                </input>
                            </div>
                        </div>
                        <div>
                        <div className="mb-2">
                                <div className=" mt-4 rounded-sm mb-3 "> About me </div>
                                <textarea 
                                    className=" w-full rounded-md border border-slate-300 
                                                px-3 py-2 text-xs min-h-[180px]"
                                    maxLength={100}>
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <h1 className="pt-4 pb-1 text-[20px]">Links</h1>
                    <div className="flex flex-row justify-between border border-zinc-200 p-4">
                        <div className="flex flex-col"><span>WebsiteLink</span>
                            <div className="relative mt-1">
                                <div className="absolute insert-y-0 left-0 flex items-center pt-2 pl-2 pointer-events-none"><LinkIcon className="fill-gray-500"/></div>
                                <input className=" block w-52 rounded-md border border-slate-300 pl-7 py-2 text-xs"></input>
                            </div>
                        </div>
                        <div className="flex flex-col"><span>Twitter link or username</span>
                            <div className="relative mt-1">
                                <div className="absolute insert-y-0 left-0 flex items-center pt-2 pl-2 pointer-events-none"><TwitterIcon /></div>
                                <input className=" block w-52 rounded-md border border-slate-300 pl-7 py-2 text-xs"></input>
                            </div>
                        </div>
                        <div className="flex flex-col"><span>GitHub link or username</span>
                            <div className="relative mt-1">
                                <div className="absolute insert-y-0 left-0 flex items-center pt-2 pl-2 pointer-events-none"><GitHubIcon /></div>
                                <input className=" block w-52 rounded-md border border-slate-300 pl-7 py-2 text-xs"></input>
                            </div>
                        </div>
                    </div>
                    <div className="my-20 text-sm">
                        <button 
                            className="border border-zinc-200 bg-blue-400 py-2 px-3 
                            hover:bg-sky-600 rounded text-white font-normal">
                            Save edits
                        </button>
                        <button 
                            className="bg-white text-sky-500 py-2 px-3 mx-2 
                                hover:bg-sky-50 hover:rounded font-normal">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserSetting;