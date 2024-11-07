"use client"
import React, { useState, useEffect, Fragment } from "react";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { copyToClipboard, downloadTxtFile } from "@/utils/clientHelper";
import { Button, TextArea } from "@/components/Common/BaseComponent";
import markdownToHtml from "@/utils/markdownToHtml";

const tooltips = {
  None: "Keep current format",
  Uppercase: "Convert the entire text to uppercase letters: ABCDEF.",
  Lowercase: "Convert the entire text to lowercase letters: abcdef.",
  TitleCase: "Capitalize the first letter of each word in the text: Abc Def.",
  SentenceCase: "Capitalize the first letter of each sentence in the text: Abcdef.",
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
  const [editedText, setEditedText] = useState<string>("");   
  const [guideDoc, setGuideDoc] = useState<string>("");  
  const [keyword, setKeyword] = useState<string>("");
  const [replaceKeyword, setReplaceKeyword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [applyForAll, setApplyForAll] = useState<boolean>(true);
  const [textCaseOptions, setTextCaseOptions] = useState({ ...textCaseOptionDefault, None: true })

  // functions
  const onChangeAreaText = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > 10000) return;
    setEditedText(event.target.value)
  }
  const handleCheckboxChange = (key: string) => {
    setTextCaseOptions((prevOptions) => ({
      ...textCaseOptionDefault,
      [key]: !prevOptions[key as keyof typeof prevOptions],
    }));
  };
  const handleOnChangeAceptFor = () => setApplyForAll(!applyForAll)

  const handleTextCaseFunction = () => {
    debugger
    if (!editedText && textCaseOptions.None) {
      return;
    }
    let trueVal = true;
    let newText;
    if (applyForAll)
      switch (trueVal) {
        case textCaseOptions.Lowercase:
          newText = editedText.toLowerCase();
          break;
        case textCaseOptions.Uppercase:
          newText = editedText.toUpperCase();
          break;
        case textCaseOptions.TitleCase:
          newText = editedText.toTitleCase();
          break;
        case textCaseOptions.SentenceCase:
          newText = editedText.toSentenceCase();
          break;

        default:
          newText = editedText;
          break;
      }
    else {
      const keySearch = new RegExp(keyword, 'gi');
      switch (trueVal) {
        case textCaseOptions.Lowercase:
          newText = editedText.replaceAll(keySearch, keyword.toLowerCase());
          break;
        case textCaseOptions.Uppercase:
          newText = editedText.replaceAll(keySearch, keyword.toUpperCase());
          break;
        case textCaseOptions.TitleCase:
          newText = editedText.replaceAll(keySearch, keyword.toTitleCase());
          break;
        case textCaseOptions.SentenceCase:
          newText = editedText.replaceAll(keySearch, keyword.toSentenceCase());
          break;
        default:
          newText = editedText;
          break;
      }
    }
    setEditedText(newText);
  }

  const handleReplaceKeyWord = () => {
    if (!keyword) return;
    const keySearch = new RegExp(keyword, 'gi');
    let newText = editedText.replaceAll(keySearch, replaceKeyword);
    setEditedText(newText);
  }

  const copyCurrentText = () => {
    copyToClipboard(editedText);
  }
  const handleDonwloadFile = () => {
    downloadTxtFile(editedText, `FomattedText.txt`);
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
                    <div className="w-full">
                      <span className="block font-bold md:text-start mb-1 md:mb-0 pr-4" >Apply for:</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-800 focus:ring-2 focus:ring-red-500"
                          checked={applyForAll}
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
                          checked={!applyForAll}
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
                    <input
                      placeholder="Enter keyword"
                      disabled={applyForAll}
                      value={keyword}
                      maxLength={100}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setKeyword(event.target.value)}
                      className="mb-2 appearance-none border-2 disabled:text-gray-300 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                    <div className="relative z-20 flex-shrink-0 inline-flex w-full justify-between gap-2">
                      <input
                        placeholder="Replace Keyword"
                        disabled={applyForAll}
                        maxLength={100}
                        value={replaceKeyword}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setReplaceKeyword(event.target.value)}
                        className="appearance-none border-2 disabled:text-gray-300 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                      <Button value={"Replace"} disabled={applyForAll} onClick={handleReplaceKeyWord} tooltipContent={tooltips.ReplaceText} tooltipId="replace-keyword-btn" />
                    </div>
                  </div>
                  <hr />
                  <div className=" my-3">
                    <div className='relative z-20 flex-shrink-0 inline-flex w-full justify-between'>
                      <span className="block text-gray-500 font-bold md:text-start mb-1 md:mb-0 pr-4">Text Case:</span>
                      <Button onClick={handleTextCaseFunction} loading={loading} tooltipContent="Click to confirm and apply your selected format options to the text" tooltipId="apply-text-case-btn" value={"Apply"} />
                    </div>
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
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full  rounded-lg">
                  <div className="w-full flex flex-wrap gap-1 mb-1 justify-end">
                    <Button onClick={copyCurrentText} className="px-3" tooltipId="copy-btn" tooltipContent="Copy text">
                      <i className="bi bi-copy"></i>
                    </Button>
                    <Button onClick={handleDonwloadFile} className="px-3" tooltipId="download-btn" tooltipContent="Download text">
                      <i className="bi bi-cloud-download"></i>
                    </Button>
                  </div>

                  <TextArea value={editedText}
                    onChange={onChangeAreaText}
                    placeholder="Input Text Here"></TextArea>                </div>
                <div className="w-full flex gap-1 px-2  sm:px-4 lg:px-2 xl:px-4 mb-2">
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="mb-4" dangerouslySetInnerHTML={{ __html: guideDoc }} >

          </div>
          <hr />
        </div>
      </div>

    </section>
  );
};

