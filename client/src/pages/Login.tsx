import {css, styled} from 'styled-components';

import { Container, ColumnContent, FlexItem } from '../common/style/Containers.styled';
import { PrimaryBtn } from '@/common/style/Buttons.styled';
import LogoGlyphMd from '@/assets/icons/LogoGlyphMd';
import OAuthButton from '@/common/basic/OAuthButton';
import Card from '@/common/basic/Card';
import LabelInput from '@/common/basic/LabelInput';
import Phrase from '@/common/atoms/Phrase';
import Link from '@/common/atoms/Link';

import GoogleIcon from '@/assets/icons/GoogleIcon';
import GithubIcon from '@/assets/icons/GithubIcon';
import FacebookIcon from '@/assets/icons/FacebookIcon';

const Login = () => {
    const FlexRowAndCenter = css`
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const TextWithIconContianer = styled.div`
        ${FlexRowAndCenter}
        gap: 5px;
    `

    const HelpWrapper = styled.div`
        ${FlexRowAndCenter}
        gap: 5px;

    `

    return(
        <Container color='#f1f2f3'>
            <ColumnContent size={525.46}>
                <FlexItem size={295}>
                    <div className="mb-7">
                        <a href="https://stackoverflow.com/">
                            <LogoGlyphMd/>
                        </a>
                    </div>

                    <div className='mb-6'>
                        <OAuthButton type="Google">
                            <TextWithIconContianer>
                                <GoogleIcon/>Log in with Google
                            </TextWithIconContianer>
                        </OAuthButton>
                        <OAuthButton type="Github">
                            <TextWithIconContianer>
                                <GithubIcon/>Log in with GitHub
                            </TextWithIconContianer>
                        </OAuthButton>
                        <OAuthButton type="Facebook">
                            <TextWithIconContianer>
                                <FacebookIcon/>Log in with Facebook
                            </TextWithIconContianer>
                        </OAuthButton>
                    </div>

                    <Card>
                        <LabelInput title={'Email'} isWithLink={false}/>
                        <LabelInput title={'Password'} isWithLink={true} type={'password'} linkText={'Forgot password?'}/>
                        <div className='my-5'>
                            <PrimaryBtn size='100%'>Log in</PrimaryBtn>
                        </div>
                    </Card>

                    <HelpWrapper>
                        <Phrase text="Don't have and account?"/>
                        <Link text='Sign up'></Link>
                    </HelpWrapper>
                    <div className='mt-2'>
                        <HelpWrapper>
                            <Phrase text="Are you an employer?"/>
                            <Link text='Sign up on Talent'></Link>
                        </HelpWrapper>
                    </div>

                </FlexItem>
            </ColumnContent>
        </Container>
    )
}

export default Login;