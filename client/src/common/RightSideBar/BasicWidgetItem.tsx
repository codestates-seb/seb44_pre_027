import { css, styled } from 'styled-components';

import PencilSM from '../../assets/icons/PencilSM';

import { BasicWidgetItem as WidgetItem} from './RightSideBar';

interface BasicWidgetItemProps {
    type: string;
    item: WidgetItem;
}

const BasicWidgetItem = ({type, item}: BasicWidgetItemProps) => {

    const BasicItemContainer = styled.div`
        height: 40px;
        margin: 12px 0;
        padding: 0 16px;
        display: flex;
        gap: 10px;
    `;
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

    return (
        <BasicItemContainer>
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
        </BasicItemContainer>
    )
}

export default BasicWidgetItem;