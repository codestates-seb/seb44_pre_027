import { css, styled } from 'styled-components';

import XIcon from '@/assets/icons/XIcon';

interface SideBarAdProps {
    url: string;
    src: string;
}

const ImgContainer = styled.a`
    width: 100%;
    height: 100%;
    display: inline-block;
    position: relative;
`

const AdImage = styled.img`
    height: 250px;
`;

const IconWrapper = styled.div`
    position: absolute;
    cursor: pointer;
    top: 1px;
    left: 249px;
    z-index: 10;

    & svg {
        fill: #00aecd;
        background-color: white;
        stroke: #00aecd;
        stroke-width:1.25px;
    }

    & svg:hover {
        background-color: #707070;
        stroke: white;
    }
`;

const ReportButtonContainer = styled.div`
    height: fit-content;
    text-align: right;
`;

const ReportButton = styled.button`
    font-size: 11px;
    color: #0074cc;
    vertical-align: top;
    &:hover{
        color:#0a95ff;
    }
`;

const SideBarAd = ({url, src}:SideBarAdProps):JSX.Element => {
    return(
        <div className='mb-3'>
            <ImgContainer href={url}>
                <IconWrapper>
                    <XIcon/>
                </IconWrapper>
                <AdImage src={src}/>
            </ImgContainer>
            <ReportButtonContainer>
                <ReportButton>Report this add</ReportButton>
            </ReportButtonContainer>
        </div>
    )
}

export default SideBarAd;