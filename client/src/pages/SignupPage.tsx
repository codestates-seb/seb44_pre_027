import {
  Container,
  ContentContainer,
  ColumnItemWrapper,
  RowItemWrapper,
} from '../common/style/Containers.styled';
import z from 'zod';
import { PrimaryBtn } from '../common/style/Buttons.styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
import GotoLinkIcon from '../assets/icons/GotoLinkIcon';
import useSignupMutation from '@/queries/useSignupMutation';

const passwordRegex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])/);

const signupSchema = z.object({
  nickname: z.string().min(2).max(10),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled' })
    .email({ message: 'Invalid email address' }),
  password: z.string().min(8).regex(passwordRegex),
});

export type SignupType = z.infer<typeof signupSchema>;

const SignupPage = () => {
  const signupMutation = useSignupMutation();
  const signupForm = useForm<SignupType>({ resolver: zodResolver(signupSchema) });
  const onSubmit: SubmitHandler<SignupType> = async (data) => {
    await signupMutation.mutate(data);
  };

  return (
    <Container color="#f1f2f3">
      <ContentContainer size="100%" direction="row">
        <SignupIntro />
        <ColumnItemWrapper size={316} gap={0}>
          <div className="mb-6">
            <OAuthButton type="Google">
              <RowItemWrapper gap={5}>
                <GoogleIcon />
                Log in with Google
              </RowItemWrapper>
            </OAuthButton>
            <OAuthButton type="Github">
              <RowItemWrapper gap={5}>
                <GithubIconWhite />
                Log in with GitHub
              </RowItemWrapper>
            </OAuthButton>
            <OAuthButton type="Facebook">
              <RowItemWrapper gap={5}>
                <FacebookIcon />
                Log in with Facebook
              </RowItemWrapper>
            </OAuthButton>
          </div>
          <Card>
            <form onSubmit={signupForm.handleSubmit(onSubmit)}>
              <ColumnItemWrapper size="100%" gap={16}>
                <LabelInput
                  title={'Display Name'}
                  isWithLink={false}
                  {...signupForm.register('nickname')}
                />
                <LabelInput title={'Email'} isWithLink={false} {...signupForm.register('email')} />
                <LabelInput
                  title={'Password'}
                  isWithLink={false}
                  type={'password'}
                  {...signupForm.register('password')}
                />
              </ColumnItemWrapper>
              <p className="text-xs text-slate-400">
                Passwords must contain at least eight characters, including at least 1 letter and 1
                number.
              </p>

              <div className="mt-5 flex items-start gap-2">
                <input type="checkbox" />
                <label className="cursor-pointer text-xs text-slate-600">
                  Opt-in to receive occasional product updates, user research invitations, company
                  announcements, and digests.
                </label>
                <HelpSm />
              </div>

              <PrimaryBtn size="100%" className="my-4" type="submit">
                Sign up
              </PrimaryBtn>
              {(signupForm.formState.errors.email ||
                signupForm.formState.errors.password ||
                signupForm.formState.errors.nickname) && (
                <span className="  text-xs text-red-500">
                  something went wrong please check your password, email, name, daham
                </span>
              )}
              <p className="mt-5 text-xs text-slate-400">
                By clicking “Sign up”, you agree to our <Link text="terms of service" /> and
                acknowledge that you have read and understand our <Link text="privacy policy" /> and{' '}
                <Link text="code of conduct." />
              </p>
            </form>
          </Card>
          <ColumnItemWrapper size="100%" gap={10} className="mt-2" align="center">
            <RowItemWrapper gap={5}>
              <Phrase text="Don't have and account?" />
              <Link text="Sign up" />
            </RowItemWrapper>
            <RowItemWrapper gap={5}>
              <Phrase text="Are you an employer?" />
              <Link text="Sign up on Talent" />
              <GotoLinkIcon />
            </RowItemWrapper>
          </ColumnItemWrapper>
        </ColumnItemWrapper>
      </ContentContainer>
    </Container>
  );
};

export default SignupPage;
