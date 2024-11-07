import Breadcrumb from "@/components/Common/Breadcrumb";
import { TextConvertter } from "@/components/Tools/TextConverter";
import { ToolsInfoData } from "@/mocks/toolsInfo";
import { ToolInfomation } from "@/types/baseComponentTypes";
import { TextToolFunction } from "@/utils/clientHelper";
import { GenerateStructuredData } from "@/utils/serverHelper";
import { Metadata } from "next";
const Text2SlugInfo = ToolsInfoData.TextTools.ToSlug;
const path = process.env.NEXT_PUBLIC_CURRENT_DOMAIN+Text2SlugInfo.link;
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
export const metadata: Metadata = GenerateMetadata(Text2SlugInfo);
const structuredData = GenerateStructuredData({
  title: Text2SlugInfo.title,
  path,
  description: metadata.description ?? "",
  applicationCategory: "UtilityApplication"
})

debugger
const URLSlugConverterPage = () => {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Breadcrumb pageName="Text To URL Slug Converter" parentPage="Text Tools" pageDescription={metadata.description} />
      <TextConvertter  functionHandler = {TextToolFunction.Text2Slug}/>
    </main>
  );
};

export default URLSlugConverterPage;
