import { css, styled } from 'styled-components';

interface PhraseProps {
    text:string;
}

const Phrase = ({text}:PhraseProps) => {
    const Phrase = styled.p`
        font-size: 13px;
        color: #232629;
    `;

    return(
        <Phrase>{text}</Phrase>
    )
}

export default Phrase;