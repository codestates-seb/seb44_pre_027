import { css, styled } from 'styled-components';
import {ReactNode} from 'react';

interface CardProps {
    children: ReactNode;
}

const CardContainer = styled.div`
    width: 100%;
    margin-bottom:24px;
    padding: 24px;

    background-color: white;
    border-radius: 7px;
    box-sizing: inherit;

    box-shadow: 0 10px 24px hsla(0,0%,0%,0.05), 0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
`;

const Card = ({children}:CardProps) => {
    return(
        <CardContainer>
            {children}
        </CardContainer>
    )
}

export default Card;