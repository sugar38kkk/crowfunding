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
        SignUp
      </h1>
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{' '}
        <Link href={'/auth/signin'}>
          <a className="font-medium underline text-primary ">Sign in</a>
        </Link>
      </p>
      <ButtonGoogle />
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white">
        Or sign up with email
      </p>
      <form>
        <FormGroup>
          <Label htmlFor={'full_name'} label={'Full Name *'} />
          <Input
            value={'gahau'}
            error={!isLoading ? 'Cannot empty!' : ''}
            autoFocus={true}
            name="full_name"
            placeholder="John Doe"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email" label={'Email *'} />
          <Input name="email" placeholder="example@gmail.com" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password" label={'Password *'} />
          <Input name="password" type={'password'} placeholder="Create a password" />
        </FormGroup>
        <div className="flex items-start mb-5 gap-x-5">
          <CheckBox checked={true} name="term">
            <p className="flex-1 text-xs lg:text-sm text-text2 dark:text-text3">
              I agree to the
              <span className="underline text-secondary"> Terms of Use</span> and have read and
              understand the
              <span className="underline text-secondary"> Privacy policy.</span>
            </p>
          </CheckBox>
        </div>
        <Button
          onClick={() => setIsLoading((prev) => !prev)}
          isLoading={isLoading}
          label={'Create my account'}
          kind={Kind.Primary}
          className={'w-full'}
        />
      </form>
    </>
  );
};

LoginPage.Layout = AuthLayout;

export default LoginPage;
