import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

interface ButtonProps {
  bg?: string;
  hover?: string;
  link?: string;
  children: React.ReactNode;
  width?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disable?: boolean;
}

const buttonClasses = classNames(
  'uppercase duration-300 py-[15px] px-[31px]  text-sm font-bold'
);

const Button = ({
  bg = '',
  hover,
  link = '',
  children,

  width,
  type,

  disable,
}: ButtonProps) => {
  if (type) {
    return (
      <button
        disabled={disable}
        type={type}
        className={` ${width && 'w-full'} ${disable && 'cursor-no-drop'}`}
      >
        <a
          className={classNames(
            `${hover} ${buttonClasses} ${bg} text-white w-full block`
          )}
        >
          {children}
        </a>
      </button>
    );
  }
  return (
    <button className={`${width && 'w-full'}`}>
      <Link
        href={link}
        className={classNames(
          `${hover} ${buttonClasses} text-white  ${bg} w-full block`
        )}
      >
        {children}
      </Link>
    </button>
  );
};

export default Button;
