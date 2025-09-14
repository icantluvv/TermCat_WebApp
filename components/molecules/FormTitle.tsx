import { ReactElement } from "react"

type FormTitleProps = {
  title: ReactElement
  description: ReactElement
}

function FormTitle({ title, description }: FormTitleProps) {
  return (
    <div className="flex flex-col items-center w-full text-center mt-[3vh] gap-[12px] md:gap-[18px] lg:gap-[40px]">
      {title}
      {description}
    </div>
  )
}

export default FormTitle
