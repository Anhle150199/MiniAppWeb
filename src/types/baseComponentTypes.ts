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
  robots?: string ;
}


export type ToolsInfoDataType = {
  GeneratorTools: GeneratorToolsType;
  TextTools: TextToolsType
}

export type GeneratorToolsType = {
  GuidGenerator: ToolInfomation;
}

export type TextToolsType = {

  TextFormatter: ToolInfomation;
  ToSlug: ToolInfomation;
}