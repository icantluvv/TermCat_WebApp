"use client"

import Image from "next/image"
import landing_header_logo from "@/public/images/landing/logo.svg"
import { useLandingMobileHeaderStore } from "@/store/LandingMobileHeaderStore"
import MobileLandingNav from "./MobileLandingNav"
import { useEffect } from "react"

const MobileLandingHeader = ({ navLinks }: LandingLinksProps) => {
  const { toggleNav, isNavOpen } = useLandingMobileHeaderStore()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isNavOpen) {
        toggleNav()
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isNavOpen, toggleNav])

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isNavOpen])

  return (
    <>
      <div className="flex lg:hidden w-full h-[60px] justify-center relative items-center z-[5000]">
        <Image
          src={landing_header_logo}
          alt="landing header logo"
          className="w-[104px]"
        />

        <button
          onClick={toggleNav}
          className="flex flex-col gap-[6px] absolute h-full justify-center px-[5vw] right-0"
        >
          <div
            className={`w-[11px] h-[1px] bg-Gray02 transition-transform ${
              isNavOpen ? "rotate-45" : "rotate-0"
            } `}
          ></div>
          <div
            className={`w-[11px] h-[1px]  transition-all ${
              isNavOpen ? "rotate-[-45deg] bg-Gray02" : "rotate-0 bg-LightGray"
            } `}
          ></div>
        </button>
      </div>

      <MobileLandingNav navLinks={navLinks} />
    </>
  )
}

export default MobileLandingHeader
