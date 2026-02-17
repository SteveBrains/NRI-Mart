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
    title: "NRI MART | Revolutionizing NRI Services & International Logistics",
    description: "NRI MART is your bridge to home. We offer comprehensive services for NRIs including store products, custom sourcing, safe luggage delivery, and e-commerce shipping with dedicated case managers.",
    keywords: "NRI services, international shipping, luggage delivery service, personal shopper for NRIs, e-commerce products India, NRI Mart app, bridge to home, custom logistics for NRIs",
    openGraph: {
        type: "website",
        url: "https://nrimart.com/",
        title: "NRI MART | Your Trusted Bridge to Home",
        description: "Simplify your life with NRI MART. From everyday essentials to unique finds and luggage delivery, we handle your international shipping needs with care.",
        images: [{ url: "https://nrimart.com/og-image.png" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "NRI MART | Your Trusted Bridge to Home",
        description: "Experience the future of convenience with NRI MART. Dedicated case managers and seamless international shipping for all your needs.",
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
                            "name": "NRI MART",
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
                            "description": "NRI MART is a bridge to home for NRIs, offering comprehensive services beyond groceries including e-commerce products and luggage delivery from Hyderabad."
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
