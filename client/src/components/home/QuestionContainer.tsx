import React,{useState, useEffect} from 'react';
import Button from '../Button';
import PagenationBtn from './PagenationBtn';
import QuestionItem from './QuestionItem';
import {Fetcher, Link} from 'react-router-dom';
// import { useQuery, QueryFunctionContext  } from '@tanstack/react-query';
import { HomeInquiryType } from '@/mocks/homeinquiry';

const QuestionContainer = () => {
  const [data, setData] = useState<HomeInquiryType[]>([]);

  const [curpage, setCurPage] = useState(2); // 한 화면에 표시될 데이터 갯수: 버튼 5개 확인 위한 임시 2
  const [basic, setBasic] = useState(1); //page
  const offset = (basic-1)*curpage;
  const numPages = Math.ceil(data.length/curpage);

  const handlePage = (pageNum:number) => {
    setBasic(pageNum);
  };

  useEffect(() => {
    const fetchInquiryData = async () => {
      try{
        const response = await fetch(`/questions?page=${curpage}`);
        if(response.ok){
          const data = await response.json();
          const filteredData = data.data;
          setData(filteredData[0].data);
        } else {
          console.log('error');
        }
    
      } catch (error){
        console.log(error);
      }
    };

    fetchInquiryData();
  }, [])
  // console.log(data);


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
            <button className=" border-r px-2 py-2">Newest</button>
            <button className=" border-r px-2 py-2">Views</button>
            <button className=" border-r px-2 py-2">Votes</button>
          </div>
        </div>
      </div>

      {
      data.slice(offset, offset + curpage).map((e:any) => {
        return (
          <Link to="/questions" key={e.id}>
            <QuestionItem data={e}/>
          </Link>
        )
      })
      }

      <div className=" mx-24 mb-24 mt-12 flex">
        {Array.from({length:5}).map((e,i) => {
          if(i===0){
            return(
              <PagenationBtn
                total={data.length}
                curpage={curpage}
                basic={basic}
                setBasic={setBasic}
                variant={basic === i + 1 ? 'active' : 'default'}
                key={i} // key 속성 추가
                onClick={()=> handlePage(i + 1)}
              >{i+1}</PagenationBtn>
            );
          }

          return (
            <PagenationBtn
              total={data.length}
              curpage={curpage}
              basic={basic}
              setBasic={setBasic}
              variant={basic === i + 1 ? 'active' : 'default'}
              key={i} // key 속성 추가
              onClick={()=> handlePage(i + 1)}
            >{i+1}</PagenationBtn>
          );
        })};
      </div>
    </main>
  );
};

export default QuestionContainer;

  //react-query : 보류
  // const page = 1; //나중에 함수 생성 
  // const {data, error, isLoading} = useQuery<HomeInquiryType[] | any>(['inquiryData'], async () => 
  // {
  //   const resData = await fetch(`/questions?page=${page}`);
  //   if(resData.ok){
  //     const realdata = await resData.json();
  //     return realdata;
  //   }
  // }, {staleTime:Infinity},);
  // console.log(data);
  // if(isLoading){return <div> Loading ... </div>}
  // if(error instanceof Error ) {return <div>ERROR ERROR SORRY : {error.message}</div>}

    {/* {isLoading ? (
  <div className="relative top-0 p-10">Loading...</div>
) : error instanceof Error ? ( // error:unknown
  <div className="relative top-0 p-10">Error: {error.message}</div>
) : (
  <div>{Array.from({length:5}).map((e, i) => {
    return <QuestionItem data={data} key={i}/>
  })}</div>
)} */}