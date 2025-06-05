import PcHeaderButtons from "./PcHeaderButtons"
import MobileHeaderButtons from "./MobileHeaderButtons"

const HeaderLayout = ({ title, text }: HeaderProps) => {
  return (
    <header className="flex w-full justify-between items-center md:flex-row flex-col-reverse gap-y-[23px]">
      <div className="flex flex-col gap-x-2 gap-y-4 md:max-w-[90%]">
        <h2 className="text-[1.75rem] xl:text-[3rem] font-medium font-cygre">
          {title}
        </h2>
        <p className="text-[1.25rem] xl:text-[1.5rem] font-poppins font-regular">
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
