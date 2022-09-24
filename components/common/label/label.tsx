import React, { ReactElement } from 'react';

type Props = {
  label: string;
  htmlFor?: string;
  className?: string;
};

const Label = ({ label, htmlFor, className = '' }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`inline-block text-sm font-medium cursor-pointer text-text2 dark:text-text3 ${className}`}
    >
      {label}
    </label>
  );
};

export default Label;
