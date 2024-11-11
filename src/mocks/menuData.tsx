import { Menu } from "@/types/menu";
import { ToolsInfoData } from "./toolsInfo";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: ToolsInfoData.GeneratorTools.Name,
    newTab: false,
    submenu: [
      {
        id: ToolsInfoData.GeneratorTools.Tools.GuidGenerator.id,
        title: ToolsInfoData.GeneratorTools.Tools.GuidGenerator.name,
        path: ToolsInfoData.GeneratorTools.Tools.GuidGenerator.link,
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: ToolsInfoData.TextTools.Name,
    newTab: false,
    submenu: [
      {
        id: ToolsInfoData.TextTools.Tools.TextFormatter.id,
        title: ToolsInfoData.TextTools.Tools.TextFormatter.name,
        path: ToolsInfoData.TextTools.Tools.TextFormatter.link,
        newTab: false,
      },
      {
        id: ToolsInfoData.TextTools.Tools.ToSlug.id,
        title: ToolsInfoData.TextTools.Tools.ToSlug.name,
        path: ToolsInfoData.TextTools.Tools.ToSlug.link,
        newTab: false,
      },
      {
        id: ToolsInfoData.TextTools.Tools.MarkdownToHTML.id,
        title: ToolsInfoData.TextTools.Tools.MarkdownToHTML.name,
        path: ToolsInfoData.TextTools.Tools.MarkdownToHTML.link,
        newTab: false,
      },
    ],
  },
  {
    id: 999,
    title: "About",
    path: "/about",
    newTab: false,
  },
];
export default menuData;
