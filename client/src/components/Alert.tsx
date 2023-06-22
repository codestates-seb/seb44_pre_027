import React from 'react';

export const ReputationAlert = () => {
    return(
        <div className=" fixed top-0 insert-x-0 border border-zinc-200 w-fit h-auto px-3 
        py-3 bg-blue-100 shadow-md text-sm font-light
        flex flex-row items-center rounded z-10
        transition duration-800 ease-in-out transform translate-y-12">
            Thanks for using Stack OverFlow! Sorry but you need at
             least 10,000 <b className="text-sky-600"> &nbsp;reputations&nbsp;</b> to 
            control this. :( 
            <button className="font-normal pl-5 pr-3 text-lg">x</button>
        </div>
    )
}

export const DeletAlert = () => {
      
    return(
        <div className=" fixed top-0 left-2/4 border border-zinc-200 w-fit h-auto px-3 
        py-3 bg-blue-100 shadow-md text-sm font-light
        flex flex-row items-center rounded z-10
        transition duration-800 ease-in-out transform translate-y-12">
            회원 정보가 삭제 되었습니다. : ( 
        </div>
    )
}


