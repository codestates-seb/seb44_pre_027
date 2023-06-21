import { css, styled } from 'styled-components';
import { RSideBarWidgetData, HotNetworkQuestions, Tags } from '../common/msgs.js';

import { ColumnItemWrapper, RowItemWrapper } from '../common/style/Containers.styled.js';
import { Favicon } from '../common/style/Images.styled.js';
import Link from '../common/atoms/Link.js';
import Widget from '../common/basic/Widget';
import BasicWidgetItem from '../common/basic/BasicWidgetItem';
import LightWidgetItem from '../common/basic/LightWidgetItem';
import SideBarAd from '../common/basic/SideBarAd.js';

import { BasicWidgetData, LightWidgetData, WidgetItem } from '../types/WidgetPropsType'

const Title = styled.h4`
    font-size: 19px;
    color: #3b4045;
    cursor: pointer;
`
const Tag = styled.a`
    width: fit-content;
    border-radius: 3px;
    color: #39739d;
    font-size: 12px;
    background-color: #E1ECF4;
    padding: 4.8px 6px;
    cursor: pointer;

    &:hover{
        color: #0a95ff;
        background-color: #d7e2e9;
    }
`

const RightSideBar = ():JSX.Element => {

    return(
        <ColumnItemWrapper size={298} gap={16}>
            <div>
                {RSideBarWidgetData.Basic.map((data:BasicWidgetData):JSX.Element => {
                    return (
                        <Widget type="Basic" title={data.title} key={data.id} id={data.id} isStuck={true}>
                            {data.items.map((item:WidgetItem)=>{
                                return <BasicWidgetItem item={item} key={item.id}/>})
                            }
                        </Widget>
                    )
                })
                }
            </div>

                {RSideBarWidgetData.Light.map((item:LightWidgetData):JSX.Element => {
                    return (
                        <Widget type="Light" title={item.title} key={item.id} id={item.id}>
                            <LightWidgetItem type={item.type} contents={item.items} key={item.id}/>
                        </Widget>
                    )
                })
                }

            <SideBarAd url={'https://pagead2.googlesyndication.com/pcs/click?xai=AKAOjstUZlwdAWpcteFu8YWzaSQdJYhCCH4syNQsrkmVMyzF6-VHJ9ryr6cj8aBfVP99ThJjs931yVhRqmSqysSDOFnTWAZnfDfaXxsGSn50YDTSzB5fB9nzlGPa_07DLx--QDhFGECvne8BzWQ9Tc9HdDB7hOrfrghLEZ8Gpuw6BOzkr06-GA42zShPhl9RahQmrhljwPAId0yIaBbIhyFWPtJ60SZAKnNsEKm5YKSpJEVNYqpbqlal-vWTOnRy04_HrDunKWoQVOB2K1NutoMvw382lZFRMY9yAkuhhszD9ql2Kubb-uGUXLFOSKPeVARn-a_VkFfSFOerVHRM9E7Uelu_NB4T_MOyHDs&sig=Cg0ArKJSzGmw6ILkTK87&fbs_aeid=[gw_fbsaeid]&adurl=https://survey.stackoverflow.co/2023/%3Futm_source%3Dhouse-ads%26utm_medium%3Ddisplay%26utm_campaign%3Ddev-survey-results-2023%26utm_content%3Dsurvey-results&nm=30&nx=150&ny=-70&mb=2'} src={'https://tpc.googlesyndication.com/simgad/2894417314404102158'}/>


            <Title>Related Tags</Title>
            <ColumnItemWrapper size='100%' gap={10}>
                {Tags.map((tag:string, idx:number)=>{
                    return (
                        <RowItemWrapper gap={5} key={idx}>
                            <Tag>{tag}</Tag>
                            <span className='text-gray-400 text-13 leading-7'>×</span>
                            <span className='text-gray-400 text-xs leading-7'>{Math.floor(Math.random()*3241)}</span>
                        </RowItemWrapper>
                    )
                })
                }
                <Link text='more related tags'/>
            </ColumnItemWrapper>

            <Title>Hot Network Questions</Title>
            {HotNetworkQuestions.map((item:{favicon:number; content:string}, idx:number)=>{
                return (
                <RowItemWrapper gap={5} key={idx}>
                    <Favicon bgPosition={item.favicon}/>
                    <Link text={item.content}></Link>
                </RowItemWrapper>)
            })}
            <Link text='more hot questions'/>
        </ColumnItemWrapper>
    )
}

export default RightSideBar;