import { css, styled } from 'styled-components';
import { RSideBarWidgetData, HotNetworkQuestions } from '../msgs.js';

import { ColumnItemWrapper, RowItemWrapper } from '../style/Containers.styled.js';
import { Favicon } from '../style/Images.styled.js';
import Link from '../atoms/Link.js';
import Widget from '../basic/Widget';
import BasicWidgetItem from './BasicWidgetItem';
import LightWidgetItem from './LightWidgetItem';
import SideBarAd from '../basic/SideBarAd.js';

import { BasicWidgetData, LightWidgetData, WidgetItem } from '../../types/WidgetPropsType'

interface RightSideBarProps {
    size: number;
}

const Title = styled.h4`
    font-size: 19px;
    color: #3b4045;
    cursor: pointer;
`

const RightSideBar = ({size}: RightSideBarProps):JSX.Element => {

    return(
        <ColumnItemWrapper size={size} gap={16}>
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


            <Title>Hot Network Questions</Title>
            {HotNetworkQuestions.map((item:string)=>{
                return (
                <RowItemWrapper gap={5}>
                    <Favicon/>
                    <Link text={item}></Link>
                </RowItemWrapper>)
            })}

        </ColumnItemWrapper>
    )
}

export default RightSideBar;