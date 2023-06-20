import { css, styled } from 'styled-components';

interface PhraseProps {
    text:string;
}

const Text = styled.p`
    font-size: 13px;
    color: #232629;
`;

const Phrase = ({text}:PhraseProps) => {
    return(
        <Text>{text}</Text>
    )
}

export default Phrase;