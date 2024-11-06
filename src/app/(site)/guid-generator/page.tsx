import Breadcrumb from "@/components/Common/Breadcrumb";
import { GuidGenerator } from "@/components/Tools/GuidGenerator";
import { ToolsInfoData } from "@/mocks/toolsInfo";
import { GenerateStructuredData } from "@/utils/serverHelper";
import { Metadata } from "next";
const GuidGeneratorInfo = ToolsInfoData.GeneratorTools.GuidGenerator
const path = `${process.env.NEXT_PUBLIC_CURRENT_DOMAIN}${GuidGeneratorInfo.link}`;

export const metadata: Metadata = {
  title: GuidGeneratorInfo.title,
  keywords: ['guid', 'uuid', 'GUID generator', 'guid gen', 'uuid gen', 'UUID generator', 'guid creator', 'uuid creator', 'bulk GUID generation', 'uuid guid generator', 'GUID validator', 'Globally Unique Identifier', 'generate GUIDs online', 'validate GUIDs'],
  alternates: {
    canonical: path,
  },
  robots: "index, follow",
  openGraph: {
    type: 'website',
    url: path,
    title: GuidGeneratorInfo.title,
    description: 'Easily generate and validate GUIDs online. Customize GUIDs with hyphens, braces, and more.',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CURRENT_DOMAIN}/images/logo/guid-generator.webp`,
        width: 1200,
        height: 630,
        alt: GuidGeneratorInfo.title,
      },
    ],
  },
};

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
      <Breadcrumb pageName={GuidGeneratorInfo.pageName} />
      <GuidGenerator />
    </main>
  );
};

export default AboutPage;
