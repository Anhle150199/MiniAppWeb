import Breadcrumb from "@/components/Common/Breadcrumb";
import { TextConvertter } from "@/components/Tools/TextConverter";
import { TextToolFunction } from "@/utils/clientHelper";
import { Metadata } from "next";
const path = `${process.env.NEXT_PUBLIC_CURRENT_DOMAIN}/text-tools/text-to-url-slug-converter`;
const title = `Convert Text To URL Slug - ${process.env.NEXT_PUBLIC_NAME}`;

export const metadata: Metadata = {
  title: title,
  description: `Easily transform any text into an SEO-friendly URL slug on ${process.env.NEXT_PUBLIC_NAME}. This free, online slug generator is perfect for web developers, content creators, and SEO specialists who want clean, readable, and optimized URLs for websites and blogs.`,
  keywords: [
    'URL slug generator', 
    'text to URL slug', 
    'slug converter', 
    'SEO-friendly URL', 
    'URL slug tool', 
    'text to URL converter', 
    'slug creation tool', 
    'online URL slug generator', 
    'URL optimization', 
    'URL text converter'
  ],
    alternates: {
    canonical: path,
  },
  robots: "index, follow",
  openGraph: {
    type: 'website',
    url: path,
    title: `Convert Text To URL Slug - Free Online URL Slug Generator - ${process.env.NEXT_PUBLIC_NAME}`,
    description: `Easily transform any text into an SEO-friendly URL slug on ${process.env.NEXT_PUBLIC_NAME}. This free, online slug generator is perfect for web developers, content creators, and SEO specialists who want clean, readable, and optimized URLs for websites and blogs.`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CURRENT_DOMAIN}/images/logo/url-slug-converter.webp`,
        width: 1200,
        height: 630,
        alt: 'Convert Text To URL Slug - Free Online URL Slug Generator',
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": title,
  "url": path,
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web",
  "description": metadata.description,
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  }
}
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
