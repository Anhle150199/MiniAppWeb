"use client"
import { useState, useEffect, Fragment } from "react";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import toast from "react-hot-toast";
import { copyToClipboard } from "@/utils/helper";


const tooltips = {
  None: "Keep current format",
  Uppercase: "Convert the entire text to uppercase letters.",
  Lowercase: "Convert the entire text to lowercase letters.",
  TitleCase: "Capitalize the first letter of each word in the text.",
  SentenceCase: "Capitalize the first letter of each sentence in the text.",
  TrimExtraSpaces: 'Remove extra spaces from the beginning and end of the text.',
  ReplaceText: 'Find and replace specific text within your content.',
  AddHyphens: 'Insert hyphens where necessary in the text.',
  AddCommas: 'Insert commas where necessary in the text.',
  SpellCheck: 'Check for spelling errors in your text.',
  WordCount: 'Count the number of words in the text.',
  CharacterCount: 'Count the number of characters in the text.',
  SentenceCount: 'Count the number of sentences in the text.',
  CharacterBreakdown: 'Display the percentage of each character type in the text.',
  RemoveSpecialCharacters: 'Remove non-alphanumeric characters from the text.',
  ConvertToASCII: 'Convert the text to ASCII format.'
};
const textCaseOptionDefault = {
  None: false,
  Uppercase: false,
  Lowercase: false,
  TitleCase: false,
  SentenceCase: false
}
export const TextFormatter = () => {
  // states
  const [textVersion, setTextVersion] = useState<string[]>([]);
  const [editedText, setEditedText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [acceptForAll, setAcceptForAll] = useState<boolean>(true);
  const [textCaseOptions, setTextCaseOptions] = useState({...textCaseOptionDefault, None: true})

  // functions
  const onChangeInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextVersion(prev => ([
      ...prev,
      event.target.value
    ]))
  }

  const handleCheckboxChange = (key: string) => {
    setTextCaseOptions((prevOptions) => ({
      ...textCaseOptionDefault,
      [key]: !prevOptions[key as keyof typeof prevOptions],
    }));
  };
  const handleOnChangeAceptFor = () => setAcceptForAll(!acceptForAll)

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
                <h1 className="mb-3 text-lg font-bold leading-tight text-dark dark:text-white sm:text-[20px] sm:leading-[1.2]">Formatting</h1>
                <div>
                  <div className=" mb-6">
                    <div className="md:w-2/3">
                      <label className="block font-bold md:text-start mb-1 md:mb-0 pr-4" htmlFor="guid-number">
                        Accept for:
                      </label>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-800 focus:ring-2 focus:ring-red-500"
                          checked={acceptForAll}
                          onChange={handleOnChangeAceptFor}
                          data-tooltip-id="accept-for-all"
                          data-tooltip-content="Apply this format to the entire text"
                        />
                        <span className="text-sm font-medium"
                          data-tooltip-id="accept-for-all"
                          data-tooltip-content="Apply this format to the entire text" >All</span>
                        <Tooltip id="accept-for-all" place="top" className="z-50" />
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-800 focus:ring-2 focus:ring-red-500"
                          checked={!acceptForAll}
                          onChange={handleOnChangeAceptFor}
                          data-tooltip-id="accept-for-keyword"
                          data-tooltip-content="Apply this format to text matching the keyword"
                        />
                        <span className="text-sm font-medium"
                          data-tooltip-id="accept-for-keyword"
                          data-tooltip-content="Apply this format to text matching the keyword" >Keyword</span>
                        <Tooltip id="accept-for-keyword" place="top" className="z-50" />
                      </label>
                    </div>
                    <input placeholder="Enter keyword" disabled={acceptForAll} className=" appearance-none border-2 disabled:text-gray-300 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                  </div>
                  <div className=" mb-6">
                    <label className="block text-gray-500 font-bold md:text-start mb-1 md:mb-0 pr-4" htmlFor="guid-number">Text Case:</label>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.keys(textCaseOptions).map((key) => (
                        <label key={key} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            id={key}
                            type="checkbox"
                            className="h-4 w-4 text-blue-800 focus:ring-2 focus:ring-red-500"
                            checked={textCaseOptions[key as keyof typeof textCaseOptions]}
                            onChange={() => handleCheckboxChange(key)}
                            data-tooltip-id={`tooltip${key}`}
                            data-tooltip-content={tooltips[key as keyof typeof tooltips]}
                          />
                          <span className="text-sm font-medium"
                            data-tooltip-id={`tooltip${key}`}
                            data-tooltip-content={tooltips[key as keyof typeof tooltips]} >{key}</span>
                          <Tooltip id={`tooltip${key}`} place="top" className="z-50" />
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='relative z-20 flex-shrink-0 inline-flex'>
                  <button
                    disabled={loading}
                    data-tooltip-id="accrept-format-btn"
                    data-tooltip-content="Click to confirm and apply your selected format options to the text"
                    className="z-20 inline-flex items-center justify-center rounded-e-lg bg-primary ps-2 pr-5 py-2 text-center text-base font-medium text-white duration-300 hover:bg-primary/70"
                  >
                    {loading ? <span className="px-3">Loading...</span> : <span>Accept Format</span>}
                    <Tooltip id={`accrept-format-btn`} place="top" className="z-50" />

                  </button>
                </div>

                {/* </div> */}
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full flex flex-col gap-1 px-2 sm:px-4 lg:px-2 xl:px-4 py-2 h-48 rounded-lg overflow-auto bg-slate-200 dark:bg-gray-700">
                  <textarea value={""}></textarea>
                </div>
                <div className="w-full flex gap-1 px-2  sm:px-4 lg:px-2 xl:px-4 mb-2">
                  <button
                    onClick={copyAllGuids}
                    className="inline-flex gap-1 items-center sm:w-1/2 justify-center rounded-md bg-primary px-7 py-1 text-center text-base font-medium text-white duration-300 hover:bg-primary/70"
                  >
                    <i className="bi bi-copy"></i><span>Copy text</span>
                  </button>
                  <button
                    onClick={downloadTxtFile}
                    className="inline-flex items-center gap-1 sm:w-1/2 justify-center rounded-md bg-primary px-7 py-1 text-center text-base font-medium text-white duration-300 hover:bg-primary/70"
                  >
                    <i className="bi bi-cloud-download"></i> <span>Download text</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="mb-4">
          </div>
          <hr />
        </div>
      </div>

    </section>
  );
};

