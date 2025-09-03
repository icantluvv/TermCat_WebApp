import Image from "next/image"
import Link from "next/link"
import Button from "@/components/core/button/Button"

import notfound from "@/public/images/404/404.svg"
import NotReadyBack from "@/public/images/not_ready/NotReadyBack.png"
import Typography from "@/components/core/typography/Typography"

export default function NotFound() {
  return (
    <div className="w-[100vw] h-[100svh] bg-PageBG relative block">
      <div className="relative z-30 p-[5%] lg:p-[10%]">
        <Typography variants="h1" color="black">
          Страница не существует или находится в разработке
        </Typography>

        <div className="mt-3 lg:mt-6 inline-flex">
          <Link href={"/"}>
            <Button className="block" variant="black" form="rounded" size="big" color="">
              Перейти на главную
            </Button>
          </Link>
        </div>
      </div>

      <Image src={notfound} alt={"notfound"} className="absolute xl:left-[30vw] top-[35vh] z-20"></Image>
      <Image src={NotReadyBack} alt="NotReadyBack" fill objectFit="cover" className="absolute z-0"></Image>
    </div>
  )
}
