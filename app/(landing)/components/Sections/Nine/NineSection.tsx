import React from "react"
import Image from "next/image"

import footerlogo from "@/public/assets/images/footer_logo.svg"
import stars from "@/public/assets/images/stars.svg"
const NineSection = () => {
  return (
    <section className="flex justify-center gap-x-6 my-[15vh]">
      <Image
        src={footerlogo}
        alt={"footer-logo"}
        width={147}
        height={35}
      ></Image>
      <Image src={stars} alt={"stars"} width={144} height={24}></Image>
    </section>
  )
}

export default NineSection
