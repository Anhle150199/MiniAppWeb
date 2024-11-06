import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 7,
    title: "Tools",
    newTab: false,
    submenu: [
      {
        id: 71,
        title: "GUID Generator",
        path: "/guid-generator",
        newTab: false,
      },
      {
        id: 72,
        title: "Text Formatter",
        path: "/text-formatter",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
];
export default menuData;
