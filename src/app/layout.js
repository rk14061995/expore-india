import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Explore the Wonders of India | Travel & Destinations",
  description: "Discover breathtaking landscapes, historic landmarks, and cultural gems across India. Explore destinations like Delhi, Jaipur, Goa, Kerala, and beyond with travel guides, tips, and itineraries.",
  keywords: "India travel, best places to visit in India, Indian tourism, Taj Mahal, Jaipur, Goa beaches, Kerala backwaters, Varanasi, Mumbai travel, Indian heritage, cultural sites in India, adventure in India",
  author: "exploreindia",
  robots: "index, follow",  // Ensures search engines index and follow links.
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",  // Add your Twitter handle if available.
    title: "Explore the Wonders of India",
    description: "Plan your journey through India’s iconic landmarks, cultural sites, and breathtaking landscapes with our expert travel guides.",
    image: "URL_to_image"  // Add an image for Twitter preview (1200x675px).
  },
  openGraph: {
    type: "website",
    url: "https://www.adventureabode.online/",  // Replace with your site's URL.
    title: "Explore the Wonders of India",
    description: "From the Taj Mahal to the serene backwaters of Kerala, explore the best destinations in India with our travel guides and tips.",
    image: "URL_to_image",  // Image for social media preview (1200x630px).
    site_name: "Explore India"
  },
  icons: {
    icon: "/favicon.ico",  // Path to your favicon.
    apple: "/apple-touch-icon.png"  // Path to your Apple touch icon.
  },
  viewport: "width=device-width, initial-scale=1.0", // Ensures mobile responsiveness.
  charset: "UTF-8",  // For proper character encoding.
  lang: "en", // Set the language of the website.
  canonical: "https://www.adventureabode.online/"  // Set the canonical URL for your homepage to avoid duplicate content.
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XSZ6WVT3H6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XSZ6WVT3H6');
            `,
          }}
        />
       
        {/* Google AdSense Script */}
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7690670457022729"
          crossOrigin="anonymous"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-7690670457022729",
                enable_page_level_ads: true
              });
            `,
          }}
        /> */}
        
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

        {/* jQuery and Bootstrap JS */}
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
      </body>
    </html>
  );
}
