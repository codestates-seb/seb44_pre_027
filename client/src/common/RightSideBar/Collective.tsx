import {ReactNode} from 'react';
import {css, styled} from 'styled-components';

import { LightWidgetItem } from './RightSideBar';

interface CollectiveProps{
    item: LightWidgetItem;
}

const Collective = ({item}:CollectiveProps) => {
    const Text = css`
        font-size: 13px;
        color: #3B4045;
    `;

    const CollectiveContainer = styled.div`
        height: 100%;
        padding: 16px 15px;
        border-top: 1px solid #d6d9dc;
    `;

    const ProfileContainer = styled.div`
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        gap: 12px;
        margin-bottom: 12px;
    `

    const Intro = styled.span`
        height: 40px;
        ${Text};

        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        /* white-space: norwrap; */
    `;

    const Image = styled.img`
        width: 100%;
        background-color: red;
    `

    const TitleContainer = styled.div`
        height: 31.99px;
        display : flex;
        flex-direction: column;
    ` ;

    const Title = styled.div`
        color: #6A737C;
        font-size: 15px;
        cursor: pointer;
    `;

    const Caption = styled.div`
        ${Text};
    `;

    const Button = styled.button`
        width: fit-content;
        padding: 9.6px;

        font-size: 12px;
        color: #0074cc;
        background-color: white;
        border: 1px solid #379fef;
        border-radius: 3px;
        &:hover {
            background-color: #f0f8ff;
            color: #0063bf;
        }
    `;

    return(
        <CollectiveContainer>
            <ProfileContainer>
                <Image/>
                <TitleContainer>
                    <Title>{item.title}</Title>
                    <Caption>{Math.floor(Math.random()*13)}k Members</Caption>
                </TitleContainer>
                <Button>Join</Button>
            </ProfileContainer>
            <Intro>{item.content}</Intro>
        </CollectiveContainer>
    )
}

export default Collective;