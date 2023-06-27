import React,{useState, useEffect} from 'react';
import Button from '../Button';
import PagenationBtn from './PagenationBtn';
import QuestionItem from './QuestionItem';
import {Link} from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { HomeInquiryType } from '@/mocks/homeinquiry';
import { call } from '@/utils/ApiService';


const QuestionContainer = () => {
  const [data, setData] = useState<HomeInquiryType[]>([]);
  let { page, sort } = useParams();
  
  const [isSort, setIsSort] = useState('new'); //필터 적용 시작 new: 수정 필요
  const curpage = 5;// 한 화면에 표시될 데이터 갯수: 버튼 5개 확인 위한 임시 2
  const [basic, setBasic] = useState(1); //page
  const offset = (basic-1)*curpage; // 현재 페이지에 보여져야 할 데이터의 시작 위치 
  const numPages = Math.ceil(data.length/curpage); //현재 출력 버튼 갯수 

  // btn 클릭 시 page변동 및 get요청 
  const lastPage = (basic-1)*curpage + curpage;

  const handlePage = (pageNum:number) => {
    setBasic(pageNum);
  }; 

    const fetchInquiryData = async (
      page:number = basic,
      sort:string = isSort,
    ) => {
      return call(`/questions?page=${page}&sort=${sort}`, 'GET', null)
      .then((res) => {
        setData(res.data);      
      })
    };

  React.useEffect(() => {
    fetchInquiryData( );
  }, [basic, isSort]);

  const handleSort = (value:string  ) => {
    setIsSort(value);
  }

  //페이지네이션 다음 버튼 추가 
  const handleNextPage = () => {
    setBasic((prev) => prev + 1);
  }

  return (
    <main className=" flex flex-col">
      <div className=" px-4 py-4">
        <div className=" mb-6 flex justify-between">
          <h2 className=" text-2xl">{'All Questions'}</h2>
          <Link to="/questions/ask"><Button>Ask Question</Button></Link> 
        </div>

        <div className=" flex items-center justify-between gap-3">
          <p>{data.length} questions with bounties</p>
          <div className=" flex rounded-md border border-slate-300 text-sm text-slate-600">
            <button className=" border-r px-2 py-2" onClick={() => handleSort('new')} >Newest</button>
            <button className=" border-r px-2 py-2" onClick={() => handleSort('views')} >Views</button>
            <button className=" border-r px-2 py-2" onClick={() => handleSort('votes')} >Votes</button>
          </div>
        </div>
      </div>

      {
      data.slice(0, curpage).map((e:any) => {
        return (
          <Link to={`/questions/${e.questionId}`} key={e.questionId}>
            <QuestionItem data={e} key={e.questionId}/>
          </Link>
        )
      })
      }

      <div className=" mx-24 mb-24 mt-12 flex">
      {basic > 5 && (
        <PagenationBtn onClick={() => handlePage(1)}>
          1
        </PagenationBtn>
      )}
      {basic > 5 && (
        <PagenationBtn onClick={() => handlePage(basic - 1)}>
          &lt;
        </PagenationBtn>
      )}
      {Array.from({ length: 5 }).map((_, i) => {
        const pageNumber = basic - (5 - i);
        if (pageNumber > 0) {
          return (
            <PagenationBtn
              total={data.length}
              basic={basic}
              setBasic={setBasic}
              variant={basic === pageNumber ? 'active' : 'default'}
              key={i}
              onClick={() => handlePage(pageNumber)}
            >
              {pageNumber}
            </PagenationBtn>
          );
        }
        return null;
      })}
      {basic <= 5 && (
        <PagenationBtn onClick={handleNextPage}>
          &gt;
        </PagenationBtn>
      )}
        {/* {Array.from({length:5}).map((e,i) => {
          const pageNumber = i + 1;
          if(pageNumber <= 5){
            return(
              <PagenationBtn
                total={data.length}
                basic={basic}
                setBasic={setBasic}
                variant={basic === pageNumber ? 'active' : 'default'}
                key={i} // key 속성 추가
                onClick={()=> handlePage(pageNumber)}
              >{pageNumber}</PagenationBtn>
            );
          }

          return (
            <PagenationBtn
              total={data.length}
              basic={basic}
              setBasic={setBasic}
              variant={basic === pageNumber ? 'active' : 'default'}
              key={i} // key 속성 추가
              onClick={()=> handlePage(pageNumber)}
            >{pageNumber}</PagenationBtn>
          )
        })}; */}
      </div>
    </main>
  );
};

export default QuestionContainer;