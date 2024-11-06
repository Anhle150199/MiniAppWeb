"use client"
import React, { useState, useEffect, Fragment } from "react";
import 'react-tooltip/dist/react-tooltip.css';
import { copyToClipboard, downloadTxtFile } from "@/utils/helper";
import { Button, TextArea } from "@/components/Common/BaseComponent";

export const TextConvertter = ({functionHandler}:{
  functionHandler: (input:string)=>string;
}) => {
  // states
  const [inputText, setInputText] = useState<string>("");  //text is displayed on input 
  const [outputText, setOutputText] = useState<string>("");  //text is displayed on input 

  // functions
  const onChangeInputText = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > 10000) return;
    setInputText(event.target.value)
  }

  const copyOutputText = () => {
    copyToClipboard(outputText);
  }
  const copyInputText = () => {
    copyToClipboard(inputText);
  }
  const handleDonwloadFile = () => {
    downloadTxtFile(outputText, `ConverttedText.txt`);
  }
  useEffect(()=>{
    debugger
    if(functionHandler){
      let output = functionHandler(inputText);
      setOutputText(output);
    }
  }, [inputText])

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
                    <span className="mb-3 text-lg font-bold leading-tight text-dark dark:text-white sm:text-[20px] sm:leading-[1.2]">Input Text</span>
                    <div className=" flex flex-wrap gap-1 mb-1 justify-end">
                      <Button onClick={copyInputText} className="px-3" tooltipId="copy-input-btn" tooltipContent="Copy input text">
                        <i className="bi bi-copy"></i>
                      </Button>
                    </div>
                  </div>
                  <TextArea value={inputText}
                    onChange={onChangeInputText}
                    className="min-h-52"
                    placeholder="Input Text Here"></TextArea>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12  lg:mb-0">
                  <div className="w-full flex flex-wrap justify-between items-center">
                    <span className="mb-3 text-lg font-bold leading-tight text-dark dark:text-white sm:text-[20px] sm:leading-[1.2]">Input Text</span>
                    <div className=" flex flex-wrap gap-1 mb-1 justify-end">
                    <Button onClick={copyOutputText} className="px-3" tooltipId="copy-btn" tooltipContent="Copy text">
                        <i className="bi bi-copy"></i>
                      </Button>
                      <Button onClick={handleDonwloadFile} className="px-3" tooltipId="download-btn" tooltipContent="Download text">
                        <i className="bi bi-cloud-download"></i>
                      </Button>
                    </div>
                  </div>
                  <TextArea value={outputText}
                    placeholder="Output Text Here"></TextArea>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>

    </section>
  );
};

