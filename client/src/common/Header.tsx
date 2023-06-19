import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {cva} from 'class-variance-authority';
import {cn} from '@/utils/cn';
import LoginHeader from '../components/LoginHeader';
import BigLogoIcon from '@/assets/icons/BigLogoIcon';
import SearchIcon from '@/assets/icons/SearchIcon';

interface HeaderProps {
    changeNav:boolean;
};
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


const Header = ({changeNav}:HeaderProps) => {
    const [dropdownVariant , setDropdownVariant] = useState('box');

    const [isUser, setIsUser] = useState(true);
    //changeNav 임시 props - true:로그인 상태 false:비로그인 상태
    const [isOpen, setIsOpen] = useState(false);


    const handleDropdown = ():void => {
        setIsOpen(!isOpen)
    } 

    return(
       <nav className="sticky top-0 z-10 w-screen bg-white border-gray-200 border-b border-zinc-200 ">
            <div className=" flex justify-center items-center h-12 mx-auto space-x-6">
                <div className="hover:bg-slate-200">
                    <Link to="/">
                        <BigLogoIcon  className="flex items-center"/>
                    </Link>
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
                <div>
                    <LoginHeader changeNav={isUser}/>
                </div>
            </div>
       </nav>
    )
}

export default Header;