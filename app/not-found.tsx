import notfound from "@/public/images/404/404.svg"
import NotReadyBack from "@/public/images/not_ready/NotReadyBack.png"
import Image from "next/image"

export default function NotFound() {
  return (
    <main className="w-[100vw] h-[100svh] bg-PageBG relative">
      <div className="flex flex-col p-[5%] lg:p-[10%] w-full gap-[12px] lg:gap-[24px] z-[1000]">
        <h2 className="text-PrimaryBlack text-[28px] xl:text-[42px] ">
          Страница не доступна
        </h2>
        <p className="flex flex-col text-Gray02 text-[14px] xl:text-[16px]">
          В данный момент ведется разработка данной части веб-приложения TermCAT{" "}
          <br /> Приносим свои извинения
        </p>
      </div>

      <Image
        src={notfound}
        alt={"notfound"}
        className="absolute xl:left-[30vw] top-[35vh] z-[10]"
      ></Image>
      <Image
        src={NotReadyBack}
        alt="NotReadyBack"
        fill
        objectFit="cover"
        className="absolute "
      ></Image>
    </main>
  )
}
