import { css, styled } from 'styled-components';

import PencilSM from '../../assets/icons/PencilSM';

import { RowItemWrapper } from '../style/Containers.styled.js';
import { WidgetItem } from '../../types/WidgetPropsType';

interface BasicWidgetItemProps {
    type: string;
    item: WidgetItem;
}

const TextLink = styled.a`
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    &:hover {
        color: #525960;
    }
`;
const QuestionScore = styled.span`
    font-size: 13px;
    color:#6a737c;
`;

const BasicWidgetItem = ({type, item}: BasicWidgetItemProps) => {
    return (
        <RowItemWrapper gap={10} className='h-10 my-3 px-4'>
            { type  === 'BLOG' &&
                <PencilSM/>
            }
            { type === 'META' &&
                <PencilSM/>
            }
            { type === 'POST' &&
                <QuestionScore title={"Question Score"}>{Math.floor(Math.random()*150)}</QuestionScore>
            }
            <TextLink href={item.url} title={item.content}>{item.content}</TextLink>
        </RowItemWrapper>
    )
}

export default BasicWidgetItem;