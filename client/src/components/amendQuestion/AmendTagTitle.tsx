import React from 'react';

interface TitleTagProps {}

export const AmendTag = ({}: TitleTagProps) => {
    return(
        <div className="mb-2">
            <div className=" mt-4 rounded-sm mb-3 ">
                Tags
            </div>
            <input 
                type="text"
                className=" w-full rounded-md border border-slate-300 
                            px-3 py-2 text-xs " 
                placeholder="e.g.(pandas spring swift)">
            </input>
        </div>
    )
}


export const AmendTitle = ({}: TitleTagProps) => {
    return(
        <div className="mb-2">
            <div className=" mt-4 rounded-sm mb-3 ">
                Title
            </div>
            <input 
                type="text"
                className=" w-full rounded-md border border-slate-300 
                            px-3 py-2 text-xs"
                maxLength={20}>
            </input>
        </div>
    )
}
