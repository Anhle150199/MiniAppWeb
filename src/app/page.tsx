import ScrollUp from "@/components/Common/ScrollUp";
import ToolsList from "@/components/ToolsList";
import { ToolsInfoData } from "@/mocks/toolsInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MiniToolHub - Free Online Tools for Every Task",
  description:
    "MiniToolHub offers a wide range of free online tools to simplify your daily tasks. From generating GUIDs to calculating age or creating secure passwords, explore powerful, easy-to-use utilities all in one place. Fast, reliable, and always accessible.",
  robots: "index, follow",
  keywords:
    "online tools, GUID generator, password generator, free online generators, secure password creator, unique identifier generator, random string generator",
};

export default function Home() {
  // const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      {/* <ToolsList /> */}
      <section
        className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
      >
        <div className="container">
          {Object.keys(ToolsInfoData).map((key: string, index: number) => (
            <ToolsList key={index} ToolsInfoGroup={ToolsInfoData[key]}  />
          ))}
        </div>
      </section>
    </main>
  );
}
