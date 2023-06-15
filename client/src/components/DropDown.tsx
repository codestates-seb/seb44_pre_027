import React from 'react';
import {cva} from 'class-variance-authority';
import {cn} from '@/utils/cn';

interface DropDownUI {
    variant: 'box' | 'cup' | 'question' | 'menu'; 
};

const handlePosition = cva(
    `
    absolute h-80 top-full left-1/2  drop-shadow-lg border border-inherit bg-white divide-y divide-gray-100
    `,{
        variants:{
            data:{
                default:'',
                box: 'end-44 w-64 transform -translate-x-52',
                cup:'end-32 w-72 transform -translate-x-60',
                question:'h-auto end-20 w-48 transform -translate-x-3/4',
                menu: 'end-12 w-80  transform -translate-x-72',
            }
        }
    }
);



const DropDown = ({variant}: DropDownUI):JSX.Element | null => {
    if(variant === 'box'){
        return(
            <div className="z-10 absolute divide-y divide-gray-100 rounded-lg ">
                <ul className={cn(handlePosition({data:variant}))}>
                    <li className="block h-full flex flex-col cursor-pointer text-sxs font-extralight">
                        <div className="flex flex-row p-2 bg-slate-200 justify-between border-b font-medium border-zinc-400">
                            <span >INBOX(ALL)</span>
                            <span className="text-sky-400">Mark all as red</span>
                        </div>
                        {/*스크롤바 포기*/}
                        <div className="bg-slate-200 flex flex-col justify-between pb-2 border-b border-zinc-400">
                            {/*아이콘 들어갈 자리*/}
                            <div className="flex flex-row justify-between py-1">
                                    <span className="ml-2">welcome</span><span className="flex flex-row">Nov24, 2022 at 8:33
                                        <svg viewBox="0 0 14 14" className="w-2 h-2 mx-2">
                                            <path d="M7 9 1.52 5.87a1 1 0 0 1 0-1.74L7 1l5.48 3.13a1 1 0 0 1 0 1.74L7 9ZM1 7.14l6 3.6 6-3.6v5.43c0 .8-.71 1.43-1.5 1.43h-9c-.79 0-1.5-.62-1.5-1.43V7.14Z"></path>
                                        </svg>
                                    </span>
                            </div>
                            <span className="ml-2">Welcome to Stack Overflow! Take the 2-minute site tour to earn your first badge.</span>
                        </div>
                        <div className="grow"></div>
                        <span className="text-cyan-600 py-1 text-center font-medium hover:bg-slate-200">Go full box</span>
                    </li>
                </ul>
            </div>
    
        )
    }else if (variant === 'cup'){
        return(
            <div className="z-10 absolute divide-y divide-gray-100 rounded-lg ">
                <ul className={cn(handlePosition({data:variant}))}>
                    <li className="block h-full flex flex-col cursor-pointer text-sxs font-extralight">
                        <div className="flex flex-row p-2 bg-slate-200 justify-between font-normal border-b border-zinc-400">
                            <span >ACHIEVEMENTS</span>
                            <span className="text-sky-400">privilieges . badges</span>
                        </div>
                        {/*스크롤바 포기*/}
                        <div className="flex flex-col justify-between pb-2 ">
                            {/*아이콘 들어갈 자리*/}
                            <div className="flex flex-col pl-2 py-1">
                                <span className="py-1">You have not yet earned any achievements.</span>
                                <span>Why not <span className="text-sky-400 underline decoration-solid">take the tour</span> or <span className="text-sky-400 underline decoration-solid">fill out your profile?</span></span>
                            </div>
                        </div>
                        <div className="grow"></div>
                    </li>
                </ul>
            </div>
        )
    }else if (variant === 'question'){
        return(
            <div className="z-10 absolute divide-y divide-gray-100 rounded-lg ">
                <div className={cn(handlePosition({data:variant}))}>
                    <div className="block h-full flex flex-col cursor-pointer text-sxs">
                        <div className="flex flex-col py-3 px-2 border-b border-zinc-200 hover:bg-zinc-200">
                            <span className="font-normal pb-2 text-cyan-500">Tour</span>
                            <span className="font-light">Start here for a quick overview of the site</span>
                        </div>
                        <div className="flex flex-col py-3 px-2 border-b border-zinc-200 hover:bg-zinc-200">
                            <span className="font-normal pb-2 text-cyan-500">Help Center</span>
                            <span className="font-light">SDetailed answers to any questions you minght have</span>
                        </div>
                        <div className="flex flex-col py-3 px-2 border-b border-zinc-200 hover:bg-zinc-200">
                            <span className="font-normal pb-2 text-cyan-500">Meta</span>
                            <span className="font-light">Discuss the working and policies of this site</span>
                        </div>
                        <div className="flex flex-col py-3 px-2 border-b border-zinc-200 hover:bg-zinc-200">
                            <span className="font-normal pb-2 text-cyan-500">About me</span>
                            <span className="font-light">Learn more about Stack Overflow the company, and our products.</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else if (variant === 'menu'){
        return(
            <div className="z-10 absolute divide-y divide-gray-100 rounded-lg ">
                <ul className={cn(handlePosition({data:variant})) }>
                    <li className="block flex flex-col cursor-pointer text-sxs">
                        <span className="font-semibold bg-zinc-200 p-2 border-b border-zinc-300 text-sky-800">CURRENT COMMUNITY</span>
                        <div className="flex flex-col p-2 bg-blue-50 hover:bg-blue-100 justify-between font-normal border-b border-zinc-200">
                            <div className=" flex flex-row justify-between text-sxs">
                                {/* 아이콘 들어갈 자리  */}
                                <span className="font-semibold text-sky-800">Stack Overflow</span>
                                <ul className="flex flex-rowtext-sxs pb-2 text-cyan-500">
                                    <li className="pl-4">help</li>
                                    <li className="pl-4">chat</li>
                                    <li className="pl-4">
                                        {/* logOut 기능 구현 예정*/}
                                        <button>
                                            log out
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="block flex flex-col cursor-pointer text-sxs">
                        <div className="flex flex-row justify-between p-2 bg-zinc-200 border-b border-zinc-300 ">
                            <span className="font-semibold text-sky-800">YOUR COMMUNITIES</span>
                            <span className="flex flex-rowtext-sxs text-cyan-500">edit</span>
                        </div>
                        <div className="flex flex-col p-2  bg-blue-50 hover:bg-blue-100 justify-between font-normal border-b border-zinc-200">
                            <div className=" flex flex-row justify-between text-sxs">
                                {/* 아이콘 들어갈 자리  */}
                                <span className="font-semibold text-sky-800">Stack Overflow</span>
                                <span className="flex flex-rowtext-sxs pb-2 text-black">
                                    1
                                </span>
                            </div>
                        </div>
                    </li>
                    <li className="block flex flex-col cursor-pointer text-sxs">
                        <div className="flex flex-row justify-between p-2 bg-zinc-200 border-b border-zinc-300 ">
                            <span className="font-semibold text-sky-800">MORE STACK EXCHANGE COMMUNITIES</span>
                            <span className="flex flex-rowtext-sxs ext-cyan-500 text-cyan-500">company blog</span>
                        </div>
                        <div className="relative mt-1 border-b border-zinc-200">
                            <input type="text" id="search-navbar" className="block w-11/12 h-8 m-3 p-2 text-sxs text-gray-900 border border-solid placeholder-gray-400" 
                            placeholder="Find a Stack Exchange community">{/*focus효과 적용 안됨 */}</input>
                        </div>
                    </li>
                    <li className="block flex flex-col cursor-pointer text-sxs">
                        <div className="flex flex-col p-2 bg-white hover:bg-blue-100 justify-between font-normal border-b border-zinc-200">
                            <div className=" flex flex-col justify-between text-sxs">
                                {/* 아이콘 들어갈 자리  */}
                                <span className="font-semibold text-sky-500 pb-1">3D Printing</span>
                                <span className="flex flex-rowtext-sxs pb-2 text-black">
                                    For 3D printing enthusiasts
                                </span>
                            </div>
                        </div>
                    </li>
                    <li className="block flex flex-col cursor-pointer text-sxs">
                        <div className="flex flex-col p-2 bg-white hover:bg-blue-100 justify-between font-normal border-b border-zinc-200">
                            <div className=" flex flex-col justify-between text-sxs">
                                {/* 아이콘 들어갈 자리  */}
                                <span className="font-semibold text-sky-500 pb-1">Academic</span>
                                <span className="flex flex-rowtext-sxs pb-2 text-black">
                                    For academics and those enrolled in higher education
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
    return null
}

export default DropDown;