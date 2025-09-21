import Image from "next/image"
import back from "@/public/images/auth/back.png"
import PageWrapper from "@/components/shared/PageWrapper/PageWrapper"
import { ReactNode } from "react"

export default function AuthLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <PageWrapper className="bg-[#e8e8e8] flex items-center justify-center">
      {children}
      <Image src={back} alt="" className="w-full h-full top-0 left-0 absolute opacity-30" />
    </PageWrapper>
  )
}
