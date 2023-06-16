import {ReactNode} from 'react';
import {css, styled} from 'styled-components';

interface WidgetProps {
    type: string;
    idx: number;
    title: string;
    children: ReactNode;
};

const Widget = ({idx, type, title, children}:WidgetProps) => {
    const WidgetContainer = styled.div<{type:string, idx:number}>`
        height  : 100%;
        border: 1px solid;
        border-radius: ${(props)=> props.idx === 1 && '3px 3px 0 0'};
        overflow: hidden;

        ${(props) => props.type === 'Basic' &&
            css`
                border-top: ${props.idx !== 1 && '0px'};
                border-color: #f1e5bc;
                background-color: #fdf7e2;
            `
        }
        ${(props) => props.type === 'Light' &&
            css`
                margin-top: ${props.idx === 1 && '16px'};
                margin-bottom: 16px;
                background-color: transparent;
                border-color: #d6d9dc;
            `
        }
    `;

    const WidgetHeader = styled.div<{type:string, title:string}>`
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

    return(
        <WidgetContainer type={type} idx={idx}>
            <WidgetHeader type={type} title={title}>{title}</WidgetHeader>
            {children}
        </WidgetContainer>
    )
}

export default Widget;