import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  tooltipContent?: string;
  tooltipId?: string;
  loading?: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}
export interface ObjectCommon {
  [key: string] : string;
}

export interface ToolInfomation {
  id: number;
  name: string;
  summary: string;
  image: string;
  title: string;
  link: string;
  pageName: string;
  description: string;
  keywords: string[];
  robots?: string;
  markdown?: string;
}

export interface ToolCategory {
  Name: string;
  Tools: { [key: string]: ToolInfomation };
}

export interface ToolsInfoDataType {
  [category: string]: ToolCategory;
}

export type Text2SlugParams = {
  text: string;
  typeCase: number;
  isMultipleLine: boolean
}