import React from 'react';

export const ReputationAlert = () => {
    return(
        <div className=" absolute -top-16 insert-x-0 border border-zinc-200 w-fit h-auto px-3 
        py-3 bg-blue-100 shadow-md text-sm font-light
        flex flex-row items-center rounded
        transition duration-800 ease-in-out transform translate-y-20">
            Thanks for using Stack OverFlow! Sorry but you need at
             least 10,000 <b className="text-sky-600"> &nbsp;reputations&nbsp;</b> to 
            control this. :( 
            <button className="font-normal pl-5 pr-3 text-lg">x</button>
        </div>
    )
}
