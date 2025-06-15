"use client"
import { useRouter } from "next/navigation"

const Button: React.FC<ButtonProps> = ({
  variant = "main",
  text,
  href,
  disabled,
  ...props
}) => {
  const router = useRouter()

  const baseClasses =
    "rounded-full flex items-center justify-center select-none font-medium transition-all duration-200"

  let variantClasses = ""

  switch (variant) {
    case "full-green":
      variantClasses = "px-[28px] py-[16px] bg-PrimaryGreen"
      break
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

  const disabledClasses = disabled
    ? "bg-[#e8e8e8] cursor-not-allowed pointer-events-none"
    : ""

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault()
      return
    }

    if (variant === "text" && href) {
      router.push(href)
    }
    if (props.onClick) props.onClick(event)
  }

  return (
    <button
      type={variant === "submit" ? "submit" : "button"}
      className={`${baseClasses} ${variantClasses} ${disabledClasses}`}
      onClick={handleClick}
      disabled={disabled}
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
