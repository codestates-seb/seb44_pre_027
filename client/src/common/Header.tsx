import React, {useState} from 'react';
import DropDown from '../components/DropDown';
import {cva} from 'class-variance-authority';
import {cn} from '@/utils/cn';
import BigLogoIcon from '../assets/icons/BigLogoIcon';
import SearchIcon from '../assets/icons/SearchIcon';

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
                        <button className="block py-2 px-2 lr-4 text-gray-500 bg-transparent font-normal text-sm hover:bg-slate-200 rounded-full" onClick={handleDropdown}>Products</button>
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
                                        <span className="text-xs text-slate-500 font-light whitespace-normal">Where developers & technologists share private knowledge with coworkers</span>
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
                        <a href="#" className="block py-2 px-2 lr-4 text-gray-500 bg-transparent font-normal text-sm whitespace-nowrap">For Teams</a>
                    </li>
                </ul>
                <div className="items-center justify-between w-96 p-3" id="navbar-search">
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <SearchIcon className="fill-gray-400"/>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full h-8 p-2 pl-10 text-sm text-gray-900 border border-gray-300 focus:border-sky-200 placeholder-gray-400" placeholder="Search...">{/*focus효과 적용 안됨 */}</input>
                    </div>
                </div>
                <ul className="flex flex-row space-x-2">
                    <li className={cn(IconHover({ variant: 'hover'}))}>
                        <a href="#" className="block p-2 text-gray-500 bg-transparent">
                        <img src="https://www.gravatar.com/avatar/9bcf7a89f50be51792a0ce9e6af9e917?s=48&d=identicon&r=PG" alt="user image" className="w-5 h-5" />
                        </a>
                    </li>
                    <li className={cn(IconHover({ variant: 'hover'}))}>
                        <button onClick={handleDropdown01}>
                            <a href="#"  className="block p-2 text-gray-500 bg-transparent">
                                <svg className="x-5 h-5"viewBox="0 0 20 18">
                                    <path d="M4.63 1h10.56a2 2 0 0 1 1.94 1.35L20 10.79V15a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4.21l2.78-8.44c.25-.8 1-1.36 1.85-1.35Zm8.28 12 2-2h2.95l-2.44-7.32a1 1 0 0 0-.95-.68H5.35a1 1 0 0 0-.95.68L1.96 11h2.95l2 2h6Z"></path>
                                </svg>
                            </a>
                        </button>
                        {
                            isOpen01 ?<DropDown variant="box"></DropDown> : null
                        }
                    </li>
                    <li className={cn(IconHover({ variant: 'hover'}))}>
                        <button onClick={handleDropdown02}>
                            <a href="#"  className="block p-2 text-gray-500 bg-transparent">
                                <svg className="x-5 h-5" viewBox="0 0 18 18">
                                    <path d="M15 2V1H3v1H0v4c0 1.6 1.4 3 3 3v1c.4 1.5 3 2.6 5 3v2H5s-1 1.5-1 2h10c0-.4-1-2-1-2h-3v-2c2-.4 4.6-1.5 5-3V9c1.6-.2 3-1.4 3-3V2h-3ZM3 7c-.5 0-1-.5-1-1V4h1v3Zm8.4 2.5L9 8 6.6 9.4l1-2.7L5 5h3l1-2.7L10 5h2.8l-2.3 1.8 1 2.7h-.1ZM16 6c0 .5-.5 1-1 1V4h1v2Z"></path>
                                </svg>
                            </a>
                        </button>
                        {
                            isOpen02 ? <DropDown variant="cup"></DropDown> : null
                        }
                    </li>
                    <li className={cn(IconHover({ variant: 'hover'}))}>
                        <button onClick={handleDropdown03}>
                            <a href="#"  className="block p-2 text-gray-500 bg-transparent">
                                <svg className="x-4 h-5" viewBox="0 0 18 18">
                                <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8Zm.81 12.13c-.02.71-.55 1.15-1.24 1.13-.66-.02-1.17-.49-1.15-1.2.02-.72.56-1.18 1.22-1.16.7.03 1.2.51 1.17 1.23ZM11.77 8c-.59.66-1.78 1.09-2.05 1.97a4 4 0 0 0-.09.75c0 .05-.03.16-.18.16H7.88c-.16 0-.18-.1-.18-.15.06-1.35.66-2.2 1.83-2.88.39-.29.7-.75.7-1.24.01-1.24-1.64-1.82-2.35-.72-.21.33-.18.73-.18 1.1H5.75c0-1.97 1.03-3.26 3.03-3.26 1.75 0 3.47.87 3.47 2.83 0 .57-.2 1.05-.48 1.44Z"></path>
                                </svg>
                            </a>
                        </button>
                        {
                            isOpen03 ? <DropDown variant="question"></DropDown> : null
                        }
                    </li>
                    <li className={cn(IconHover({ variant: 'hover'}))}>
                        <button onClick={handleDropdown04}>
                            <a href="#"  className="block p-2 text-gray-500 bg-transparent">
                                <svg className="x-4 h-5" viewBox="0 0 18 18">
                                <path d="M15 1H3a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 0 0 2-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
                                </svg>
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