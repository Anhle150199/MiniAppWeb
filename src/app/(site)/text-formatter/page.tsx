import Breadcrumb from "@/components/Common/Breadcrumb";
import { TextFormatter } from "@/components/Tools/TextFormatter";
import { ToolsInfoData } from "@/mocks/toolsInfo";
import { ToolInfomation } from "@/types/baseComponentTypes";
import { GenerateStructuredData } from "@/utils/serverHelper";
import { Metadata } from "next";
const TextFormatterInfo = ToolsInfoData.TextTools.TextFormatter;
const path = process.env.NEXT_PUBLIC_CURRENT_DOMAIN+TextFormatterInfo.link;
const GenerateMetadata = (toolInfo: ToolInfomation) => {
  return {
    title: toolInfo.title,
    description: toolInfo.description,
    keywords: toolInfo.keywords,
    alternates: {
      canonical: path,
    },
    robots: toolInfo.robots ?? "index, follow",
    openGraph: {
      type: 'website',
      url: path,
      title: toolInfo.title,
      description: toolInfo.description,
      images: [
        {
          url: process.env.NEXT_PUBLIC_CURRENT_DOMAIN + toolInfo.image,
          width: 1200,
          height: 630,
          alt: toolInfo.title,
        },
      ],
    },

  }
}

export const metadata: Metadata = GenerateMetadata(TextFormatterInfo);

const structuredData = GenerateStructuredData({
  title: TextFormatterInfo.title,
  path,
  description: metadata.description ?? "",
  applicationCategory: "UtilityApplication"
})

const TextFormatterPage = () => {
  return (
    <main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Breadcrumb pageName={TextFormatterInfo.pageName} />
      <TextFormatter />
    </main>
  );
};

export default TextFormatterPage;
