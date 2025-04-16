"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import bootstrap CSS
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import ToasterContext from "./api/contex/ToasetContex";
import { useEffect, useState } from "react";
import PreLoader from "@/components/Common/PreLoader";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 100);
  }, []);

  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">

      <head>
        <meta name="google-adsense-account" content="ca-pub-1825393109204318" />
        <Script id={"google-adsense-account"} async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1825393109204318" crossOrigin="anonymous"></Script>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8K8SYFY5HP" ></script>

        {/* <Script
          id="Google-Tag"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-PPQDZN9B"
        /> */}
        <Script
          id="Google-Tag-Init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PPQDZN9B');`,
          }}
        />
        <Script id={"Google-GA1"} dangerouslySetInnerHTML={{
          __html: `  window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8K8SYFY5HP');
          ` }}
        />
        <Script id={"Google-GA2"}
          dangerouslySetInnerHTML={{
            __html: `gtag('event', 'conversion', {
                'send_to': 'AW-16715802845/XYJ5COCA3doZEN3R26I-',
                'transaction_id': ''
            });
          ` }}
        />
      </head >

      <body>
        <noscript>
          <iframe title="gg" src="https://www.googletagmanager.com/ns.html?id=GTM-PPQDZN9B"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        {loading ? (
          <PreLoader />
        ) : (
          // <SessionProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
          >
            <ToasterContext />
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
          // </SessionProvider>
        )}
      </body>
    </html>
  );
}
