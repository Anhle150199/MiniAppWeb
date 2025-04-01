import Breadcrumb from "@/components/Common/Breadcrumb";
import PostMarkdown from "@/components/Common/PostMarkdown";
import { Text2SlugConvertter } from "@/components/Tools/TextConverter/text2Slug";
import { ToolsInfoData } from "@/mocks/toolsInfo";
import { ToolInfomation } from "@/types/baseComponentTypes";
import { Text2Slug } from "@/utils/clientHelper";
import { getMarkdownPostByPath } from "@/utils/markdown";
import { Metadata } from "next";
const Text2SlugInfo = ToolsInfoData.TextTools.Tools.ToSlug;
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
const GenerateStructuredData = async ({ title, path, description, applicationCategory }: { title: string, path: string, description: string, applicationCategory?: string })=> {
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

export const metadata: Metadata = GenerateMetadata(Text2SlugInfo);
const structuredData = GenerateStructuredData({
  title: Text2SlugInfo.title,
  path,
  description: metadata.description ?? "",
  applicationCategory: "UtilityApplication"
})

const URLSlugConverterPage = () => {
  const post =  getMarkdownPostByPath(Text2SlugInfo.markdown);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Breadcrumb pageName={Text2SlugInfo.pageName} parentPage={ToolsInfoData.TextTools.Name} pageDescription={metadata.description} />
      <Text2SlugConvertter  functionHandler = {Text2Slug}/>
      <PostMarkdown content={post ?? ""} />
    </main>
  );
};

export default URLSlugConverterPage;
