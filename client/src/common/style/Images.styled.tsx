import { styled } from 'styled-components';

export const Favicon = styled.div<{bgPosition:number}>`
    max-width: 16px;
    min-width: 16px;
    max-height: 16px;
    min-height: 16px;
    margin: 2px 6px 0 0;
    background-color: transparent;
    background-repeat: no-repeat;
    background-image: url('https://cdn.sstatic.net/Img/favicons-sprite16.png?v=61557c92f088' );
    background-position: 0 ${(props)=>props.bgPosition}px;
`