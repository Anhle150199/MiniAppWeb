"use client"
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

export const TextToolFunction = {
  Text2Slug: (input: string)=>{
    return input.trim().replace(/[\s\W-]+/g, '-').replace(/^-+|-+$/g, '');
  }
}

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
