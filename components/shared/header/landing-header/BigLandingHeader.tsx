import Image from "next/image"
import Link from "next/link"

import arrow from "@/public/images/landing/arrow.svg"
import landing_header_logo from "@/public/images/landing/logo.svg"
import Typography from "@/components/atoms/typography/Typography"
import Button from "@/components/atoms/button/Button"

const BigLandingHeader = () => (
  <div className="hidden lg:flex w-full h-[80px] justify-center relative items-center z-[5000]">
    <Link href={"/"} className="absolute active:opacity-80">
      <Image src={landing_header_logo} alt="landing header logo" className="w-[104px]" />
    </Link>

    <nav className="flex w-full justify-between items-center">
      <div className="flex gap-[24px]"></div>
      <div className="flex gap-[12px]">
        <Link href={"/registration"}>
          <Button size="big" form="rounded" variant="empty">
            <Typography variants="button" center>
              Зарегистрироваться
            </Typography>
          </Button>
        </Link>

        <Link href={"/login"}>
          <Button size="big" variant="emptyGreen" form="rounded" className="pr-[6px]">
            <Typography variants="button">Войти</Typography>

            <div className="rounded-full min-w-[36px] h-[36px] bg-PrimaryGreen flex items-center justify-center">
              <Image src={arrow} alt={"arrow"}></Image>
            </div>
          </Button>
        </Link>
      </div>
    </nav>
  </div>
)

export default BigLandingHeader
