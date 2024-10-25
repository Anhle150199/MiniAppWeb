import toast from "react-hot-toast";

export   const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    toast.success('Successfully copied!');
  }).catch(err => {
    toast.success('Failed to copy. Try latter!');

    console.error("Failed to copy: ", err);
  });
} 