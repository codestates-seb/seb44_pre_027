import { css, styled } from 'styled-components';
import { RSideBarWidgetData } from '../msgs.js';

import Widget from './Widget';
import BasicWidgetItem from './BasicWidgetItem';
import LightWidgetItem from './LightWidgetItem';

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
        </RightSideBarContainer>
    )
}

export default RightSideBar;