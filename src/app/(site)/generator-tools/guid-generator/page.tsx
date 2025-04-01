import Breadcrumb from "@/components/Common/Breadcrumb";
import { GuidGenerator } from "@/components/Tools/GuidGenerator";
import { ToolsInfoData } from "@/mocks/toolsInfo";
import { ToolInfomation } from "@/types/baseComponentTypes";
import { Metadata } from "next";
const GuidGeneratorInfo = ToolsInfoData.GeneratorTools.Tools.GuidGenerator;
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
      type: "website",
      url: path,
      title: toolInfo.title,
      description: toolInfo.description,
      siteName: process.env.NEXT_PUBLIC_NAME,
      images: [
        {
          url: process.env.NEXT_PUBLIC_CURRENT_DOMAIN + toolInfo.image,
          width: 1200,
          height: 630,
          alt: toolInfo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      // site: "@your_twitter_handle", // Thay bằng Twitter của bạn nếu có
      title: toolInfo.title,
      description: toolInfo.description,
      image: process.env.NEXT_PUBLIC_CURRENT_DOMAIN + toolInfo.image,
    },
  };
};

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
