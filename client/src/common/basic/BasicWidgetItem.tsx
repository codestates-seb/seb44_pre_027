import { css, styled } from 'styled-components';

import PencilSM from '../../assets/icons/PencilSM';

import { RowItemWrapper } from '../style/Containers.styled.js';
import { WidgetItem } from '../../types/WidgetPropsType';
import { Favicon } from '../style/Images.styled';

interface BasicWidgetItemProps {
    item: WidgetItem;
}

const TextLink = styled.a`
    width: 85%;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    &:hover {
        color: #525960;
    }
`;
const QuestionScore = styled.span`
    font-size: 13px;
    color:#6a737c;
`;

const BasicWidgetItem = ({item}: BasicWidgetItemProps) => {
    return (
        <RowItemWrapper gap={10} className='h-10 my-3 px-4'>
            {item.url.includes('stackoverflow.blog') &&
                <PencilSM/>
            }
            { item.url.includes('https://meta.stackexchange.com/questions/3') &&
                <Favicon bgPosition={-6156}/>
            }
            { item.url.includes('policy') &&
                <Favicon bgPosition={-6192}/>
            }
            { item.url.includes('https://meta.stackoverflow.com/questions/425') &&
                <QuestionScore title={"Question Score"}>{Math.floor(Math.random()*150)}</QuestionScore>
            }
            <TextLink href={item.url} title={item.content}>{item.content}</TextLink>
        </RowItemWrapper>
    )
}

export default BasicWidgetItem;