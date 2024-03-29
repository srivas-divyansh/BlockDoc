import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlocDoc",
  description: "Generated by create next app",
  icons:{
    icon:['/favicons/favicon.ico?v=4'],
    apple:['/favicons/apple-touch-icon.png?v=4'],
    shortcut:['/favicons/apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        
      <main className={`bg-[#2A2A2A] flex h-[261vh]`}>
        <div className="p-5 flex flex-col items-center fixed  justify-around h-[100vh]" >
          <div className="">
          <Link href={'/'}><img src="/assets/home.svg" alt="" className="h-10 mb-24 mt-24"  /></Link>
          </div>
          <div>
          <Link href={'/files'}><img src="/assets/files.svg" alt=""  className="h-8" /></Link>
          </div>
          <div>
          <Link href={'https://diseasepredictionml-dl.onrender.com/'}><img src="/assets/predict.svg" alt="" className="h-8" /></Link>
          </div>
          <div>
          <Link href={'/profile'}><img src="/assets/profile.svg" alt="" className="h-8" /></Link>
          </div>
          <div>
          <img src="/assets/logout.svg" alt="" className="h-7 mb-36" />
          </div>
        </div>
        <div className=" bg-white w-[90vw] rounded-3xl ml-[6rem] my-6 px-10">
        {children}
        </div>
        </main>
        
        </body>
    </html>
 
  );
}
