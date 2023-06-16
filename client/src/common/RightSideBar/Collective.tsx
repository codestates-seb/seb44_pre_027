import {ReactNode} from 'react';
import {css, styled} from 'styled-components';

import { LightWidgetItem } from './RightSideBar';

interface CollectiveProps{
    item: LightWidgetItem;
}

const Collective = ({item}:CollectiveProps) => {
    const CollectiveContainer = styled.div`
        height: 100%;
        padding: 16px 15px;
    `;

    const ProfileContainer = styled.div`
        display: flex;
        gap: 12px;
    `

    const Intro = styled.span`
        height: 33.98px;

        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        /* white-space: norwrap; */
        font-size: 13px;
        color: #3B4045;
    `;

    return(
        <CollectiveContainer>
            <ProfileContainer>
                <img style={{width: '31.99px', height: '30px', backgroundColor:'red'}}></img>
            </ProfileContainer>
            <Intro>{item.content}</Intro>
        </CollectiveContainer>
    )
}

export default Collective;