import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...attributes }: ButtonProps) => {
  return (
    <button
      className=" h-[38px] w-[100px] rounded-sm bg-sky-500 text-xs text-white hover:bg-sky-700"
      {...attributes}
    >
      {children}
    </button>
  );
};

export default Button;
