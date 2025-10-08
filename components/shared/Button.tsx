// components/CtaButton.tsx
import React from "react";
import clsx from "clsx";

type Variant = "bold" | "outline" | "ghost";
type Theme = "white" | "black" | "primary" | "secondary" | "accent";

interface CtaButtonProps {
  title?: string;
  icon?: React.ReactNode;
  variant?: Variant;
  theme?: Theme;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<CtaButtonProps> = ({
  title,
  icon,
  variant = "bold",
  theme = "black",
  onClick,
  className = "",
  disabled = false,
}) => {
  const base =
    "flex items-center gap-2 !px-4 !py-2 rounded-full transition-colors duration-200 !font-medium text-base cursor-pointer";

  const themeColors: Record<Theme, { bg: string; text: string; border: string }> = {
    white: {
      bg: "bg-white",
      text: "text-black",
      border: "border border-gray-300",
    },
    black: {
      bg: "bg-black",
      text: "text-white",
      border: "border border-black",
    },
    primary: {
      bg: "bg-[#162D3E]",
      text: "text-white",
      border: "border border-[#162D3E]",
    },
    secondary: {
      bg: "bg-[#E98A10]",
      text: "text-white",
      border: "border border-[#E98A10]",
    },
    accent: {
      bg: "bg-[#f6f6f6]",
      text: "text-black",
      border: "border border-[#f6f6f6]",
    },
  };

  const { bg, text, border } = themeColors[theme];

  const variants: Record<Variant, string> = {
    bold: `${bg} ${text} shadow hover:opacity-90`,
    outline: `${border} ${text} bg-transparent hover:bg-gray-100`,
    ghost: `bg-transparent ${text} hover:bg-gray-100`,
  };

  return (
    <button disabled={disabled} onClick={onClick} className={clsx(base, variants[variant], className)}>
      {icon && <span className="flex items-center">{icon}</span>}
      <span>{title}</span>
    </button>
  );
};

export default Button;
