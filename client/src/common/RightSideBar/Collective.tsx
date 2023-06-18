import {ReactNode} from 'react';
import {css, styled} from 'styled-components';

import { LightWidgetItem } from '../../types/WidgetPropsType';
import { TransparentBtn } from '../style/Buttons.styled';
import { ColumnItemWrapper, RowItemWrapper } from '../style/Containers.styled';

interface CollectiveProps{
    item: LightWidgetItem;
}

const CollectiveContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px 15px;
    border-top: 1px solid #d6d9dc;
`;
const Title = styled.div`
    color: #6A737C;
    font-size: 15px;
    line-height: 15px;
    vertical-align: top;
    cursor: pointer;
`;
const Summary = styled.span`
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const Collective = ({item}:CollectiveProps) => {

    return(
        <CollectiveContainer>
            <RowItemWrapper gap={12}>
                <img src={item.url} className='w-8 h-8 rounded-md' />
                <ColumnItemWrapper size='100%' gap={4}>
                    <Title>{item.title}</Title>
                    <span className='text-xs decoration-gray-500'>{Math.floor(Math.random()*13)}k Members</span>
                </ColumnItemWrapper>
                <TransparentBtn size={42}>Join</TransparentBtn>
            </RowItemWrapper>
            <Summary className='text-13'>{item.content}</Summary>
        </CollectiveContainer>
    )
}

export default Collective;