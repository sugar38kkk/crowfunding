import { Kind, Type } from 'modules/common';
import Link from 'next/link';
import React from 'react';

type Props = {
  type?: Type;
  label?: string;
  className?: string;
  isLoading?: boolean;
  kind?: Kind;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};



const Button = ({
  type = Type.ButtonType,
  label,
  className = '',
  isLoading = false,
  kind,
  href,
  onClick,
}: Props) => {
  const child = !!isLoading ? (
    <div className="w-6 h-6 border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    label
  );
  let defaultClassName =
    'flex items-center justify-center p-4 text-base font-semibold rounded-xl min-h-[56px]';
  switch (kind) {
    case Kind.Primary:
      defaultClassName = defaultClassName + ' bg-primary text-white';
      break;
    case Kind.Secondary:
      defaultClassName = defaultClassName + ' bg-secondary text-white';
      break;
    case Kind.Ghost:
      defaultClassName = defaultClassName + ' bg-secondary bg-opacity-10 text-secondary';
      break;

    default:
      break;
  }
  if (href)
    return (
      <Link href={href} className={`${defaultClassName} ${className}`}>
        <a>{child}</a>
      </Link>
    );
  return (
    <button
      className={`${defaultClassName} ${
        !!isLoading ? 'opacity-50 pointer-events-none' : ''
      } ${className}`}
      type={type}
      onClick={onClick}
    >
      {child}
    </button>
  );
};

export default Button;
