import Breadcrumb from "@/components/Common/Breadcrumb";
import { TextFormatter } from "@/components/Tools/TextFormatter";
import { Metadata } from "next";
const path = `${process.env.NEXT_PUBLIC_CURRENT_DOMAIN}/text-formatter`;
const title = "Text Formatter - Free Online Text Editing and Formatting Tool";
export const metadata: Metadata = {
  title: title,
  description: `Discover Text Formatter on ${process.env.NEXT_PUBLIC_NAME} - your free, online text editing tool designed for easy text formatting. Quickly convert text to uppercase, lowercase, capitalize sentences, remove extra spaces, and count words. Perfect for writers, students, and professionals who need fast, reliable text editing. Try Text Formatter today to simplify your text formatting needs!`,
  keywords: ['text formatter', 'text editing tool', 'uppercase converter', 'lowercase converter', 'capitalize sentences', 'text cleaner', 'online text formatting', 'text tools'],
  alternates: {
    canonical: path,
  },
  robots: "index, follow",
  openGraph: {
    type: 'website',
    url: path,
    title: 'Text Formatter - Free Online Text Editing and Formatting Tool',
    description: 'Edit and format text online easily with Text Formatter. Convert cases, remove extra spaces, and count words – perfect for all your text needs!',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CURRENT_DOMAIN}/images/logo/text-formatter.webp`,
        width: 1200,
        height: 630,
        alt: 'Text Formatter - Free Online Text Editing and Formatting Tool',
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

const AboutPage = () => {
  return (
    <main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Breadcrumb pageName="Free Text Formatter Tool" />
      <TextFormatter />
    </main>
  );
};

export default AboutPage;
