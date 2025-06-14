import NotReadyPage from "@/components/NotReadyPage"
import Image from "next/image"
import back from "@/public/images/404/background_404.svg"

const History = () => {
  return (
    <>
      <NotReadyPage></NotReadyPage>

      <Image
        src={back}
        alt={back}
        fill
        objectFit="cover"
        className="absolute top-0 left-0"
      ></Image>
    </>
  )
}

export default History
