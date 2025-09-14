import { ReactElement } from "react"
import Typography from "@/components/atoms/typography/Typography"

type FormTitleProps = {
  title: ReactElement
  description: ReactElement
}

function FormTitle({ title, description }: FormTitleProps) {
  return (
    <div className="flex flex-col items-center w-full text-center mt-[3vh] gap-[12px] md:gap-[18px] lg:gap-[40px]">
      <Typography variants="h3">{title}</Typography>
      <Typography variants="custom" className="text-[12px] lg:text-[14px] text-Gray02">
        {description}
      </Typography>
    </div>
  )
}

export default FormTitle
