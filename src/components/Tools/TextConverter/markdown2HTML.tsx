"use client"
import React, { useState, useEffect } from "react";
import 'react-tooltip/dist/react-tooltip.css';
import { copyToClipboard, downloadTxtFile } from "@/utils/clientHelper";
import { Button, TextArea } from "@/components/Common/BaseComponent";

import MarkdownIt from 'markdown-it';
import HtmlPreview from "@/components/Common/PreviewHTML";

const md = new MarkdownIt();

export const Markdown2HTMLConverter = () => {
  // states
  const [input, setInput] = useState("");  //text is displayed on input 
  const [outputText, setOutputText] = useState<string>("");
  const [isPreview, setIsPreview] = useState<boolean>(true);

  const handleMarkdown2HTML = (input?: string) => {
    if (!input) return "";
    return md.render(input);
  }
  // functions
  const onChangeInputText = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > 10000) return;
    setInput(event.target.value)
  }

  const copyOutputText = () => {
    copyToClipboard(outputText);
  }
  const copyInputText = () => {
    copyToClipboard(input);
  }
  const handleDonwloadFile = () => {
    downloadTxtFile(outputText, `Markdown2HTML.html`);
  }
  useEffect(() => {
    let output = handleMarkdown2HTML(input);
    setOutputText(output);
  }, [input])

  return (
    <section
      className="bg-gray-1 pb-8 pt-2 dark:bg-dark-2 lg:pb-[70px] lg:pt-[20px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-start mb-10">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12  lg:mb-0">
                <div className="w-full flex flex-wrap justify-between items-center">
                  <span className="mb-3 text-lg font-bold leading-tight text-dark dark:text-white sm:text-[20px] sm:leading-[1.2]">Markdown Text</span>
                  <div className=" flex flex-wrap gap-1 mb-1 justify-end">
                    <Button onClick={copyInputText} className="px-3" tooltipId="copy-input-btn" tooltipContent="Copy">
                      <i className="bi bi-copy"></i>
                    </Button>
                  </div>
                </div>
                <TextArea value={input}
                  onChange={onChangeInputText}
                  className="min-h-96"
                  placeholder="Input Markdown Text Here"></TextArea>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12  lg:mb-0">
                <div className="w-full flex flex-wrap justify-between items-center">
                    <span className="mb-3 text-lg font-bold leading-tight text-dark dark:text-white sm:text-[20px] sm:leading-[1.2]">HTML Output</span>

                  <div className=" flex flex-wrap gap-1 mb-1 justify-end">
                  <Button onClick={()=> setIsPreview(!isPreview)} disabled={isPreview} className="px-3" tooltipId="copy-btn" tooltipContent="Preview HTML">
                      Preview
                    </Button>
                    <Button onClick={()=> setIsPreview(!isPreview)} disabled={!isPreview} className="px-3 " tooltipId="download-btn" tooltipContent="View Raw HTMl Code">
                      Raw HTML
                    </Button>

                    <Button onClick={copyOutputText} className="px-3" tooltipId="copy-btn" tooltipContent="Copy">
                      <i className="bi bi-copy"></i>
                    </Button>
                    <Button onClick={handleDonwloadFile} className="px-3" tooltipId="download-btn" tooltipContent="Download">
                      <i className="bi bi-cloud-download"></i>
                    </Button>
                  </div>
                </div>
                <div className="w-full h-96 overflow-auto p-2 px-2 sm:px-4 lg:px-2 xl:px-4 py-2 rounded-lg border-2 border-gray-300">
                  {isPreview ? <HtmlPreview htmlContent={outputText} />
                  :<pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                    <code>{outputText}</code>
                  </pre>}
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>

    </section>
  );
};

