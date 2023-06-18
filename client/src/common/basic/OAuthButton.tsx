import { css, styled } from 'styled-components';
import {ReactNode} from 'react';

import { FlexCenter } from '../style/styles';
import { defaultBtnStyles} from '../style/Buttons.styled'

interface OAuthButtonProps {
    type: string;
    children: ReactNode;
}

const OAuthButton = ({type, children}:OAuthButtonProps)=>{

    const ButtonContainer = styled.button`
        ${defaultBtnStyles}
        width: 100%;

        margin: 4px 0;
        padding: 10.4px;

        ${FlexCenter}
        border-radius: 5px;

        ${type === 'Google' &&
            css`
                color: #3b4045;
                background-color: white;
                border-color: #d6d9dc;
                &:hover{
                    color: #232629;
                    background-color:#f8f9f9;
                }

            `
        }

        ${type === 'Github' &&
            css`
                color: white;
                background-color: #2f3337;
                border-color: #d6d9dc;
                &:hover{
                    background-color: #232629;
                }
            `
        }

        ${type === 'Facebook' &&
            css`
                color: white;
                border-color: transparent;
                background-color: #385499;
                &:hover{
                    background-color: #314a86;
                }
            `
        }
    `;

    return (
        <ButtonContainer>
            {children}
        </ButtonContainer>
    )
}

export default OAuthButton;