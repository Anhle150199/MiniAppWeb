"use client"
import { TypeCase } from "@/mocks/dataList";
import { Text2SlugParams } from "@/types/baseComponentTypes";
import toast from "react-hot-toast";

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    toast.success('Successfully copied!');
  }).catch(err => {
    toast.success('Failed to copy. Try latter!');

    console.error("Failed to copy: ", err);
  });
}

export const downloadTxtFile = (fileContent: string, fileName: string) => {
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
const StringToSlug = (text: string) => {
  let x = text
    return text
    .normalize('NFD')                    // Chuyển đổi dấu sang dạng phân rã (decompose accents)
    .replace(/[\u0300-\u036f]/g, '')     // Loại bỏ dấu (accent marks)
    .replace(/[đĐ]/g, 'd')               // Chuyển đ, Đ sang d
    .replace(/[^a-z0-9\s-]/gi, '')       // Loại bỏ ký tự đặc biệt (chỉ giữ lại chữ cái, số và dấu cách)
    .replace(/\s+/g, '-')                // Thay dấu cách bằng dấu gạch ngang
    .replace(/-+/g, '-')                 // Xử lý trường hợp có nhiều dấu gạch ngang liên tiếp
    .replace(/^-+|-+$/g, '');            // Xóa dấu gạch ngang ở đầu và cuối chuỗi
}
export const Text2Slug = (input: Text2SlugParams): string => {
  debugger
  let processedText =input.text;

  if (input.isMultipleLine) {
    processedText = processedText.split('\n').map(StringToSlug).join('\n');
  } else {
    processedText = StringToSlug(processedText);
  }
  if(input.typeCase === TypeCase.Lowercase){
    return processedText.toLowerCase()
  }
  if(input.typeCase === TypeCase.Uppercase){
    return processedText.toUpperCase()
  }

  return processedText;
};
//Add new method to interface string
String.prototype.toSentenceCase = function (): string {

  return this.toLowerCase().split("\n")
    .map(paragraph => paragraph.split('. ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
    ).join('\n');
};

String.prototype.toTitleCase = function (): string {
  return this.toLowerCase().split("\n")
    .map(paragraph => paragraph.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
    ).join('\n');
};
String.prototype.trimExtraSpaces = function (): string {
  return this.trim()                      // Loại bỏ khoảng trắng ở đầu và cuối chuỗi
    .replace(/[ \t]+/g, ' ')     // Thay thế các khoảng trắng liên tiếp mà không ảnh hưởng đến dấu xuống dòng
    .replace(/(\s*\n\s*)+/g, '\n'); // Đảm bảo chỉ có một dấu xuống dòng tại mỗi dòng
};
String.prototype.convertToASCII = function (): string {
  return this.split("\n")
    .map(paragraph => paragraph.trim().split(' ').map(word => {
      return word.charCodeAt(0)
    }).join(' ')
    ).join('\n');
}
