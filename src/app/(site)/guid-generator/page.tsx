import Breadcrumb from "@/components/Common/Breadcrumb";
import { GuidGenerator } from "@/components/Tools/GuidGenerator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Bulk GUID Generator and Validator - Create Unique Identifiers',
  description: 'Generate and validate GUIDs (Globally Unique Identifiers) with customizable options. Learn more about GUIDs, their uniqueness, and their uses in software development.',
  keywords: ['guid', 'uuid','GUID generator', 'UUID generator', 'bulk GUID generation', 'GUID validator', 'Globally Unique Identifier', 'generate GUIDs online', 'validate GUIDs'],
  // alternates: {
  //   canonical: `${process.env.NEXTAUTH_URL}/guid-generator`,
  // },  
  robots: "index, follow"

  // openGraph: {
  //   type: 'website',
  //   url: 'https://yourdomain.com/guid-generator',
  //   title: 'Bulk GUID Generator and Validator',
  //   description: 'Easily generate and validate GUIDs online. Customize GUIDs with hyphens, braces, and more.',
  //   images: [
  //     {
  //       url: 'https://yourdomain.com/images/guid-generator-og-image.jpg',
  //       width: 1200,
  //       height: 630,
  //       alt: 'Bulk GUID Generator and Validator',
  //     },
  //   ],
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   site: '@YourTwitterHandle',
  //   title: 'Bulk GUID Generator and Validator',
  //   description: 'Easily generate and validate GUIDs online. Customize GUIDs with hyphens, braces, and more.',
  //   images: ['https://yourdomain.com/images/guid-generator-twitter-image.jpg'],
  // },
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Free Online GUID Generator Tool" />
      <GuidGenerator />
    </main>
  );
};

export default AboutPage;
