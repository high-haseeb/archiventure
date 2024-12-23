import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
    title: "ArchiVenture Design",
    description: "let the adventure in architecture begin",
};

const grotesque = localFont({
    src: "./fonts/grotesque.otf",
    variable: "--font-grotesque",
    weight: "900",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${grotesque.className} antialiased`} >
                {children}
            </body>
        </html>
    );
}
