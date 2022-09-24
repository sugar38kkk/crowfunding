import { LayoutProps } from '@/models/common';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IMAGE_LOGO } from '@/constants/index';

const AuthLayout = ({children }: LayoutProps) => {
  return (
    <div className="relative w-full min-h-screen p-10 bg-lite dark:bg-darkbg isolate auth-layout">
      <Image
        src="/ellipse.png"
        alt="bg"
        layout="fill"
        className="hidden lg:block absolute bottom-0 left-0 right-0 pointer-events-none z-[-1]"
      />
      <Link href={'/'}>
        <a className={'inline-block mb-5 lg:mb-16'}>
          <Image
            src={IMAGE_LOGO.src}
            alt={IMAGE_LOGO.alt}
            width={IMAGE_LOGO.width}
            height={IMAGE_LOGO.height}
          />
        </a>
      </Link>
      <div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
