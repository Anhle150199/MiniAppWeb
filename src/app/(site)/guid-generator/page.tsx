import Breadcrumb from "@/components/Common/Breadcrumb";
import { GuidGenerator } from "@/components/Tools/GuidGenerator";
import { Metadata } from "next";
const path = `${process.env.NEXT_PUBLIC_CURRENT_DOMAIN}/guid-generator`;
const title = "Free GUID/UUID Generator and Validator Online  - Create Unique Identifiers";
export const metadata: Metadata = {
  title: title,
  description: 'Generate and validate GUIDs (Globally Unique Identifiers) with customizable options. Learn more about GUIDs, their uniqueness, and their uses in software development.',
  keywords: ['guid', 'uuid', 'GUID generator', 'UUID generator', 'bulk GUID generation', 'GUID validator', 'Globally Unique Identifier', 'generate GUIDs online', 'validate GUIDs'],
  alternates: {
    canonical: path,
  },
  robots: "index, follow",
  openGraph: {
    type: 'website',
    url: path,
    title: title,
    description: 'Easily generate and validate GUIDs online. Customize GUIDs with hyphens, braces, and more.',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CURRENT_DOMAIN}/images/logo/guid-generator.webp`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
};
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": title,
  "url": path,
  "applicationCategory": "SecurityApplication",
  "operatingSystem": "Web",
  "description": metadata.description,
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  }
}

const AboutPage = () => {
  return (
    <main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Breadcrumb pageName="Free Online GUID Generator Tool" />
      <GuidGenerator />
    </main>
  );
};

export default AboutPage;
