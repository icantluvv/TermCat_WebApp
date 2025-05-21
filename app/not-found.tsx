import notfound from "@/public/images/404/404.svg"
import back from "@/public/images/404/background_404.svg"
import Image from "next/image"

export default function NotFound() {
  return (
    <main className="flex flex-col h-screen w-full bg-PageBG relative">
      <div className="pl-[10vw] pt-[15vh]">
        <h2 className="text-PrimaryBlack font-cygre text-[42px] font-medium">
          Страница не найдена
        </h2>
        <div className="flex flex-col text-Gray02 font-poppins text-[1.125rem]">
          <p>
            Эта страница в данный момент недоступна или находится в разработке
          </p>
          <p>Приносим свои извинения</p>
        </div>
      </div>

      <Image
        src={notfound}
        alt={"notfound"}
        className="absolute left-[30vw] top-[35vh] z-[10]"
      ></Image>
      <Image src={back} alt={back} className="absolute bottom-0"></Image>
    </main>
  )
}
