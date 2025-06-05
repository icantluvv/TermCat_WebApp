import Link from "next/link"
import React from "react"

const MobileNav = () => {
  return (
    <div className="w-full h-full absolute bg-black z-[5000] justify-end flex px-[5%]">
      <button className="absolute text-white  top-[5%]">X</button>
      <nav className="text-white flex-col flex gap-[2em] text-[16px] mt-[20vh] items-end">
        <Link
          href={"#prices"}
          className="hover:text-primaryGreen active:text-primaryGreenActive transition-all text-[18px]"
        >
          Цены
        </Link>
        <Link
          href={"#services"}
          className="hover:text-primaryGreen active:text-primaryGreenActive transition-all text-[18px]"
        >
          Услуги
        </Link>
        <Link
          href={"#help"}
          className="hover:text-primaryGreen active:text-primaryGreenActive transition-all text-[18px]"
        >
          Поддержка
        </Link>
      </nav>
    </div>
  )
}

export default MobileNav
