import Image from "next/image"
import back from "@/public/images/auth/back.png"

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col min-h-[100svh] relative">
      {children}
      <Image
        src={back}
        alt=""
        className="w-full h-full top-0 left-0 absolute opacity-30"
      />
    </div>
  )
}
