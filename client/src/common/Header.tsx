import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import LoginHeader from '../components/LoginHeader';
import BigLogoIcon from '@/assets/icons/BigLogoIcon';
import SearchIcon from '@/assets/icons/SearchIcon';
import { useSelector } from 'react-redux';
import { RootState } from '@/modules/store';

interface HeaderProps {
  changeNav: boolean;
}
/*dropwdown이름 겹침 -> ProductIcon 수정완료 */
const ProductIcon = cva(
  `
    block flex flex-col px-4 py-2 cursor-pointer
    `,
  {
    variants: {
      variant: {
        default: '',
        hover: 'hover:bg-slate-200 ',
      },
    },
  }
);

const Header = ({ changeNav }: HeaderProps) => {
  const isUser = useSelector((state: RootState) => state.login);
  const [dropdownVariant, setDropdownVariant] = useState('box');

  //changeNav 임시 props - true:로그인 상태 false:비로그인 상태
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-10 w-screen border-b border-gray-200 border-zinc-200 bg-white ">
      <div className=" mx-auto flex h-12 items-center justify-center space-x-6">
        <div className="hover:bg-slate-200">
          <Link to="/">
            <BigLogoIcon className="flex items-center" />
          </Link>
        </div>
        <ul className="flex space-x-5 p-3 font-medium">
          <li className="hidden w-full rounded-full hover:bg-slate-200 md:block md:w-auto">
            <a
              href="#"
              className="lr-4 block bg-transparent px-2 py-2 text-sm font-normal text-gray-500 "
            >
              About
            </a>
          </li>
          <li className="relative w-full md:w-auto">
            <button
              className="lr-4 block rounded-full bg-transparent px-2 py-2
                            text-sm font-normal text-gray-500 hover:bg-slate-200"
              onClick={handleDropdown}
            >
              Products
            </button>
            {isOpen ? (
              <div className="absolute left-1/2 top-full z-10 -translate-x-1/2 transform divide-y divide-gray-100 rounded-lg ">
                <ul className="w-52 divide-y divide-gray-100 rounded-lg border border-inherit bg-white pt-2 drop-shadow-lg">
                  <li>
                    <a className={cn(ProductIcon({ variant: 'hover' })) + 'px-1 py-2'}>
                      <span className="text-xs font-normal">Stack Overflow</span>
                      <span className="whitespace-normal text-xs font-light text-slate-500">
                        Public questions & answers
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className={cn(ProductIcon({ variant: 'hover' })) + 'px-1 py-2'}>
                      <span className="text-xs font-normal">Stack Overflow for Teams</span>
                      <span className="whitespace-normal text-xs font-light text-slate-500">
                        Where developers & technologists share private knowledge with coworkers
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className={cn(ProductIcon({ variant: 'hover' })) + 'px-1 py-2'}>
                      <span className="text-xs font-normal">Talent</span>
                      <span className="whitespace-normal text-xs font-light text-slate-500">
                        Build your employer brand
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className={cn(ProductIcon({ variant: 'hover' })) + 'px-1 py-2'}>
                      <span className="text-xs font-normal">Advertising</span>
                      <span className="whitespace-normal text-xs font-light text-slate-500">
                        Reach developers & technologists worldwide
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className={cn(ProductIcon({ variant: 'default' })) + 'bg-gray-200 px-1 py-2'}
                    >
                      <span className="text-xs font-normal text-slate-400">About the compnay</span>
                    </a>
                  </li>
                </ul>
              </div>
            ) : null}
          </li>
          <li className="hidden w-full rounded-full hover:bg-slate-200 md:block md:w-auto">
            <a
              href="#"
              className="lr-4 block whitespace-nowrap bg-transparent px-2 py-2
                            text-sm font-normal text-gray-500"
            >
              For Teams
            </a>
          </li>
        </ul>
        <div className="w-96 items-center justify-between p-3" id="navbar-search">
          <div className="relative mt-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="fill-gray-400" />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block h-8 w-full border border-gray-300 p-2 pl-10
                        text-sm text-gray-900 placeholder-gray-400 focus:border-sky-200"
              placeholder="Search..."
            >
              {/*focus효과 적용 안됨 */}
            </input>
          </div>
        </div>
        <div>
          <LoginHeader changeNav={isUser.isLogin} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
