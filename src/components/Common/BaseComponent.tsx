import { ButtonProps } from "@/types/baseComponentTypes"
import { TextareaHTMLAttributes } from "react"
import { Tooltip } from "react-tooltip"

export const Button = ({ className, loading, onClick, tooltipContent, tooltipId, value, children, ...props }: ButtonProps) => {
  return <button
    disabled={loading}
    {...(tooltipId ? { "data-tooltip-id": tooltipId } : {})}
    {...(tooltipContent ? { "data-tooltip-content": tooltipContent } : {})}
    className={`z-10 inline-flex items-center text-sm justify-center rounded-lg bg-primary p-2 text-center font-medium text-white duration-300 disabled:bg-primary/50 hover:bg-primary/70 ${className ?? ""}`}
    onClick={onClick}
    {...props}
  >
    <span>{loading ? "Loading..." : (value ?? children)}</span>
    {tooltipId && <Tooltip id={tooltipId} place="top" className="z-50" />}
  </button>
}

export const TextArea = ({ className, onChange, value, placeholder, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (<textarea value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full min-h-52 p-2 px-2 sm:px-4 lg:px-2 xl:px-4 py-2 rounded-lg overflow-auto border-2 border-gray-300 ${className ?? ''}`}
    {...props}
    ></textarea>
  )
}