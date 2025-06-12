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
    "transition-colors rounded-[24px] flex items-center justify-center select-none"
  let variantClasses = ""

  switch (variant) {
    case "full-green":
      variantClasses = "px-[28px] py-[16px] bg-PrimaryGreen rounded-[32px]"

    case "submit":
      variantClasses =
        "text-black bg-[#C2F041] active:bg-black/10 h-[48px] w-full"
      break
    case "main":
      variantClasses =
        "bg-[#C2F041] hover:bg-[#B9E53E] active:bg-[#B0D93C] px-[28px] py-[16px] font-cygre font-medium"
      break
    case "upgrade":
      variantClasses = "px-[28px] py-4 bg-[#E8E8E8] h-[48px] gap-[20px]"
      break
    case "text":
      variantClasses = "text-[#0c0c0c] font-semibold bg-transparent"
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
