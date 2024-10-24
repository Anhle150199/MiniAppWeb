import Breadcrumb from "@/components/Common/Breadcrumb";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import { Metadata } from "next";
const path = `${process.env.NEXT_PUBLIC_CURRENT_DOMAIN}/privacy-policy`;
const title = "MiniToolHub - Privacy Policy";
export const metadata: Metadata = {
  title: title,
  alternates: {
    canonical: path,
  },
  robots: "noindex, follow",
};

const PrivacyPolicyPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Privacy Policy" />
      <PrivacyPolicy />
    </main>
  );
};

export default PrivacyPolicyPage;
