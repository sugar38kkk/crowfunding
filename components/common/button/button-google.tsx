import Image from 'next/image';
import React from 'react';

type Props = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  label?: string;
};

const ButtonGoogle = ({ onClick, label = 'Sign up with google' }: Props) => {
  return (
    <button className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border gap-x-3 border-strock rounded-xl text-text2 dark:text-white dark:border-darkStroke">
      <Image src="/icon-google.png" width={24} height={24} alt="icon-google" />
      <span>{label}</span>
    </button>
  );
};

export default ButtonGoogle;
