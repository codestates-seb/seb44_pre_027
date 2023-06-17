import { css, styled } from 'styled-components';

import Link from '../atoms/Link';

interface LabelInputProps {
    type?: string;
    isWithLink: boolean;
    title: string;
    linkText?: string;
}

const LabelInput = ({type, isWithLink, title, linkText}: LabelInputProps)=>{

    const LabelInputContainer = styled.div`
        margin: 6px 0;
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
        gap: 2px;
    `;

    const LabelContainer = styled.div`
        display: flex;
        justify-content: space-between;
    `;

    const Label = styled.label`
        padding: 0px 2px;

        color: #0C0D0E;
        font-size: 12.6923px;
        font-weight: 600;
    `;

    const Input = styled.input`
        padding: 7.8px 9.1px;
        border: 1px solid #babfc4;
        border-radius: 3px;
    `;

    return(
        <LabelInputContainer>
            { isWithLink === true ?
                <LabelContainer>
                    <Label>{title}</Label>
                    <Link text={linkText}></Link>
                </LabelContainer>
                :
                <Label>{title}</Label>
            }
            <Input type={type}/>
        </LabelInputContainer>
    )
}

export default LabelInput;