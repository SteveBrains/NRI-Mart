import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    weight: ["700", "800", "900"]
});
const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
    title: "NRI Mart | Best International Courier from Hyderabad & NRI Personal Shopper",
    description: "NRI Mart is Bringing INDIA Closer to you. Premium international shipping, luggage delivery, and personal shopping services from Hyderabad to USA, UK, Canada & 50+ countries. Specialized in Hyderabad sweets and authentic local goods.",
    keywords: "NRI services, international courier Hyderabad, best shipping from Hyderabad to USA, luggage delivery service Hyderabad, personal shopper Hyderabad, send sweets from Hyderabad to UK, NRI Mart Hyderabad office, Bringing INDIA Closer to you",
    openGraph: {
        type: "website",
        url: "https://nrimart.com/",
        title: "NRI Mart | Bringing INDIA Closer to you",
        description: "Your trusted gateway to India. From everyday essentials to unique finds and global luggage delivery, we are Bringing INDIA Closer to you with care and precision.",
        images: [{ url: "https://nrimart.com/og-image.png" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "NRI Mart | Bringing INDIA Closer to you",
        description: "Experience the ultimate convenience with NRI Mart. Personalized logistics and international shipping, Bringing INDIA Closer to you.",
        images: ["https://nrimart.com/og-image.png"],
    },
    alternates: {
        canonical: "https://nrimart.com/",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "NRI Mart",
                            "image": "https://nrimart.com/logo.png",
                            "@id": "https://nrimart.com",
                            "url": "https://nrimart.com",
                            "telephone": "+91XXXXXXXXXX",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Strategic Warehouse Location",
                                "addressLocality": "Hyderabad",
                                "addressRegion": "Telangana",
                                "postalCode": "500001",
                                "addressCountry": "IN"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 17.3850,
                                "longitude": 78.4867
                            },
                            "openingHoursSpecification": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                                ],
                                "opens": "00:00",
                                "closes": "23:59"
                            },
                            "sameAs": [
                                "https://www.facebook.com/nrimart",
                                "https://www.instagram.com/nrimart"
                            ],
                            "description": "NRI Mart is a bridge to home for NRIs, offering comprehensive services beyond groceries including e-commerce products and luggage delivery from Hyderabad."
                        })
                    }}
                />
            </head>
            <body className={`${inter.variable} ${playfair.variable} ${poppins.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
