import {Inter } from "next/font/google"
import "./globals.css";

export const metadata = {
    title: "ArchiVenture Design",
    description: "let the adventure in architecture begin",
};
const inter = Inter({ subsets: ["latin"]})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`} >
                {children}
            </body>
        </html>
    );
}
