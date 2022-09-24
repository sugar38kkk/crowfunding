import React, { ReactElement } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const FormGroup = ({ children, className }: Props) => {
  return <div className={`flex flex-col mb-5 gap-py-3 ${className}`}>{children}</div>;
};

export default FormGroup;
