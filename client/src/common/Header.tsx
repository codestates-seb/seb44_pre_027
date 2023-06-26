import React, { useState, useEffect, useContext, createContext } from 'react';
import { Link } from 'react-router-dom';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import LoginHeader from '../components/LoginHeader';
import BigLogoIcon from '@/assets/icons/BigLogoIcon';
import SearchIcon from '@/assets/icons/SearchIcon';

import { useSelector } from 'react-redux';
import { RootState } from '@/modules/store';
import { call } from '@/utils/ApiService';

import { useQuery } from '@tanstack/react-query';

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

interface headerSearchType {
  questionId:number;
  nickname:string;
  title:string;
  content:string;
  view:number;
  voteScore:number;
}

interface WholeUserType{
  memberId:number;
  eamil?:string;
  nickname:string;
  location:string;

}

const Header = ({changeNav}) => {
  const isUser = useSelector((state: RootState) => state.login);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState<headerSearchType[]>([])
  const [userData, setUserData] = useState<WholeUserType>();
  const page = 1;

  const {data, isLoading, error} = useQuery(['searchData', input], ( ) => {
    if(!input){
      return console.log('입력값 없습니다. ',error);
    }

    //데이터 가져오는 비동기 함수 
    return call(`/questions/search?page=${page}&keyword=${input}`, 'GET', null)
    .then((res) => {
      setFilteredData(res.data);
      return filteredData;
    })
  })

  console.log(filteredData);
  console.log( data);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleInput = (value:string)=> {
    setInput(value);
  };


  // //로그인 유저 정보 memberId테스트위한 GET요청 : 전체 유저 목록 조회 
  useEffect(() => {
    const userGetData = async () => {
      return call(`/users`, 'GET', null)
      .then((res) => {
        const data = res[0]
        setUserData(data.data);
      });
    };

    userGetData();
  }, [])

  console.log(userData)

  return (
    <nav className="sticky top-0 z-10 w-screen border-b border-gray-200 bg-white ">
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
              <SearchIcon/>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="relative h-8 w-full border border-gray-300 p-2 pl-10
                        text-sm text-gray-900 placeholder-gray-400 "
              placeholder="Search..."
              value={input}
              onChange={(e) => handleInput(e.target.value)}
            >
            </input>
            { input === '' ? 
            null 
            : (
              <ul className="bg-white p-1 h-content border border-zinc-200 rounded 
              absolute w-full">
                {filteredData.map((item:headerSearchType) => {
                  return <Link to={`/questions/${item.questionId}`}><li key={item.questionId}
                             className="text-xs mb-1 py-2 px-3  hover:bg-sky-100"
                          >[name] {item.nickname} : [title] {item.title}</li></Link>
                })}
              </ul>
            )}

          </div>
        </div>
        <div>
          <LoginHeader changeNav={isUser.isLogin}  />
          {/* userID={userID} */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
