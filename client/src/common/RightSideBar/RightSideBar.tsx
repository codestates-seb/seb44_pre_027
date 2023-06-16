import { css, styled } from 'styled-components';
import { RSideBarWidgetData, HotNetworkQuestions } from '../msgs.js';

import Widget from './Widget';
import BasicWidgetItem from './BasicWidgetItem';
import LightWidgetItem from './LightWidgetItem';

import SideBarAd from './SideBarAd.js';

export interface BasicWidgetItem {
    id:number;
    url:string;
    content: string;
}

export interface BasicWidgetData {
    type: string;
    id:number;
    title: string;
    items: Array<BasicWidgetItem>;
}

export interface LightWidgetItem {
    id:number;
    title:string;
    content:string;
}

interface LightWidgetData {
    id:number;
    type: string;
    title:string;
    contents:Array<LightWidgetItem>;
}

interface RightSideBarProps {
    size: number;
}

const RightSideBar = ({size}: RightSideBarProps):JSX.Element => {

    const RightSideBarContainer = styled.div<{size:number}>`
        width: ${size}px;
        float: right;
    `

    const Title = styled.h4`
        margin: 0 0 19px;

        font-size: 19px;
        color: #3b4045;
        cursor: pointer;
    `

    const NetworkQuestionsContainer = styled.div`
        display: flex;
        margin: 0 0 10px;
    `;

    const Favicon = styled.img`
        width: 16px;
        height: 16px;

        margin: 2px 6px 0 0;
        border: solid 2px red;
    `

    const HyperLink = styled.a`
        width: 100%;
        height: fit-content;

        display: inline-block;
        cursor: pointer;

        font-size: 12px;
        color: #0074CC;

        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;

        &:hover{
            color: #0a95ff;
        }
    `

    return(
        <RightSideBarContainer size={size}>
            {RSideBarWidgetData.Basic.map((data:BasicWidgetData):JSX.Element => {
                return (
                    <Widget type="Basic" title={data.title} key={data.id} idx={data.id}>
                        {data.items.map((item:BasicWidgetItem)=>{
                            return <BasicWidgetItem type={data.type} item={item} key={item.id}/>})
                        }
                    </Widget>

                )
            })
            }

            {RSideBarWidgetData.Light.map((item:LightWidgetData):JSX.Element => {
                return (
                    <Widget type="Light" title={item.title} key={item.id} idx={item.id}>
                        <LightWidgetItem type={item.type} contents={item.contents} key={item.id}/>
                    </Widget>
                )
            })
            }

            <SideBarAd url={'https://pagead2.googlesyndication.com/pcs/click?xai=AKAOjstUZlwdAWpcteFu8YWzaSQdJYhCCH4syNQsrkmVMyzF6-VHJ9ryr6cj8aBfVP99ThJjs931yVhRqmSqysSDOFnTWAZnfDfaXxsGSn50YDTSzB5fB9nzlGPa_07DLx--QDhFGECvne8BzWQ9Tc9HdDB7hOrfrghLEZ8Gpuw6BOzkr06-GA42zShPhl9RahQmrhljwPAId0yIaBbIhyFWPtJ60SZAKnNsEKm5YKSpJEVNYqpbqlal-vWTOnRy04_HrDunKWoQVOB2K1NutoMvw382lZFRMY9yAkuhhszD9ql2Kubb-uGUXLFOSKPeVARn-a_VkFfSFOerVHRM9E7Uelu_NB4T_MOyHDs&sig=Cg0ArKJSzGmw6ILkTK87&fbs_aeid=[gw_fbsaeid]&adurl=https://survey.stackoverflow.co/2023/%3Futm_source%3Dhouse-ads%26utm_medium%3Ddisplay%26utm_campaign%3Ddev-survey-results-2023%26utm_content%3Dsurvey-results&nm=30&nx=150&ny=-70&mb=2'} src={'https://tpc.googlesyndication.com/simgad/2894417314404102158'}/>


            <Title>Hot Network Questions</Title>
            {HotNetworkQuestions.map((item:string)=>{
                return (<NetworkQuestionsContainer>
                    <Favicon/>
                    <HyperLink>{item}</HyperLink>
                    </NetworkQuestionsContainer>)
            })}

        </RightSideBarContainer>
    )
}

export default RightSideBar;