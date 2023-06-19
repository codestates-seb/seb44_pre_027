import { css, styled } from 'styled-components';

interface LinkProps {
    text:string|undefined;
    url?:string|undefined;
}

const Link = ({text, url}:LinkProps) => {
    const Link = styled.a`
        font-size: 12px;
        color: #0074cc;
        cursor: pointer;
        &:hover{
            color: #0a95ff;
        }
    `;

    return(
        <Link href={url}>{text}</Link>
    )
}

export default Link;