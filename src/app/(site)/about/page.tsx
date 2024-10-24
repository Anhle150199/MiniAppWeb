import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
const path = `${process.env.NEXT_PUBLIC_CURRENT_DOMAIN}/about`;
const title = "MiniToolHub - About ";
export const metadata: Metadata = {
  title: title,
  alternates: {
    canonical: path,
  },
  robots: "noindex, follow",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About MiniToolHub" />
      <About />
    </main>
  );
};

export default AboutPage;
