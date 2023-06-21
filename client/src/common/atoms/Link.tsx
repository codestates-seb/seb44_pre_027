import React from 'react';
import { css, styled } from 'styled-components';

interface LinkProps
extends React.ComponentPropsWithRef<'a'>{
    text:string|undefined;
    url?:string|undefined;

}

const TextLink = styled.a`
    font-size: 12px;
    color: #0074cc;
    cursor: pointer;
    &:hover{
        color: #0a95ff;
    }
`;

const Link = ({text, url, ...attributes}:LinkProps) => {
    return(
        <TextLink href={url} {...attributes}>{text}</TextLink>
    )
}

export default Link;