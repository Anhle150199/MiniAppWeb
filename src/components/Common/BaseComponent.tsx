import { ButtonHTMLAttributes } from "react";
import { Tooltip } from "react-tooltip"
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  tooltipContent?: string;
  tooltipId?: string;
  loading?: boolean;
  onClick: () => void;
}

export const Button = ({ className, loading, onClick, tooltipContent, tooltipId, value, ...props }: ButtonProps) => {
  return <button
    disabled={loading}
    {...(tooltipId ? { "data-tooltip-id": tooltipId } : {})}
    {...(tooltipContent ? { "data-tooltip-content": tooltipContent } : {})}
    className={`z-20 inline-flex items-center text-sm justify-center rounded-lg bg-primary p-2 text-center font-medium text-white duration-300 disabled:bg-primary/50 hover:bg-primary/70 ${className ?? ""}`}
    onClick={onClick}
    {...props}
  >
    <span>{loading ? "Loading..." : value}</span>
    {tooltipId && <Tooltip id={tooltipId} place="top" className="z-50" />}
  </button>
}