import React from 'react';
import AmendWithTag from './AmendWithTag';

interface AmendQue {};


const AmendQuestion = ({}: AmendQue) => {


    return(
        <main className="m-5 flex flex-row">
            <div className="flex flex-col">
                <div className="flex flex-col px-6 pb-6 pt-4 max-w-[661px] bg-amber-100 bg-opacity-50 border border-amber-200 text-sm font-light">
                    <span className="mb-3">Your edit will be placed in a queue until it is peer reviewed.</span>
                    <span>We welcome edits that make the post easier to understand and more valuable for readers. Because community members review edits, please try to make the post substantially better than how you found it, for example, by fixing grammar or adding additional resources and hyperlinks.</span>
                </div>
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
                {/* main 답변 수정 칸 */}
                <div className="mb-2">
                    <div className=" mt-4 rounded-sm mb-3 ">
                        Body
                    </div>
                    <textarea 
                        className=" w-full rounded-md border border-slate-300
                                    px-3 py-2 text-xs min-h-[243px] overflow-visible"
                        maxLength={100}>
                    </textarea>
                </div>
                {/* {  질문 수정 | 답변 수정 상태에 따른 삼항연산자 ? <AmendWithTag/> : null} */}
                <div className="my-4 text-sm mb-3 ">
                    <button 
                        className="border border-zinc-200 bg-blue-500 py-2 px-3 
                        hover:bg-blue-800 rounded text-white font-normal">
                        Save edits
                    </button>
                    <button 
                        className="bg-white text-sky-500 py-2 px-3 mx-2 
                            hover:bg-sky-50 hover:rounded font-normal">
                        Cancel
                    </button>
                </div>
            </div>
            <div className="flex flex-col min-w-[352px] md:w-auto md:block  max-h-[223px] ml-5 bg-amber-100 bg-opacity-50 border border-orange-100 text-sm">
                <div className="bg-amber-100 border-b border-orange-100 py-2 pl-5 font-normal">How to Edit</div>
                <ul className="py-2 pl-8 list-disc text-xs">
                    <li className="pl-2 py-2">Correct minor typos or mistakes</li>
                    <li className="pl-2 py-2">Clarify meaning without changing it</li>
                    <li className="pl-2 py-2">Add related resources or links</li>
                    <li className="pl-2 py-2">Always respect the authors'intent</li>
                    <li className="pl-2 py-2">Don't use edits to reply to the author</li>
                </ul>
            </div>
        </main>
    )
}

export default AmendQuestion;