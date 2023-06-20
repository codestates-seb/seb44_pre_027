import { css, styled } from 'styled-components';

import Link from '../atoms/Link';
import { ColumnItemWrapper } from '../style/Containers.styled';

interface LabelInputProps {
    type?: string;
    isWithLink: boolean;
    title: string;
    linkText?: string;
}

const LabelContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Label = styled.label`
    padding: 0px 2px;
    text-align: left;
    color: #0C0D0E;
    font-size: 15px;
    font-weight: 600;
`;

const Input = styled.input`
    padding: 7.8px 9.1px;
    border: 1px solid #babfc4;
    border-radius: 3px;
`;

const LabelInput = ({type, isWithLink, title, linkText}: LabelInputProps)=>{


    return(
        <ColumnItemWrapper size='100%' gap={2}>
            { isWithLink === true ?
                <LabelContainer>
                    <Label>{title}</Label>
                    <Link text={linkText}></Link>
                </LabelContainer>
                :
                <Label>{title}</Label>
            }
            <Input type={type}/>
        </ColumnItemWrapper>
    )
}

export default LabelInput;