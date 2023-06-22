import { css, styled } from 'styled-components';

interface LinkProps {
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

const Link = ({text, url}:LinkProps) => {
    return(
        <TextLink href={url}>{text}</TextLink>
    )
}

export default Link;