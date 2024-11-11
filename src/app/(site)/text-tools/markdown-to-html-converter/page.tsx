
import Breadcrumb from "@/components/Common/Breadcrumb";
import PostMarkdown from "@/components/Common/PostMarkdown";
import { Markdown2HTMLConverter } from "@/components/Tools/TextConverter/markdown2HTML";
import { ToolsInfoData } from "@/mocks/toolsInfo";
import { ToolInfomation } from "@/types/baseComponentTypes";
import { getMarkdownPostByPath } from "@/utils/markdown";
import { Metadata } from "next";
const ToolInfoData = ToolsInfoData.TextTools.Tools.MarkdownToHTML;
const path = process.env.NEXT_PUBLIC_CURRENT_DOMAIN + ToolInfoData.link;
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
const GenerateStructuredData = async ({ title, path, description, applicationCategory }: { title: string, path: string, description: string, applicationCategory?: string }) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": title,
    "url": path,
    "applicationCategory": applicationCategory ?? "UtilityApplication",
    "operatingSystem": "Web",
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    }
  }
}

export const metadata: Metadata = GenerateMetadata(ToolInfoData);
const structuredData = GenerateStructuredData({
  title: ToolInfoData.title,
  path,
  description: metadata.description ?? "",
  applicationCategory: "UtilityApplication"
})


const HtmlConverterPage = () => {
  const post = getMarkdownPostByPath(ToolInfoData.markdown);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Breadcrumb pageName={ToolInfoData.pageName} parentPage={ToolsInfoData.TextTools.Name} pageDescription={metadata.description} />
      <Markdown2HTMLConverter  />
      <PostMarkdown content={post ?? ""} />
    </main>
  );
};

export default HtmlConverterPage;
