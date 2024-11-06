import { ButtonHTMLAttributes, TextareaHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  tooltipContent?: string;
  tooltipId?: string;
  loading?: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}