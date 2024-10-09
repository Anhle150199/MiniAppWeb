import Breadcrumb from "@/components/Common/Breadcrumb";
import { GuidGenerator } from "@/components/GuidGenerator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is About page description",
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
