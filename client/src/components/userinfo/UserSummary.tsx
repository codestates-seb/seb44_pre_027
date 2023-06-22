import React from 'react';
import {cva} from 'class-variance-authority';
import {cn} from '@/utils/cn';
import RaiseIcon from '@/assets/icons/RaiseIcon';
import BadgeIcon from '@/assets/icons/BadgeIcon';
import AstronautIcon from '@/assets/icons/AstronautIcon';
import Wifiicon from '@/assets/icons/WifiIcon';

const FilterButton = cva(
    `
        px-3 h-full hover:bg-zinc-200 flex items-center cursor-pointer
        active:bg-zinc-200 focus:bg-zinc-200 
    `,
);

const UserSummary = () => {
    return(
        <div className="flex flex-col ">
            <h2 className="pt-4 pb-1 text-[20px]">Summary</h2>
            <div className="flex flex-row justify-between">
                <div className="border border-zinc-200 max-w-[570px] w-5/12 rounded flex flex-col items-center py-10 px-5 mr-4 text-center">
                    <RaiseIcon className='fill-gray-400'/>
                    <span className="font-normal text-sm mb-2">Reputation is how the community thanks you</span>
                    <span className="font-light text-xs mb-5 w-10/12 text-center">When users upvote your helpful posts, you'll earn reputation and unlock new privileges.</span>
                    <span className="font-normal text-xs">Learn more about reputation and privileges</span>
                </div>
                <div className="border border-zinc-200 max-w-[570px] w-4/12 rounded flex flex-col items-center py-10 px-5 mr-4 text-center">
                    <BadgeIcon className='fill-gray-400'/>
                    <span className="font-normal text-sm mb-2">Earn badges for helpful actions</span>
                    <span className="font-light text-xs mb-5">Badges are bits of digital flair that you get when you participate in especially helpful ways.</span>
                    <button 
                            className="border border-zinc-200 bg-blue-400 py-2 px-3 mt-3 max-w-[220px]
                            hover:bg-sky-600 rounded text-white font-normal text-xs">
                            Take the Tour and earn your first badge
                        </button>
                </div>
                <div className="border border-zinc-200 max-w-[570px] w-3/12 rounded flex flex-col items-center py-10 px-5 text-center">
                    <AstronautIcon className='fill-gray-400'/>
                    <span className="font-normal text-sm mb-2">Measure your impact</span>
                    <span className="font-light text-xs mb-5">Your posts and helpful actions here help hundreds or thousands of people searching for help.</span>
                </div>
            </div>
            <div className=" flex flex-row mt-4">
                <div className="w-1/2 mr-4">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="pt-4 pb-1 text-[22px]">Answers</h2>
                        <div className='border border-zinc-300 rounded divide-x divide-zinc-300 h-8 flex font-light text-xs'>
                            <button className={cn(FilterButton())}>Score</button>
                            <button className={cn(FilterButton())}>Activity</button>
                            <button className={cn(FilterButton())}>Newest</button>
                        </div>
                    </div>
                    <div className="border border-zinc-200 rounded flex flex-col items-center py-10 px-5 text-center">
                        {/* 답장 리스트 출력 칸 */}
                        <p className="text-xs font-light">You have not <span className="text-sky-600">answered</span> any questions</p>
                    </div>
                </div>
                <div className="w-1/2 mr-4">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="pt-4 pb-1 text-[22px]">Qeustions</h2>
                        <div className='border border-zinc-300 rounded divide-x divide-zinc-300 h-8 flex font-light text-xs'>
                            <button className={cn(FilterButton())}>Score</button>
                            <button className={cn(FilterButton())}>Activity</button>
                            <button className={cn(FilterButton())}>Newest</button>
                            <button className={cn(FilterButton())}>Views</button>
                        
                        </div>
                    </div>
                    <div className="border border-zinc-200 rounded flex flex-col items-center py-10 px-5 text-center">
                        {/* 질문 리스트 출력 칸 */}
                        <p className="text-xs font-light">You have not <span className="text-sky-600">asked</span> any questions</p>
                    </div>
                </div>
            </div>
            {/* == 이하 태그 / 명성 구현 미정 == */}
            <div className=" flex flex-row mt-4">
                <div className="w-1/2 mr-4">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="pt-4 pb-1 text-[22px]">Tags</h2>
                    </div>
                    <div className="border border-zinc-200 rounded flex flex-col items-center py-10 px-5 text-center">
                        {/* 태그 리스트 출력 칸 */}
                        <p className="text-xs font-light">You have not participated in any <span className="text-sky-600">tags</span></p>
                    </div>
                </div>
                <div className="w-1/2 mr-4">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="pt-4 pb-1 text-[22px]">Reputation</h2>
                    </div>
                    <div className="border border-zinc-200 rounded flex flex-col items-center py-10 px-5 text-center">
                        {/* 명성 리스트 출력 칸 */}
                        <p className="text-xs font-light">You have no recent <span className="text-sky-600">reputation changes</span></p>
                    </div>
                </div>
            </div>
            <div className=" flex flex-row mt-4">
                <div className="w-full mr-4">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="pt-4 pb-1 text-[22px]">Badges</h2>
                    </div>
                    <div className="border border-zinc-200 rounded flex flex-col items-center py-10 px-5 text-center">
                        {/* 태그 리스트 출력 칸 */}
                        <p className="text-xs font-light">You have not earned any <span className="text-sky-600">badges</span></p>
                    </div>
                </div>
            </div>
            <div className=" flex flex-row items-center mt-4 mb-36">
                <Wifiicon className='fill-orange-400 mr-1'/>
                <span className='text-sky-600 text-sm'>User feed</span>
            </div>

        </div>
    )
};

export default UserSummary;