import { css, styled } from 'styled-components';

import XIcon from '@/assets/icons/XIcon';

interface SideBarAdProps {
    url: string;
    src: string;
}

const SideBarAd = ({url, src}:SideBarAdProps):JSX.Element => {

    const AdContainer = styled.div`
        margin-bottom: 16px;
    `;

    const ImgContainer = styled.a`
        width: 100%;
        height: 100%;

        display: inline-block;
        position: relative;
    `

    const AdImage = styled.img`
        height: 250px;
        position: relative;
    `;

    const IconWrapper = styled.div`
        position: absolute;
        left: 278px;
        z-index: 10;
    `;

    const ReportButtonContainer = styled.div`
        height: fit-content;
        text-align: right;
    `;

    const ReportButton = styled.button`
        margin: 2px 0 0;
        font-size: 11px;
        color: #0074cc;
        vertical-align: top;
        &:hover{
            color:#0a95ff;
        }
    `;

    return(
        <AdContainer>
            <ImgContainer href={url}>
                <IconWrapper>
                    <XIcon/>
                </IconWrapper>
                <AdImage src={src}/>
            </ImgContainer>
            <ReportButtonContainer>
                <ReportButton>Report this add</ReportButton>
            </ReportButtonContainer>
        </AdContainer>
    )
}

export default SideBarAd;