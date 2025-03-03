import Link from "next/link";

const ToolsList = ({ ToolsInfoGroup }: { ToolsInfoGroup: any }) => {
  return (
    <div className="mb-[60px]">
      <div className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-2xl md:text-[30px] md:leading-[1.2]">
        <h1>{ToolsInfoGroup.Name}</h1>
      </div>
      <div className="-mx-4 grid gap-4 px-4 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {Object.keys(ToolsInfoGroup.Tools).map(
          (keyTool: string, index: number) => {
            const toolInfo = ToolsInfoGroup.Tools[keyTool];
            return (
                <Link href={toolInfo.link} key={toolInfo.id}>
                  <div className="h-full border-spacing-1 cursor-pointer rounded-xl bg-primary/80 px-3 py-4 text-lg font-bold text-white shadow-4 hover:bg-primary">
                    <span>{toolInfo.name}</span>
                    <p className="mt-2 text-sm font-light">
                      {toolInfo.summary}
                    </p>
                  </div>
                </Link>
            );
          },
        )}
      </div>
    </div>
  );
};

export default ToolsList;
