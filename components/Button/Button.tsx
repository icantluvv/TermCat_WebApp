"use client"
import { useRouter } from "next/navigation"

const Button: React.FC<ButtonProps> = ({
  variant = "main",
  text,
  href,
  ...props
}) => {
  const router = useRouter()

  const baseClasses =
    "rounded-full flex items-center justify-center select-none font-medium"
  let variantClasses = ""

  switch (variant) {
    case "full-green":
      variantClasses = "px-[28px] py-[16px] bg-PrimaryGreen"

    case "submit":
      variantClasses =
        "text-PrimaryBlack bg-PrimaryGreen active:bg-PrimaryGreenActive py-[12px] text-[14px] lg:text-[16px] w-full"
      break
    case "main":
      variantClasses =
        "text-PrimaryBlack bg-PrimaryGreen hover:bg-PrimaryGreenActive active:bg-PrimaryGreenActive text-[14px] lg:text-[16px] px-[28px] py-[16px]"
      break
    case "upgrade":
      variantClasses = "px-[28px] py-4 bg-[#E8E8E8] h-[48px] gap-[20px]"
      break
    case "text":
      variantClasses = "text-[#0c0c0c] bg-transparent"
      break
    default:
      variantClasses = ""
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === "text" && href) {
      router.push(href)
    }
    if (props.onClick) props.onClick(event)
  }

  return (
    <button
      type={variant === "submit" ? "submit" : "button"}
      className={`${baseClasses} ${variantClasses}`}
      onClick={handleClick}
      {...props}
    >
      {text}
    </button>
  )
}
export default Button

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "submit" | "main" | "upgrade" | "text" | "full-green"
  text: string
  href?: string
}
