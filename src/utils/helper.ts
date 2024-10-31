import toast from "react-hot-toast";

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    toast.success('Successfully copied!');
  }).catch(err => {
    toast.success('Failed to copy. Try latter!');

    console.error("Failed to copy: ", err);
  });
}

//Add new method to interface string
String.prototype.toSentenceCase = function (): string {
  return this.toLowerCase().replace(/(?:^|[.!?]\s+|\n\s*)([a-z])/g, (match, char) => match.replace(char, char.toUpperCase()));
};

String.prototype.toTitleCase = function (): string {
  return this.toLowerCase().split("\n")
    .map(paragraph => paragraph.trim().split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
    ).join('\n');
};
String.prototype.trimExtraSpaces = function (): string {
  return this.trim()                      // Loại bỏ khoảng trắng ở đầu và cuối chuỗi
    .replace(/[ \t]+/g, ' ')     // Thay thế các khoảng trắng liên tiếp mà không ảnh hưởng đến dấu xuống dòng
    .replace(/(\s*\n\s*)+/g, '\n'); // Đảm bảo chỉ có một dấu xuống dòng tại mỗi dòng
};