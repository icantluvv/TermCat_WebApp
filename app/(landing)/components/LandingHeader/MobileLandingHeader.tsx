import React from "react"
import Image from "next/image"
import logo from "@/public/images/landing/logo.svg"
import burger from "@/public/images/landing/burger.svg"

const MobileLandingHeader = () => {
  return (
    <header className="w-full h-[10vh] justify-center flex items-centers lg:hidden">
      <Image src={logo} width={104} alt={""}></Image>

      <button className="fixed w-[36px] right-[5%] top-[10%]">
        <Image src={burger} alt={""}></Image>
      </button>

      {/* <div className="w-full flex items-center justify-between">
        <nav className="text-white flex gap-[1.5vw] text-[16px] ">
          <Link
            href={"#prices"}
            className="hover:text-primaryGreen active:text-primaryGreenActive transition-all"
          >
            Цены
          </Link>
          <Link
            href={"#services"}
            className="hover:text-primaryGreen active:text-primaryGreenActive transition-all"
          >
            Услуги
          </Link>
          <Link
            href={"#help"}
            className="hover:text-primaryGreen active:text-primaryGreenActive transition-all"
          >
            Поддержка
          </Link>
        </nav>

        <div className="flex gap-[1vw]">
          <Button type={"secondary"} text={"Зарегистрироваться"}></Button>
          <Button type={"primary-action"} text={"Войти"}></Button>
        </div>
      </div> */}
    </header>
  )
}

export default MobileLandingHeader
