import "./globals.css";
import Navbar from "./Navbar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body className="text-white">
                <Navbar />
                <div className="container mx-auto">{children}</div>
            </body>
        </html>
    );
}
