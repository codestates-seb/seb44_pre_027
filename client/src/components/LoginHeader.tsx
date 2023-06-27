import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import DropDown from '../components/DropDown';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import HeadMenuIcon from '@/assets/icons/HeadMenuIcon';
import HeadQuestionIcon from '@/assets/icons/HeadQuestionIcon';
import HeadBoxIcon from '@/assets/icons/HeadBoxIcon';
import HeadCupIcon from '@/assets/icons/HeadCupIcon';

import { useSelector } from 'react-redux';
import { RootState } from '@/modules/store';
import { call } from '@/utils/ApiService';

type LoginProps = {
  changeNav: boolean;
  userID?: number;
};

const IconHover = cva(
  `
  cursor-pointer cursor-pointer relative
  `,
  {
    variants: {
      variant: {
        default: '',
        hover: 'hover:bg-slate-200',
      },
    },
  }
);


const LoginHeader = ({ changeNav }:LoginProps) => {  //isUser.isLogin을 통해   true || false 값을 받고 있습니다. 

  const [dropdownVariant , setDropdownVariant] = useState('box');
  const [isOpen01, setIsOpen01] = useState(false);
  const [isOpen02, setIsOpen02] = useState(false);
  const [isOpen03, setIsOpen03] = useState(false);
  const [isOpen04, setIsOpen04] = useState(false);

  const handleDropdown01 = (): void => {
          setIsOpen01(!isOpen01);
          setDropdownVariant('box');
  };
      
  const handleDropdown02 = (): void => {
    setIsOpen02(!isOpen02);
    setDropdownVariant('cup');
  };

  const handleDropdown03 = (): void => {
    setIsOpen03(!isOpen03);
    setDropdownVariant('question');
  };

  const handleDropdown04 = (): void => {
    setIsOpen04(!isOpen04);
    setDropdownVariant('menu');
  };

  const isLogin = useSelector((state:RootState) => (state.login));
  const localmemberId = isLogin.memberId;
  console.log(localmemberId);

  //임시 테스트
  useEffect(() => {
    const fetchUserData = async () => {
        return call(`/users/${localmemberId}`, 'GET', null)
        .then((res) => {
            console.log(`USER 정보 출력:  ${res}`);
            console.log(`USER 정보 2차 출력: ${res.nickname}`)
        })
        .catch((Err) => console.log('유저정보 GET 에러 발생: ' + Err));
    };

    fetchUserData();
  }, [])


  return (
    <>
      {changeNav ? (
        <ul className="flex flex-row space-x-2 items-center">
          <li className={cn(IconHover({ variant: 'hover' }))}>
            <Link to={`/users/${localmemberId}`}

            className="relative p-2 text-gray-500 bg-transparent"
            >
              <img
                src="https://www.gravatar.com/avatar/9bcf7a89f50be51792a0ce9e6af9e917?s=48&d=identicon&r=PG"
                alt="user image"
                className="h-5 w-5 mb-1"
                
              />
            </Link>
          </li>
          <li className={cn(IconHover({ variant: 'hover' }))}>
            <button onClick={handleDropdown01}>
              <a href="#" className="block p-2 text-gray-500 bg-transparent">
                <HeadBoxIcon />
              </a>
            </button>
            {isOpen01 ? <DropDown variant="box" /> : null}
          </li>
          <li className={cn(IconHover({ variant: 'hover' }))}>
            <button onClick={handleDropdown02}>
              <a href="#" className="block p-2 text-gray-500 bg-transparent">
                <HeadCupIcon />
              </a>
            </button>
            {isOpen02 ? <DropDown variant="cup" /> : null}
          </li>
          <li className={cn(IconHover({ variant: 'hover' }))}>
            <button onClick={handleDropdown03}>
              <a href="#" className="block p-2 text-gray-500 bg-transparent">
                <HeadQuestionIcon />
              </a>
            </button>
            {isOpen03 ? <DropDown variant="question" /> : null}
          </li>
          <li className={cn(IconHover({ variant: 'hover' }))}>
            <button onClick={handleDropdown04}>
              <a href="#" className="block p-2 text-gray-500 bg-transparent">
                <HeadMenuIcon />
              </a>
            </button>
            {isOpen04 ? <DropDown variant="menu" /> : null}
          </li>
        </ul>
      ) : (
        <div className="my-4 text-sm mb-3">
          <Link to="/users/login">
            <button className="text-sky-500 py-2 px-3 mx-2 border-zinc-200 w-[80px] rounded bg-sky-50 hover:bg-blue-200 font-normal">
              Log in
            </button>
          </Link>
          <Link to="/users/signup">
            <button className="border border-zinc-200 bg-blue-500 py-2 px-3 w-[80px] hover:bg-blue-800 rounded text-white font-normal">
              Sign up
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default LoginHeader;