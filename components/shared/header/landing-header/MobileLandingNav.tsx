"use client"

import { useLandingMobileHeaderStore } from "@/store/LandingMobileHeaderStore"
import Link from "next/link"
import Image from "next/image"

import logo from "@/public/images/landing/logo.svg"
const MobileLandingNav = ({ navLinks }: LandingLinksProps) => {
  const { isNavOpen } = useLandingMobileHeaderStore()

  return (
    <div
      className={`fixed left-0 top-0 w-[80%] h-[100svh] bg-PrimaryBlack flex px-[5%] z-[9000] transition-transform duration-300 ease-in-out lg:hidden ${
        isNavOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav className="text-white flex flex-col gap-[24px] mt-[20vh] text-[18px]">
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} className="hover:text-PrimaryGreen">
            {label}
          </Link>
        ))}
      </nav>
      <Image
        src={logo}
        alt={"mobile_nav_logo"}
        className="absolute bottom-[5vh] w-[100px]"
      ></Image>
    </div>
  )
}

export default MobileLandingNav
