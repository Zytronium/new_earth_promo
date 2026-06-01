import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "New Earth: Humanity's Future Among The Stars",
    description: "A hypothetical space colony program from the near future. Pretend to sign up to become a colonist today!",
};

export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={"h-full antialiased"}>
        <body className="min-h-full flex flex-col">
            {children}
            <footer
                className="flex flex-row justify-between mt-auto py-4 px-16 border-t border-slate-800 bg-slate-900 text-center text-sm text-slate-300">
                <p>&copy; {new Date().getFullYear()} Zytronium. All rights reserved.</p>
                <p className="text-slate-400">
                    The content of this website is fictional and for entertainment purposes only.
                </p>
            </footer>
        </body>
        </html>
    );
}
