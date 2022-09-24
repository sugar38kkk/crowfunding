import Button from '@/components/common/button/button';
import ButtonGoogle from '@/components/common/button/button-google';
import CheckBox from '@/components/common/checkbox/checkbox';
import FormGroup from '@/components/common/form-group/form-group';
import Input from '@/components/common/input/input';
import Label from '@/components/common/label/label';
import AuthLayout from '@/components/layout/auth';
import { Kind } from 'modules/common';
import Link from 'next/link';
import React, { useState } from 'react';

type Props = {};

const LoginPage = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1 dark:text-white">
        Welcome Back!
      </h1>
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        {"Don't have an account?"}{' '}
        <Link href={'/auth/signup'}>
          <a className="font-medium underline text-primary ">Sign up</a>
        </Link>
      </p>
      <ButtonGoogle label='Sign in with google' />
      <form>
        <FormGroup>
          <Label htmlFor="email" label={'Email *'} />
          <Input name="email" placeholder="example@gmail.com" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password" label={'Password *'} />
          <Input name="password" type={'password'} placeholder="Create a password" />
        </FormGroup>
        <FormGroup className="text-right">
          <span className="inline-block text-sm font-medium text-primary">Forgot password</span>
        </FormGroup>
        <Button
          onClick={() => setIsLoading((prev) => !prev)}
          isLoading={isLoading}
          label={'Sign in'}
          kind={Kind.Primary}
          className={'w-full'}
        />
      </form>
    </>
  );
};

LoginPage.Layout = AuthLayout;

export default LoginPage;
