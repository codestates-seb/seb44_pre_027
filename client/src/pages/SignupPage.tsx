import { Container, ContentContainer, ColumnItemWrapper,RowItemWrapper } from '../common/style/Containers.styled';
import { PrimaryBtn } from '../common/style/Buttons.styled';
import OAuthButton from '../common/basic/OAuthButton';
import Card from '../common/basic/Card';
import LabelInput from '../common/basic/LabelInput';
import Phrase from '../common/atoms/Phrase';
import Link from '../common/atoms/Link';
import SignupIntro from '../components/SignupIntro';

import GoogleIcon from '../assets/icons/GoogleIcon';
import GithubIconWhite from '../assets/icons/GithubIconWhite';
import FacebookIcon from '../assets/icons/FacebookIcon';
import HelpSm from '../assets/icons/HelpSm';

const SignupPage = () => {

    return(
        <Container color='#f1f2f3'>
            <ContentContainer size='100%' direction='row'>
                <SignupIntro/>
                <ColumnItemWrapper size={316} gap={0}>
                    <div className='mb-6'>
                        <OAuthButton type="Google">
                            <RowItemWrapper gap={5}>
                                <GoogleIcon/>Log in with Google
                            </RowItemWrapper>
                        </OAuthButton>
                        <OAuthButton type="Github">
                            <RowItemWrapper gap={5}>
                                <GithubIconWhite/>Log in with GitHub
                            </RowItemWrapper>
                        </OAuthButton>
                        <OAuthButton type="Facebook">
                            <RowItemWrapper gap={5}>
                                <FacebookIcon/>Log in with Facebook
                            </RowItemWrapper>
                        </OAuthButton>
                    </div>

                    <Card>
                        <ColumnItemWrapper size='100%' gap={16}>
                        <LabelInput title={'Display Name'} isWithLink={false}/>
                        <LabelInput title={'Email'} isWithLink={false}/>
                        <LabelInput title={'Password'} isWithLink={false} type={'password'}/>
                        </ColumnItemWrapper>
                        <p className='text-xs text-slate-400' >Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>

                        <div className='flex items-start gap-2 mt-5'>
                            <input type="checkbox"/>
                            <label className='text-xs text-slate-600 cursor-pointer'>Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.</label>
                            <HelpSm/>
                        </div>

                        <PrimaryBtn size='100%' className='my-4'>Sign up</PrimaryBtn>

                        <p className='text-xs text-slate-400 mt-5' >By clicking “Sign up”, you agree to our <Link text='terms of service'/> and acknowledge that you have read and understand our <Link text='privacy policy'/> and <Link text='code of conduct.'/></p>
                    </Card>

                    <ColumnItemWrapper size='100%' gap={10} className='mt-2'>
                        <RowItemWrapper gap={5}>
                            <Phrase text="Don't have and account?"/>
                            <Link text='Sign up'></Link>
                        </RowItemWrapper>
                        <RowItemWrapper gap={5}>
                            <Phrase text="Are you an employer?"/>
                            <Link text='Sign up on Talent'></Link>
                        </RowItemWrapper>
                    </ColumnItemWrapper>

                </ColumnItemWrapper>
            </ContentContainer>
        </Container>
    )

}

export default SignupPage;