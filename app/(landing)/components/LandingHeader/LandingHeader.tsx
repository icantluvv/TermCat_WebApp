import React from "react"
import Image from "next/image"
import logo from "@/public/images/landing/logo.svg"
import Link from "next/link"
import Button from "@/ui/Button"

const LandingHeader = () => {
  return (
    <header className="w-full fixed z-[5000] lg:flex hidden bg-primaryBlack top-0 h-[5em] items-center justify-center px-[4%]">
      <Link className="absolute" href={"/"}>
        <Image src={logo} alt={""}></Image>
      </Link>

      <div className="w-full flex items-center justify-between">
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

          <Link
            className="p-[6px] pl-[28px] max-w-[204px] py-[12px] border-[1.5px] 
      rounded-[100px] flex items-center gap-[10px] text-white border-primaryGreen bg-transparent 
      hover:bg-primaryGreen active:bg-primaryGreenActive hover:text-black "
            href={"/login"}
          >
            Войти
          </Link>
          {/* <Button type={"primary-action"} text={"Войти"}></Button> */}
        </div>
      </div>
    </header>
  )
}

export default LandingHeader
