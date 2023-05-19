import React from 'react';

type Type = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';

const VARIANT_Styles: Record<Type, string> = {
  h1: 'text-xl md:text-2xl',
  h2: 'text-lg md:text-xl',
  h3: 'text-base md:text-lg',
  h4: 'text-sm md:text-base',
  h5: 'text-xs md:text-sm',
  p: 'text-xs',
};

type Font =
  | 'font-regular'
  | 'font-thin'
  | 'font-light'
  | 'font-medium'
  | 'font-normal'
  | 'font-bold'
  | 'font-black'
  | 'font-ultra';

type Transforms = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

const VARIANT_Transforms: Record<Transforms, string> = {
  none: 'inherit',
  capitalize: 'capitalize',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
};

interface Props {
  children: React.ReactNode;
  as: Type;
  looksLike?: Type;
  font?: Font;
}

const Typography = ({ children, as = 'p', looksLike = as, font }: Props) => {
  const TagName = as as keyof JSX.IntrinsicElements;
  return (
    <TagName
      className={`
        ${VARIANT_Styles[looksLike]}
        ${font}
      `}
    >
      {children}
    </TagName>
  );
};

export default Typography;
