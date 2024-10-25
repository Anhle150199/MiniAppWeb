"use client"
import { useState, useEffect, Fragment } from "react";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import toast from "react-hot-toast";
import { copyToClipboard } from "@/utils/helper";


const tooltips = {
};

export const GuidGenerator = () => {
  // states
  const [textVersion, setTextVersion] = useState<string[]>([]);
  const [options, setOptions] = useState({
  })

  // functions
  const onChangeInputNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextVersion(prev=>([
      ...prev,
      event.target.value
    ]))
  }

  const handleCheckboxChange = (key: string) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [key]: !prevOptions[key as keyof typeof prevOptions],
    }));
  };

  const copyAllGuids = () => {
    copyToClipboard("");
  }
  const downloadTxtFile = () => {
    const fileContent = textVersion[textVersion.length];
    const fileName = `FomattedText.txt`;
    const blob = new Blob([fileContent], { type: "text/plain" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();

    URL.revokeObjectURL(url);
    document.body.removeChild(link);
  }

  return (
    <section
      id="GuidGenerator"
      className="bg-gray-1 pb-8 pt-2 dark:bg-dark-2 lg:pb-[70px] lg:pt-[20px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-start mb-10">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h1 className="mb-3 text-lg font-bold leading-tight text-dark dark:text-white sm:text-[20px] sm:leading-[1.2]">
                  Bulk GUID Generation.
                </h1>
                <div>
                  <div className="md:flex md:items-center ">
                    <div className="md:w-2/3">
                      <label className="block text-gray-500 font-bold md:text-start mb-1 md:mb-0 pr-4" htmlFor="guid-number">
                        How many GUIDs do you want (1-1000):
                      </label>
                    </div>
                    <div className="md:w-1/3">
                      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="guid-number"
                        type="number"
                        min={0}
                        max={1000}
                        value={numberGuid}
                        onChange={onChangeInputNumber} />
                    </div>
                  </div>
                  <div className=" mb-6">
                    <div className="md:w-1/6">
                      <label className="block text-gray-500 font-bold md:text-start mb-1 md:mb-0 pr-4" htmlFor="guid-number">Format:</label>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.keys(options).map((key) => (
                        <label key={key} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            id={key}
                            type="checkbox"
                            className="h-4 w-4 text-blue-800 focus:ring-2 focus:ring-red-500"
                            checked={options[key as keyof typeof options]}
                            onChange={() =>handleCheckboxChange(key)}
                            data-tooltip-id={`guid-tooltip${key}`}
                            data-tooltip-content={tooltips[key as keyof typeof tooltips]}
                          />
                          <span className="text-sm font-medium"
                            data-tooltip-id={`guid-tooltip${key}`}
                            data-tooltip-content={tooltips[key as keyof typeof tooltips]} >{key}</span>
                          <Tooltip id={`guid-tooltip${key}`} place="top" className="z-50" />
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='relative z-20 flex-shrink-0 inline-flex'>
                  <select value={guidType} onChange={event => {
                    setGuidType(parseInt(event?.target.value))
                  }} className='flex-shrink-0 z-10 inline-flex items-center py-2 px-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600'>
                    {Object.values(uuidVersions).map(item => <option key={item} value={item} className='dark:bg-dark-2' >UUID v{item}</option>)}
                  </select>
                  <button
                    onClick={generateGuids}
                    disabled={loading}
                    data-tooltip-id="guid-tooltipGenerateGUIDs"
                    data-tooltip-content="Click to Generate GUIDs"
                    className="z-20 inline-flex items-center justify-center rounded-e-lg bg-primary ps-2 pr-5 py-2 text-center text-base font-medium text-white duration-300 hover:bg-primary/70"
                  >
                    {loading ? <span className="px-3">Loading...</span> : <span>Generate GUID/UUID</span>}
                    <Tooltip id={`guid-tooltipGenerateGUIDs`} place="top" className="z-50" />

                  </button>
                </div>

                {/* </div> */}
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full flex gap-1 px-2  sm:px-4 lg:px-2 xl:px-4 mb-2">
                  <button
                    onClick={copyAllGuids}
                    className="inline-flex gap-1 items-center sm:w-1/2 justify-center rounded-md bg-primary px-7 py-1 text-center text-base font-medium text-white duration-300 hover:bg-primary/70"
                  >
                    <i className="bi bi-copy"></i><span>Copy All</span>
                  </button>
                  <button
                    onClick={downloadTxtFile}
                    className="inline-flex items-center gap-1 sm:w-1/2 justify-center rounded-md bg-primary px-7 py-1 text-center text-base font-medium text-white duration-300 hover:bg-primary/70"
                  >
                    <i className="bi bi-cloud-download"></i> <span>Download file</span>
                  </button>
                </div>
                <div className="w-full flex flex-col gap-1 px-2 sm:px-4 lg:px-2 xl:px-4 py-2 h-48 rounded-lg overflow-auto bg-slate-200 dark:bg-gray-700">
                  {guidsList.map((guid) => (<div key={guid} className="flex items-center gap-2  rounded-md hover:bg-white hover:dark:bg-gray-500" onClick={() => { copyToClipboard(guid) }}>
                    <i className="bi bi-copy cursor-pointer p-1 px-2 rounded-md hover:bg-slate-300 hover:dark:bg-gray-600"  ></i>
                    <span>{guid}</span>
                  </div>))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full -mx-4 flex flex-wrap items-start my-10">
            <div className=" lg:w-1/2 px-4 mb-12 lg:mb-0">

              <div className="w-full flex flex-col gap-3 my-5">
                <span className="text-start "><strong>Nil/Empty UUID:</strong> {NIL_UUID} <i className="bi bi-copy cursor-pointer p-1 px-2 rounded-md hover:bg-slate-300 hover:dark:bg-gray-600" onClick={() => { copyToClipboard(NIL_UUID) }}></i></span>
                <span className="text-start "><strong>Max UUID:</strong> {MAX_UUID} <i className="bi bi-copy cursor-pointer p-1 px-2 rounded-md hover:bg-slate-300 hover:dark:bg-gray-600" onClick={() => { copyToClipboard(MAX_UUID) }}></i></span>
              </div>
              <h1 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[20px] sm:leading-[1.2]">
                GUID/UUID checker</h1>
              <div className="w-full flex gap-3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="guid-checker"
                  type="text"
                  placeholder="Enter GUID here"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setGuidCheck(event.target.value);
                  }} />
                <button
                  onClick={checkGuid}
                  className="inline-flex items-center justify-center rounded-md bg-sky-900 px-7 py-2 text-center text-base font-medium text-white duration-300 hover:bg-sky-600"
                >
                  Check
                </button>
              </div>
              <div className="w-full flex gap-3 mt-2">
                <span className="font-bold text-start ">Result: </span>
                <span id='checkresult'></span>
              </div>
            </div>
            <div className=" lg:w-1/2 px-4 mb-12  lg:mb-0">
              {/* TODO: ADS */}
            </div>
          </div>
          <hr />
          <div className="mb-4">
            <h2 className="my-3 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[20px] sm:leading-[1.2]">What is a GUID?</h2>
            <p>{`GUID (aka UUID) is an acronym for 'Globally Unique Identifier' (or 'Universally Unique Identifier'). It is a 128-bit integer number used to identify resources. The term GUID is generally used by developers working with Microsoft technologies, while UUID is used commonly used elsewhere.`}</p>
            <h2 className="my-3 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[20px] sm:leading-[1.2]">How are GUIDs used?</h2>
            <p>GUIDs are used by enterprise software developers, progammers, engineers, database administrators, and testers in systems and application development and testing. They are used in Java, C#, Python, C++ , SQL databases, and non-relational Cloud databases as primary keys, versions, component identifiers, or just about anywhere else a truly unique identifier is required.&nbsp;</p>
            <h2 className="my-3 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[20px] sm:leading-[1.2]">How unique is a GUID?</h2>
            <p>128-bits is big enough and the generation algorithm is unique enough that if 1,000,000,000 GUIDs per second were generated for 1 year the probability of a duplicate would be only 50%. Or if every human on Earth generated 600,000,000 GUIDs there would only be a 50% probability of a duplicate.</p>
            <h2 className="my-3 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[20px] sm:leading-[1.2]">More Information About GUIDs</h2>
            <p>
              <a href="https://en.wikipedia.org/wiki/Globally_Unique_Identifier" className="hover:text-primary" target="_blank">Globally Unique Identifier - Wikipedia, the free encyclopedia</a>
              <br />
              <a href="https://docs.microsoft.com/en-us/dotnet/api/system.guid" className="hover:text-primary" target="_blank">GUID Structure - Microsoft.com</a>
              <br />
              <a href="http://www.ietf.org/rfc/rfc4122.txt" className="hover:text-primary" target="_blank"> RFC 4122</a>
              <br />
            </p>
          </div>
          <hr />
        </div>
      </div>

    </section>
  );
};

