import Navigation from "@/components/nav/Navigation"
import NotReadyBack from "@/public/images/not_ready/NotReadyBack.png"
import Image from "next/image"

export default function IntroduceLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="xl:px-[2%] flex gap-[2%] bg-PageBG ">
      <Navigation />
      <div className="flex-1 min-h-[100svh] xl:pl-[8%] xl:px-0 pt-[5vh] pb-[100px] xl:pb-[5vh] px-[4vw]">
        {children}
      </div>
      <Image
        src={NotReadyBack}
        alt={"NotReadyBack"}
        fill
        objectFit="cover"
      ></Image>
    </div>
  )
}
