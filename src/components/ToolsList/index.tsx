import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTool from "./SingleTool";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "GUID Generator",
    designation: "Fast and free bulk GUID generator and validator for all your needs",
    image: "/images/logo/guid-generator.webp",
    link: "/guid-generator"
  },
  {
    id: 2,
    name: "Text Formatter ",
    designation: "Free online tool for quick text formatting, case conversion, and cleanup.",
    image: "/images/logo/text-formatter.webp",
    link: "/text-formatter"
  }
];

const ToolsList = () => {
  return (
    <section
      id="ToolsList"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            title="Quick Tools for Every Need"
            paragraph="Get quick access to essential tools that streamline your tasks. Fast, easy-to-use, and accessible anytime you need them."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTool key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsList;
