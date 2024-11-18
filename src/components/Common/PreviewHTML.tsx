// components/HtmlPreview.js

import { useEffect, useState } from "react";

function generatePreviewUrl(htmlContent: any) {
  const blob = new Blob([htmlContent], { type: "text/html" });
  return URL.createObjectURL(blob);
}
export default function HtmlPreview({ htmlContent }: { htmlContent: any }) {
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    // Tạo URL từ HTML content
    const url = generatePreviewUrl(htmlContent);
    setPreviewUrl(url);

    // Cleanup URL khi component unmount
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [htmlContent]);

  return (
    <iframe
      src={previewUrl}
      width="100%"
      height="100%"
      frameBorder="0"
      sandbox="allow-scripts allow-same-origin" // Bảo mật bằng cách chỉ cho phép script và same-origin
    />
  );
}
