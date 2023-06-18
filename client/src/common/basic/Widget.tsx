import {ReactNode} from 'react';
import {css, styled} from 'styled-components';

import { WidgetData } from '../../types/WidgetPropsType'

interface WidgetProps extends WidgetData{
    isStuck?: boolean | undefined;
    children: ReactNode;
};

const WidgetContainer = styled.div<{type:string|undefined, idx:number, isStuck:boolean|undefined}>`
    height  : 100%;
    border: 1px solid;
    border-radius: 3px 3px 0 0;

    ${(props) => props.isStuck &&
        css`
            border-radius: ${props.idx !== 1 && '0'};
            border-top: ${props.idx !== 1 && '0px'};
        `
    }
    ${(props) => props.type === 'Basic' &&
        css`
            border-color: #f1e5bc;
            background-color: #fdf7e2;
        `
    }
    ${(props) => props.type === 'Light' &&
        css`
            background-color: transparent;
            border-color: #d6d9dc;
        `
    }
`;

const WidgetHeader = styled.div<{type:string|undefined, title:string}>`
    width: 100%;
    height: 41.69px;

    padding: 12px 16px;
    border-bottom: 1px solid;

    ${(props)=> props.type === 'Basic' ?
        css`
            line-height: 12px;
            font-size: 12px;
            font-weight: bold;
            color: #525960;
            border-color: #f1e5bc;
            background-color: #fbf3d5;
        `
    :
        css`
            line-height: 15px;
            font-family: -apple-system;
            font-size: 15px;
            color: #525960;
            border-color: #d6d9dc;
            background-color: #F8F9F9;
        `
    }
`;

const Widget = ({id, type, isStuck, title, children}:WidgetProps) => {
    return(
        <WidgetContainer type={type} idx={id} isStuck={isStuck}>
            <WidgetHeader type={type} title={title}>{title}</WidgetHeader>
            {children}
        </WidgetContainer>
    )
}

export default Widget;