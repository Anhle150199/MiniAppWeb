"use client"
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const GuidGenerator = () => {
  const [numberGuid, setNumberGuid] = useState<number>(1);
  const [options, setOptions] = useState({
    Hyphens: true,
    Braces: false,
    Uppercase: false,
    Quotes: false,
    Commas: false
  })
  const [guidsList, setGuidsList] = useState<string[]>([])
  const generateGuids = () => {
    let guids: string[] = [];
    for (let index = 0; index < numberGuid; index++) {
      guids.push(uuidv4());
      if (!options.Hyphens) {
        guids[index] = guids[index]?.replaceAll('-', '');
      }
      if (options.Braces) {
        guids[index] = `{${guids[index]}}`;
      }
      else if (options.Quotes) {
        guids[index] = `"${guids[index]}"`;
      }
      if (options.Commas) {
        guids[index] = guids[index] + ",";
      }
      if (options.Uppercase) {
        guids[index] = guids[index]?.toUpperCase();
      }
    }
    setGuidsList(guids);
    console.log(guids);
  }
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("Text copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  }
  const copyAllGuids = () => {
    copyToClipboard(guidsList.join('\n'));
  }

  useEffect(() => {
    generateGuids();
  }, [])
  return (
    <section
      id="GuidGenerator"
      className="bg-gray-1 pb-8 pt-2 dark:bg-dark-2 lg:pb-[70px] lg:pt-[30px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-start mb-10">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[20px] sm:leading-[1.2]">
                  Bulk GUID Generation.
                </h1>
                <div>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-2/3">
                      <label className="block text-gray-500 font-bold md:text-start mb-1 md:mb-0 pr-4" htmlFor="guid-number">
                        How many GUIDs do you want (1-1000):
                      </label>
                    </div>
                    <div className="md:w-1/3">
                      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="guid-number"
                        type="number"
                        value={numberGuid}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNumberGuid(parseInt(event.target.value))} />
                    </div>
                  </div>
                  <div className=" mb-6">
                    <div className="md:w-1/6">
                      <label className="block text-gray-500 font-bold md:text-start mb-1 md:mb-0 pr-4" htmlFor="guid-number">Format:</label>
                    </div>
                    <div className="w-full flex flex-wrap items-center">
                      <div className="flex  justify-start m-2 items-center ">
                        <input id="Hyphens" type="checkbox" className="w-4 h-4 text-blue-800 focus:ring-red-500 focus:ring-2"
                          checked={options.Hyphens} onChange={() => setOptions({ ...options, Hyphens: !options.Hyphens })} />
                        <label htmlFor="Hyphens" className="ms-2 text-sm font-medium">Hyphens</label>
                      </div>
                      <div className="flex justify-start m-2 items-center">
                        <input id="Braces" type="checkbox" className="w-4 h-4 text-blue-800 focus:ring-red-500 focus:ring-2"
                          checked={options.Braces} onChange={() => setOptions({ ...options, Braces: !options.Braces })} />
                        <label htmlFor="Braces" className="ms-2 text-sm font-medium">{`{} Braces`}</label>
                      </div>
                      <div className="flex justify-start m-2 items-center">
                        <input id="Uppercase" type="checkbox" className="w-4 h-4 text-blue-800 focus:ring-red-500 focus:ring-2"
                          checked={options.Uppercase} onChange={() => setOptions({ ...options, Uppercase: !options.Uppercase })} />
                        <label htmlFor="Uppercase" className="ms-2 text-sm font-medium">Uppercase</label>
                      </div>
                      <div className="flex justify-start m-2 items-center">
                        <input id="Quotes" type="checkbox" className="w-4 h-4 text-blue-800 focus:ring-red-500 focus:ring-2"
                          checked={options.Quotes} onChange={() => setOptions({ ...options, Quotes: !options.Quotes })} />
                        <label htmlFor="Quotes" className="ms-2 text-sm font-medium">{`" " Quotes`}</label>
                      </div>
                      <div className="flex justify-start m-2 items-center">
                        <input id="Commas" type="checkbox" className="w-4 h-4 text-blue-800 focus:ring-red-500 focus:ring-2"
                          checked={options.Commas} onChange={() => setOptions({ ...options, Commas: !options.Commas })} />
                        <label htmlFor="Commas" className="ms-2 text-sm font-medium">{`, Commas`}</label>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={generateGuids}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white duration-300 hover:bg-primary/70"
                >
                  Generate GUIDs
                </button>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full flex gap-1 px-2  sm:px-4 lg:px-2 xl:px-4 mb-2">
                  <button
                    onClick={copyAllGuids}
                    className="inline-flex gap-1 items-center w-1/2 justify-center rounded-md bg-primary px-7 py-2 text-center text-base font-medium text-white duration-300 hover:bg-primary/70"
                  >
                    <i className="bi bi-copy"></i><span>Copy All</span>
                  </button>

                  <button
                    className="inline-flex items-center gap-1 w-1/2 justify-center rounded-md bg-primary px-7 py-2 text-center text-base font-medium text-white duration-300 hover:bg-primary/70"
                  >
                    <i className="bi bi-cloud-download"></i> <span>Download file</span>
                  </button>
                </div>
                <div className="w-full flex flex-col gap-1 px-2 sm:px-4 lg:px-2 xl:px-4 py-2 max-h-52 rounded-md overflow-auto bg-slate-300">
                  {guidsList.map((guid) => (<div key={guid} className="flex items-center gap-2 p-1 rounded-md hover:bg-white" onClick={() => { copyToClipboard(guid) }}>
                    <i className="bi bi-copy cursor-pointer p-1 px-2 rounded-md hover:bg-slate-300 "  ></i>
                    <span>{guid}</span>
                  </div>))}

                </div>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap items-start mt-10">
            <div className="w-full px-4 mb-12 max-w-[540px] lg:mb-0">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[20px] sm:leading-[1.2]">

                GUID checker</h1>
              <div className="w-full flex gap-3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="guid-checker"
                  type="text"
                  placeholder="Enter GUID here"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {

                  }} />
                <button
                  onClick={generateGuids}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-2 text-center text-base font-medium text-white duration-300 hover:bg-primary/70"
                >
                  Check
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

