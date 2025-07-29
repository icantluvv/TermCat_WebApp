import PcHeaderButtons from "./PcHeaderButtons"
import MobileHeaderButtons from "./MobileHeaderButtons"

const HeaderLayout = ({ title, text }: HeaderProps) => {
  return (
    <header className="flex w-full xl:justify-between xl:items-center xl:flex-row flex-col-reverse gap-y-[23px]">
      <div className="flex flex-col gap-x-2 gap-y-4 md:max-w-[90%]">
        <h2 className="text-[1.5rem] xl:text-[32px] 3xl:text-[3rem] ">
          {title}
        </h2>
        <p className="text-[1rem] w-[80vw] xl:w-auto xl:text-[1.5rem]">
          {text}
        </p>
      </div>

      <PcHeaderButtons />
      <MobileHeaderButtons />
    </header>
  )
}

export default HeaderLayout

interface HeaderProps {
  title: string
  text: string
}
