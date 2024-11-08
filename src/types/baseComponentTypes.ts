import { ButtonHTMLAttributes, TextareaHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  tooltipContent?: string;
  tooltipId?: string;
  loading?: boolean;
  onClick: () => void;
  children?: React.ReactNode;
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


export type ToolsInfoDataType = {
  GeneratorTools: GeneratorToolsType;
  TextTools: TextToolsType
}

export type GeneratorToolsType = {
  GuidGenerator: ToolInfomation;
  name: string;
}

export type TextToolsType = {
  name: string;
  TextFormatter: ToolInfomation;
  ToSlug: ToolInfomation;
}
export type Text2SlugParams = {
  text: string;
  typeCase: number;
  isMultipleLine: boolean
}