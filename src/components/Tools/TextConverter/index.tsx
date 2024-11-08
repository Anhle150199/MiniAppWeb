"use client"
import React, { useState, useEffect } from "react";
import 'react-tooltip/dist/react-tooltip.css';
import { copyToClipboard, downloadTxtFile } from "@/utils/clientHelper";
import { Button, CheckBox, TextArea } from "@/components/Common/BaseComponent";
import { Text2SlugParams } from "@/types/baseComponentTypes";
import { TypeCase } from "@/mocks/dataList";

export const TextConvertter = ({ functionHandler }: {
  functionHandler: (input: Text2SlugParams) => string
}) => {
  // states
  const [input, setInput] = useState({
    text: "",
    typeCase: TypeCase.Lowercase,
    isMultipleLine: true
  });  //text is displayed on input 
  const [outputText, setOutputText] = useState<string>("");  //text is displayed on input 

  // functions
  const onChangeInputText = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > 10000) return;
    setInput({ ...input, text: event.target.value })
  }

  const copyOutputText = () => {
    copyToClipboard(outputText);
  }
  const copyInputText = () => {
    copyToClipboard(input.text);
  }
  const handleDonwloadFile = () => {
    downloadTxtFile(outputText, `ConverttedText.txt`);
  }
  useEffect(() => {
    debugger
    if (functionHandler) {
      let output = functionHandler(input);
      setOutputText(output);
    }
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
                  <span className="mb-3 text-lg font-bold leading-tight text-dark dark:text-white sm:text-[20px] sm:leading-[1.2]">Input Text</span>
                  <div className=" flex flex-wrap gap-1 mb-1 justify-end">
                    <Button onClick={copyInputText} className="px-3" tooltipId="copy-input-btn" tooltipContent="Copy input text">
                      <i className="bi bi-copy"></i>
                    </Button>
                  </div>
                </div>
                <TextArea value={input.text}
                  onChange={onChangeInputText}
                  className="min-h-52"
                  placeholder="Input Text Here"></TextArea>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12  lg:mb-0">
                <div className="w-full flex flex-wrap justify-between items-center">
                  <span className="mb-3 text-lg font-bold leading-tight text-dark dark:text-white sm:text-[20px] sm:leading-[1.2]">URL Slug Text</span>
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
                  placeholder="Output Text Here" readOnly  ></TextArea>
              </div>
            </div>
          </div>
          <div className="w-full min-h-52 p-2 px-2 sm:px-4 lg:px-2 xl:px-4 py-2 rounded-lg border-2 border-gray-300">
          <h2 className="my-3 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[20px] sm:leading-[1.2]">Tool Options</h2>
            <div className="  gap-4 mb-3 ">
              <div className="flex-col inline-block mx-2 align-top">
                <h3 className="text-medium font-bold mb-2">Multi-line Mode</h3>
                <CheckBox  checked={input.isMultipleLine} title="Multiple Line" onChange={()=>setInput({...input, isMultipleLine:  !input.isMultipleLine})} />
                <span className="text-sm font-light">Convert each line to a URL slug individually.</span>
              </div>
              <div className="flex-col inline-block mx-2 align-top">
                <h3 className="text-medium font-bold mb-2">Text Case Mode</h3>
                <CheckBox  checked={input.typeCase == TypeCase.None} title="None" onChange={()=>setInput({...input, typeCase:  TypeCase.None})} />
                <CheckBox  checked={input.typeCase == TypeCase.Lowercase} title="Lower Case" onChange={()=>setInput({...input, typeCase:  TypeCase.Lowercase})}/>
                <CheckBox  checked={input.typeCase == TypeCase.Uppercase} title="Upper Case" onChange={()=>setInput({...input, typeCase:  TypeCase.Uppercase})}/>
                <span className="text-sm font-light">Create a URL slug consisting only of lowercase/uppercase letters.</span>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>

    </section>
  );
};

