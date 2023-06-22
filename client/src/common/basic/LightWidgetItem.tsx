import { css, styled } from 'styled-components';
import SpotSearch from '@/assets/icons/SpotSearch';
import IconEye from '@/assets/icons/IconEye';
import Collective from './Collective';

import { LightWidgetItem as LtWidgetItem } from '../../types/WidgetPropsType';
import { ColumnItemWrapper, RowItemWrapper } from '../style/Containers.styled';
import { FilledBtn } from '../style/Buttons.styled';
import Link from '../atoms/Link';

interface LightWidgetItemProps {
    type: string|undefined;
    contents: Array<LtWidgetItem>;
}

const Phrase = styled.p`
    margin: 8px;
    text-align: center;
    font-size: 13px;
    color: #6a737c;
`;

const IconWrapper = styled.div`
  & svg {
    fill: #39739d;
  }
  & svg:hover {
    fill: #2c5877;
  }
`;

const LightWidgetItem = ({type, contents}: LightWidgetItemProps) => {
    return (
        <ColumnItemWrapper size='100%' gap={0} align='center'>
            { type  === 'CUSTOM_FILTERS' &&
            <div className='py-1 px-4 my-3 w-full text-left'>
                <Link text='Create a custom filter'/>
            </div>
            }
            { type === 'WATCHED_TAGS' &&
                <ColumnItemWrapper size='100%' align='center' gap={8} className='my-5 px-7'>
                    <SpotSearch/>
                    <Phrase>Watch tags to curate your list of questions.</Phrase>
                    <FilledBtn size='fit-content'>
                        <RowItemWrapper gap={5}>
                            <IconWrapper>
                                <IconEye/>
                            </IconWrapper>
                            Watch a tag
                        </RowItemWrapper>
                    </FilledBtn>
                </ColumnItemWrapper>
            }
            { type === 'IGNORED_TAGS' &&
                <FilledBtn size='fit-content' className='m-5'>Add an ignored tag</FilledBtn>
            }
            { type === 'COLLECTIVES' &&
                contents.map((item: LtWidgetItem):JSX.Element => {
                    return <Collective key={item.id} item={item}/>;
                })
            }
        </ColumnItemWrapper>
    )
}

export default LightWidgetItem;