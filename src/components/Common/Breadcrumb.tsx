import Link from "next/link";

const Breadcrumb = ({
  pageName,
  parentPage,
  pageDescription,
  parentPageURL
}: {
  pageName: string;
  parentPage?: string;
  parentPageURL?: string;
  pageDescription?: string|null|undefined;
}) => {
  return (
    <>
      <div className="dark:bg-dark relative z-10 overflow-hidden pb-[30px] pt-[70px] md:pt-[80px] lg:pt-[90px]">
        <div className="from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3 absolute bottom-0 left-0 h-px w-full bg-gradient-to-r"></div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-3">
              <div className="text-center">
                <h1 className="text-dark mb-2 text-2xl font-bold dark:text-white sm:text-2xl md:text-[35px] md:leading-[1.2]">
                  {pageName}
                </h1>
                {pageDescription &&<p className="text-body-color dark:text-dark-6 mb-5 text-base">
                  {pageDescription}
                </p>}

                <ul className="flex items-center justify-center gap-[10px]">
                  <li>
                    <Link
                      href="/"
                      className="text-dark flex items-center gap-[10px] text-base font-medium dark:text-white"
                    >
                      Home
                    </Link>
                  </li>
                  {parentPage && <li>
                    <Link
                      href={parentPageURL ? "/" + parentPageURL : "/"}
                      className="text-dark flex items-center gap-[10px] text-base font-medium dark:text-white"
                    >
                    {" "}
                    /{" "}
                      {parentPage}
                    </Link>
                  </li>}
                  <li>
                    <p className="text-body-color flex items-center gap-[10px] text-base font-medium">
                      <span className="text-body-color dark:text-dark-6">
                        {" "}
                        /{" "}
                      </span>
                      {pageName}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
