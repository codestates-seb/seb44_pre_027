import { css, styled } from 'styled-components';
import SpotSearch from '@/assets/icons/SpotSearch';
import IconEye from '@/assets/icons/IconEye';
import Collective from './Collective';

import { LightWidgetItem as WidgetItem } from './RightSideBar'


interface LightWidgetItemProps {
    type: string;
    contents: Array<WidgetItem>;
}

const LightWidgetItem = ({type, contents}: LightWidgetItemProps) => {

    const LightWidgetItemContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

    const CustomFilters = styled.div`
        width: 100%;

        margin: 12px;
        padding: 4px 15px;

        font-size: 13px;
        color: #0074CC;
        text-align: left;
        &:hover {
            color: #0a95ff;
        }

        cursor: pointer;
    `;

    const WatchedTags = styled.div`
        padding: 16px 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

    const Phrase = styled.p`
        margin: 8px;
        text-align: center;
        font-size: 13px;
        color: #6a737c;
    `;

    const FilledButton = styled.button<{icon:boolean}>`
        height: 34.84px;
        line-height: 12px;

        margin: 8px;
        padding: 9.6px;

        border: 1px solid #7aa7c7;
        border-radius: 3px;
        color: #39739d;
        font-size: 12px;

        background-color: #e1ecf4;
        box-shadow: inset 0 1px 0 0 hsla(0,0%,100%,0.7);;
        &:hover{
            color: #2c5877;
            background-color: #b3d3ea;
        }
        &:active{
            border-color: #a0c8e4;
            background-color: #a0c8e4;
        }

        ${(props) => props.icon === true &&
            css`
                display: flex;
                gap: 5px;
                justify-content: center;
                align-items: center;
            `
        }
    `;

    return (
        <LightWidgetItemContainer>
            { type  === 'CUSTOM_FILTERS' &&
                <CustomFilters>
                    Create a custom filter
                </CustomFilters>
            }
            { type === 'WATCHED_TAGS' &&
                <WatchedTags>
                    <SpotSearch/>
                    <Phrase>Watch tags to curate your list of questions.</Phrase>
                    <FilledButton icon={true}><IconEye/>Watch a tag</FilledButton>
                </WatchedTags>
            }
            { type === 'IGNORED_TAGS' &&
                <FilledButton icon={false} style={{margin:"18px"}}>Add an ignored tag</FilledButton>
            }
            { type === 'COLLECTIVES' &&
                contents.map((item: WidgetItem):JSX.Element => {
                    return <Collective key={item.id} item={item}/>;
                })
            }
        </LightWidgetItemContainer>
    )
}

export default LightWidgetItem;