import Image from "next/image"
import Link from "next/link"

import arrow from "@/public/images/landing/arrow.svg"
import landing_header_logo from "@/public/images/landing/logo.svg"
import Typography from "@/core/typography/Typography"
import Button from "@/core/button/Button"

const BigLandingHeader = () => (
  <div className="hidden lg:flex w-full h-[80px] px-[4vw] xl:px-[6.5vw] justify-center relative items-center z-[5000]">
    <Link href={"/"} className="absolute">
      <Image
        src={landing_header_logo}
        alt="landing header logo"
        className="w-[104px]"
      />
    </Link>

    <nav className="flex w-full justify-between items-center">
      <div className="flex gap-[24px]">
        {/* <Link href={"/"} className="hover:text-PrimaryGreen">
          О компании
        </Link>
        <Link className="hover:text-PrimaryGreen" href={"/"}>
          Партнеры
        </Link> */}
      </div>
      <div className="flex gap-[12px]">
        <Link className="hover:text-PrimaryGreen" href={"/registration"}>
          <Button size="big" form="rounded" variant="empty">
            <Typography variants="button" center color="lightGray">
              Зарегистрироваться
            </Typography>
          </Button>
        </Link>

        <Link
          className="border-[1.5px] h-[48px] pr-[6px] pl-[24px] rounded-full border-PrimaryGreen  flex items-center gap-[12px]"
          href={"/WebApp"}
        >
          <Typography variants="button" center color="lightGray">
            Войти
          </Typography>
          <div className="rounded-full min-w-[36px] h-[36px] bg-PrimaryGreen flex items-center justify-center">
            <Image src={arrow} alt={"arrow"}></Image>
          </div>
        </Link>
      </div>
    </nav>
  </div>
)

export default BigLandingHeader
