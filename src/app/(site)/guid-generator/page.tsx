import Breadcrumb from "@/components/Common/Breadcrumb";
import { GuidGenerator } from "@/components/Tools/GuidGenerator";
import { ToolsInfoData } from "@/mocks/toolsInfo";
import { ToolInfomation } from "@/types/baseComponentTypes";
import { GenerateStructuredData } from "@/utils/serverHelper";
import { Metadata } from "next";
const GuidGeneratorInfo = ToolsInfoData.GeneratorTools.GuidGenerator;
const path = process.env.NEXT_PUBLIC_CURRENT_DOMAIN + GuidGeneratorInfo.link;

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

export const metadata: Metadata = GenerateMetadata(GuidGeneratorInfo);

const AboutPage = () => {
  const structuredData = GenerateStructuredData({
    title: GuidGeneratorInfo.title,
    path,
    description: metadata.description ?? "",
    applicationCategory: "SecurityApplication"
  })
  return (
    <main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Breadcrumb pageName={GuidGeneratorInfo.pageName} pageDescription={""} />
      <GuidGenerator />
    </main>
  );
};

export default AboutPage;
