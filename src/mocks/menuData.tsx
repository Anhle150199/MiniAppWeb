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
    title: ToolsInfoData.GeneratorTools.name,
    newTab: false,
    submenu: [
      {
        id: ToolsInfoData.GeneratorTools.GuidGenerator.id,
        title: ToolsInfoData.GeneratorTools.GuidGenerator.name,
        path: ToolsInfoData.GeneratorTools.GuidGenerator.link,
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: ToolsInfoData.TextTools.name,
    newTab: false,
    submenu: [
      {
        id: ToolsInfoData.TextTools.TextFormatter.id,
        title: ToolsInfoData.TextTools.TextFormatter.name,
        path: ToolsInfoData.TextTools.TextFormatter.link,
        newTab: false,
      },
      {
        id: ToolsInfoData.TextTools.ToSlug.id,
        title: ToolsInfoData.TextTools.ToSlug.name,
        path: ToolsInfoData.TextTools.ToSlug.link,
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
