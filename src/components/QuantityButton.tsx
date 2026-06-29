import type { ButtonHTMLAttributes, ReactNode } from "react";

interface QuantityButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const QuantityButton = ({ children, ...props }: QuantityButtonProps) => {
  return (
    <button
      {...props}
      className="
        w-10
        h-10
        rounded-lg
        bg-green-600
        hover:bg-green-700
        active:scale-95
        text-white
        font-bold
        text-xl
        transition-all
        duration-200
        disabled:bg-gray-400
        disabled:cursor-not-allowed
      "
    >
      {children}
    </button>
  );
};

export default QuantityButton;
