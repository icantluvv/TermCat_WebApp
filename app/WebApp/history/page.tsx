import NotReadyPage from "@/components/NotReadyPage"
import Image from "next/image"
import NotReadyBack from "@/public/images/not_ready/NotReadyBack.png"

const History = () => {
  return (
    <>
      <NotReadyPage></NotReadyPage>

      <Image
        src={NotReadyBack}
        alt="NotReadyBack"
        fill
        objectFit="cover"
        className="absolute top-0 left-0 z-[0]"
      ></Image>
    </>
  )
}

export default History
