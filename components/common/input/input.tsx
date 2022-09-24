import React, { useCallback, useState } from 'react';
import EyeIcon from '../icons/eye';
import EyeSlashIcon from '../icons/eye-slash';

export declare interface InputProps extends React.HTMLProps<any> {
  error?: string;
  endIcon?: React.ReactElement;
}

const Input = ({
  name,
  type = 'text',
  placeholder,
  onChange,
  value,
  className,
  autoFocus = false,
  error = '',
  endIcon,
}: InputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const emailInput = useCallback(
    (element: any) => {
      if (autoFocus && element) {
        element.focus();
      }
    },
    [autoFocus]
  );

  const handleTogglePassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  const iconPassword = () => {
    return type === 'password' && isShowPassword ? (
      <EyeSlashIcon onClick={handleTogglePassword} />
    ) : (
      <EyeIcon onClick={handleTogglePassword} />
    );
  };

  return (
    <div className="relative">
      <input
        id={name}
        type={type === 'password' && isShowPassword ? 'text' : type}
        className={`${'w-full px-6 py-4 text-sm font-medium border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-transparent'} ${
          error.length > 0
            ? 'border-error text-error'
            : 'border-strock text-text1 dark:border-darkStroke'
        } ${type === 'password' || endIcon ? 'pr-16' : ''}`}
        placeholder={error.length <= 0 ? placeholder : ''}
        name={name}
        onChange={onChange}
        value={value}
        ref={emailInput}
      />
      {error.length > 0 && (
        <span className="block px-5 mt-2 text-sm font-medium pointer-events-none text-error">
          {error}
        </span>
      )}
      {type === 'password' && (
        <span className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4">
          {type === 'password' && iconPassword()}
        </span>
      )}
      {endIcon && (
        <span className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4">
          {endIcon}
        </span>
      )}
    </div>
  );
};

export default Input;
