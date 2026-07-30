import "./globals.css";

const siteUrl = new URL("https://www.caferabbit.com");
const title = "The Rabbit Cafe | A Quiet Creative Space";
const description =
  "The official home of The Rabbit Cafe—a calm, independent creative space for thoughtful ideas, warm details, and things made with care.";

export const metadata = {
  metadataBase: siteUrl,
  title: {
    default: title,
    template: "%s | The Rabbit Cafe",
  },
  description,
  applicationName: "The Rabbit Cafe",
  creator: "The Rabbit Cafe",
  publisher: "The Rabbit Cafe",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    siteName: "The Rabbit Cafe",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "The Rabbit Cafe—a quiet creative space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    shortcut: "/icon",
  },
  category: "creative",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5efe5",
  colorScheme: "light",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.caferabbit.com/#website",
  url: "https://www.caferabbit.com/",
  name: "The Rabbit Cafe",
  alternateName: ["Rabbit Cafe", "CafeRabbit"],
  description,
  inLanguage: "en",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
