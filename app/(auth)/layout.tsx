import Image from "next/image"
import logo from "@/public/images/landing/logo.svg"
import Link from "next/link"

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col min-h-[100svh]">
      {/* <header className="bg-PrimaryBlack fixed z-[2000] w-full h-[50px] md:h-[80px] flex items-center justify-center ">
        <Image src={logo} alt={""} className="w-[84px] md:w-[100px]" />
      </header> */}

      {children}
    </div>
  )
}
