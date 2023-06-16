import { css, styled } from 'styled-components';

interface LinkProps {
    text:string|undefined;
}

const Link = ({text}:LinkProps) => {
    const Link = styled.a`
        font-size: 12px;
        color: #0074cc;
        cursor: pointer;
        &:hover{
            color: #0a95ff;
        }
    `;

    return(
        <Link>{text}</Link>
    )
}

export default Link;