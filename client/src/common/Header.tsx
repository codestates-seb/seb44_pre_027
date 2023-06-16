import React, {useState} from 'react';
import DropDown from '../components/DropDown';
import {cva} from 'class-variance-authority';
import {cn} from '@/utils/cn';
import BigLogoIcon from '@/assets/icons/BigLogoIcon';
import SearchIcon from '@/assets/icons/SearchIcon';
import HeadMenuIcon from '@/assets/icons/HeadMenuIcon';
import HeadQuestionIcon from '@/assets/icons/HeadQuestionIcon';
import HeadBoxIcon from '@/assets/icons/HeadBoxIcon';
import HeadCupIcon from '@/assets/icons/HeadCupIcon';

interface HeaderUI {};
/*dropwdown이름 겹침 -> ProductIcon 수정완료 */
const ProductIcon = cva(
    `
    block flex flex-col px-4 py-2 cursor-pointer 
    `,{
        variants:{
            variant:{
                default:'',
                hover: 'hover:bg-slate-200 '
            }
        }
    }
);

const IconHover = cva(
    `
    cursor-pointer cursor-pointer relative
    `,{
        variants:{
            variant:{
                default:'',
                hover:'hover:bg-slate-200'
            }
        }
    }
);


const Header = ({}:HeaderUI) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen01, setIsOpen01] = useState(false);
    const [isOpen02, setIsOpen02] = useState(false);
    const [isOpen03, setIsOpen03] = useState(false);
    const [isOpen04, setIsOpen04] = useState(false);
    const [dropdownVariant , setDropdownVariant] = useState('box');

    const handleDropdown = ():void => {
        setIsOpen(!isOpen)
    }

    const handleDropdown01 = (): void => {
        setIsOpen01(!isOpen01)
        setDropdownVariant('box')
    }

    const handleDropdown02 = (): void => {
        setIsOpen02(!isOpen02)
        setDropdownVariant('cup')
    }

    const handleDropdown03 = (): void => {
        setIsOpen03(!isOpen03)
        setDropdownVariant('question')
    }

    const handleDropdown04 = (): void => {
        setIsOpen04(!isOpen04)
        setDropdownVariant('menu')
    }

    return(
       <nav className="bg-white border-gray-200 border-b border-zinc-200">
            <div className="max-w-screen-xl flex justify-center items-center h-12 space-x-6">
                <div className="hover:bg-slate-200">
                    <a href="https://stackoverflow.com/" className="flex items-center"> 
                        <BigLogoIcon/>
                    </a>
                </div>
                <ul className="flex space-x-5 font-medium p-3">
                    <li className="w-full md:w-auto hidden md:block hover:bg-slate-200 rounded-full">
                        <a href="#" className="block py-2 px-2 lr-4 text-gray-500 bg-transparent font-normal text-sm ">About</a>
                    </li>
                    <li className="w-full md:w-auto relative">
                        <button className="block py-2 px-2 lr-4 text-gray-500 bg-transparent 
                            font-normal text-sm hover:bg-slate-200 rounded-full" onClick={handleDropdown}>Products
                        </button>
                        { isOpen ? 
                        (
                        <div className="z-10 absolute top-full left-1/2 transform -translate-x-1/2 divide-y divide-gray-100 rounded-lg ">
                            <ul className="pt-2 w-52 drop-shadow-lg border border-inherit rounded-lg bg-white divide-y divide-gray-100">
                                <li>
                                    <a className={cn(ProductIcon({ variant: 'hover'})) + 'px-1 py-2'}>
                                        <span className="text-xs font-normal">Stack Overflow</span>
                                        <span className="text-xs text-slate-500 font-light whitespace-normal">Public questions & answers</span>
                                    </a>
                                </li>
                                <li>
                                    <a className={cn(ProductIcon({ variant: 'hover'})) + 'px-1 py-2'}>
                                        <span className="text-xs font-normal">Stack Overflow for Teams</span>
                                        <span className="text-xs text-slate-500 font-light whitespace-normal">
                                            Where developers & technologists share private knowledge with coworkers
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className={cn(ProductIcon({ variant: 'hover'})) + 'px-1 py-2'}>
                                        <span className="text-xs font-normal">Talent</span>
                                        <span className="text-xs text-slate-500 font-light whitespace-normal">Build your employer brand</span>
                                    </a>
                                </li>
                                <li>
                                    <a className={cn(ProductIcon({ variant: 'hover'})) + 'px-1 py-2'}>
                                        <span className="text-xs font-normal">Advertising</span>
                                        <span className="text-xs text-slate-500 font-light whitespace-normal">Reach developers & technologists worldwide</span>
                                    </a>
                                </li>
                                <li>
                                    <a className={cn(ProductIcon({ variant: 'default'})) + 'px-1 py-2 bg-gray-200'}>
                                        <span className="text-xs text-slate-400 font-normal">About the compnay</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        )
                        : null}
                    </li>
                    <li className="w-full md:w-auto hidden md:block hover:bg-slate-200 rounded-full">
                        <a href="#" className="block py-2 px-2 lr-4 text-gray-500 bg-transparent 
                            font-normal text-sm whitespace-nowrap">For Teams
                        </a>
                    </li>
                </ul>
                <div className="items-center justify-between w-96 p-3" id="navbar-search">
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <SearchIcon className="fill-gray-400"/>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full h-8 p-2 pl-10 text-sm text-gray-900 
                        border border-gray-300 focus:border-sky-200 placeholder-gray-400" 
                        placeholder="Search...">{/*focus효과 적용 안됨 */}</input>
                    </div>
                </div>
                <ul className="flex flex-row space-x-2">
                    <li className={cn(IconHover({ variant: 'hover'}))}>
                        <a href="#" className="block p-2 text-gray-500 bg-transparent">
                            <img src="https://www.gravatar.com/avatar/9bcf7a89f50be51792a0ce9e6af9e917?s=48&d=identicon&r=PG" 
                            alt="user image" 
                            className="w-5 h-5" />
                        </a>
                    </li>
                    <li className={cn(IconHover({ variant: 'hover'}))}>
                        <button onClick={handleDropdown01}>
                            <a href="#"  className="block p-2 text-gray-500 bg-transparent">
                                <HeadBoxIcon/>
                            </a>
                        </button>
                        {
                            isOpen01 ?<DropDown variant="box"></DropDown> : null
                        }
                    </li>
                    <li className={cn(IconHover({ variant: 'hover'}))}>
                        <button onClick={handleDropdown02}>
                            <a href="#"  className="block p-2 text-gray-500 bg-transparent">
                                <HeadCupIcon/>
                            </a>
                        </button>
                        {
                            isOpen02 ? <DropDown variant="cup"></DropDown> : null
                        }
                    </li>
                    <li className={cn(IconHover({ variant: 'hover'}))}>
                        <button onClick={handleDropdown03}>
                            <a href="#"  className="block p-2 text-gray-500 bg-transparent">
                                <HeadQuestionIcon/>
                            </a>
                        </button>
                        {
                            isOpen03 ? <DropDown variant="question"></DropDown> : null
                        }
                    </li>
                    <li className={cn(IconHover({ variant: 'hover'}))}>
                        <button onClick={handleDropdown04}>
                            <a href="#"  className="block p-2 text-gray-500 bg-transparent">
                                <HeadMenuIcon/>
                            </a>
                        </button>
                        {
                            isOpen04 ? <DropDown variant="menu"></DropDown> : null
                        }
                    </li>
                </ul>
            </div>
       </nav>
    )
}

export default Header;