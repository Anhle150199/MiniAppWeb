import Breadcrumb from "@/components/Common/Breadcrumb";
import Terms from "@/components/Terms";
import { Metadata } from "next";
const path = `${process.env.NEXT_PUBLIC_CURRENT_DOMAIN}/terms`;
const title = "MiniToolHub - Terms of Service ";
export const metadata: Metadata = {
  title: title,
  alternates: {
    canonical: path,
  },
  robots: "noindex, follow",
};

const TermsPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Terms of Service" />
      <Terms />
    </main>
  );
};

export default TermsPage;
