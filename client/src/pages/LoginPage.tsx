import React from 'react';
import { css, styled } from 'styled-components';

import {
  Container,
  ContentContainer,
  ColumnItemWrapper,
  RowItemWrapper,
} from '../common/style/Containers.styled';
import { PrimaryBtn } from '../common/style/Buttons.styled';
import LogoGlyphMd from '../assets/icons/LogoGlyphMd';
import OAuthButton from '../common/basic/OAuthButton';
import Card from '../common/basic/Card';
import LabelInput from '../common/basic/LabelInput';
import Phrase from '../common/atoms/Phrase';
import Link from '../common/atoms/Link';

import GoogleIcon from '../assets/icons/GoogleIcon';
import GithubIconWhite from '../assets/icons/GithubIconWhite';
import FacebookIcon from '../assets/icons/FacebookIcon';
import GotoLinkIcon from '../assets/icons/GotoLinkIcon';
import useLoginMutation from '@/queries/useLoginMutation';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const passwordRegex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])/);

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field has to be filled' })
    .email({ message: 'Invalid email address' }),
  password: z.string().min(8).regex(passwordRegex),
});

type LoginType = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const loginMutation = useLoginMutation();
  const loginForm = useForm<LoginType>({ resolver: zodResolver(loginSchema) });
  const onSubmit: SubmitHandler<LoginType> = (data) => {
    console.log(data);
    loginMutation.mutate(data);
  };

  return (
    <Container color="#f1f2f3">
      <ContentContainer size="100%" direction="column">
        <ColumnItemWrapper size={316} gap={16} align="center">
          <div className="mb-7">
            <a href="https://stackoverflow.com/">
              <LogoGlyphMd />
            </a>
          </div>

          <ColumnItemWrapper size="100%" gap={0}>
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
          </ColumnItemWrapper>

          <Card>
            <form onSubmit={loginForm.handleSubmit(onSubmit)}>
              <ColumnItemWrapper size="100%" gap={16}>
                <LabelInput title={'Email'} isWithLink={false} {...loginForm.register('email')} />
                <LabelInput
                  title={'Password'}
                  isWithLink={true}
                  type={'password'}
                  linkText={'Forgot password?'}
                  {...loginForm.register('password')}
                />
              </ColumnItemWrapper>
              <PrimaryBtn size="100%" className="my-5" type="submit">
                Log in
              </PrimaryBtn>
            </form>
          </Card>

          <ColumnItemWrapper size="100%" gap={10} className={'mt-2'} align="center">
            <RowItemWrapper gap={5}>
              <Phrase text="Don't have and account?" />
              <Link text="Sign up"></Link>
            </RowItemWrapper>
            <RowItemWrapper gap={5}>
              <Phrase text="Are you an employer?" />
              <Link text="Sign up on Talent"></Link>
              <GotoLinkIcon />
            </RowItemWrapper>
          </ColumnItemWrapper>
        </ColumnItemWrapper>
      </ContentContainer>
    </Container>
  );
};

export default LoginPage;
