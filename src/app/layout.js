// import "./globals.css";

// export const metadata = {
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon.png",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head />
//       <body className="bg-black">
//         {children}
//       </body>
//     </html>
//   );
// }

import Script from "next/script";
import "./globals.css";

export const metadata = {
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1034790355108758');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R5S5E7J20L"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R5S5E7J20L');
            gtag('config', 'G-7W6CS3WT3J');
          `}
        </Script>

        {/* GTM */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0], j=d.createElement(s),
            dl=l!='dataLayer'?'&l='+l:''; j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KDZX87VQ');
          `}
        </Script>

        {/* ⭐ MICROSOFT CLARITY (ADDED HERE) ⭐ */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "w7ausldgqk");
          `}
        </Script>
        {/* ⭐ END CLARITY ⭐ */}

      </head>

      <body className="bg-black">
        {/* Meta Pixel noscript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1034790355108758&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KDZX87VQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* <Preloader/> */}
        {children}
      </body>
    </html>
  );
}


// import Script from "next/script";
// import "./globals.css";
// import Preloader from "../app/components/Preloader";

// export const metadata = {
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon.png",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Meta Pixel */}
//         <Script id="meta-pixel" strategy="afterInteractive">
//           {`
//             !function(f,b,e,v,n,t,s)
//             {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//             n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//             if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//             n.queue=[];t=b.createElement(e);t.async=!0;
//             t.src=v;s=b.getElementsByTagName(e)[0];
//             s.parentNode.insertBefore(t,s)}(window, document,'script',
//             'https://connect.facebook.net/en_US/fbevents.js');
//             fbq('init', '1034790355108758');
//             fbq('track', 'PageView');
//           `}
//         </Script>

//         {/* Google Analytics */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-R5S5E7J20L"
//           strategy="afterInteractive"
//         />
//         <Script id="gtag-init" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-R5S5E7J20L');
//             gtag('config', 'G-7W6CS3WT3J');
//           `}
//         </Script>

//         {/* GTM */}
//         <Script id="gtm" strategy="afterInteractive">
//           {`
//             (function(w,d,s,l,i){w[l]=w[l]||[];
//             w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
//             var f=d.getElementsByTagName(s)[0], j=d.createElement(s),
//             dl=l!='dataLayer'?'&l='+l:''; j.async=true;
//             j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
//             f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-KDZX87VQ');
//           `}
//         </Script>
//       </head>

//       <body className="bg-black">
//         {/* Meta Pixel noscript */}
//         <noscript>
//           <img
//             height="1"
//             width="1"
//             style={{ display: "none" }}
//             src="https://www.facebook.com/tr?id=1034790355108758&ev=PageView&noscript=1"
//             alt=""
//           />
//         </noscript>

//         {/* GTM noscript */}
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-KDZX87VQ"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           />
//         </noscript>

//         {/* <Preloader/> */}
//         {children}

//       </body>
//     </html>
//   );
// }
