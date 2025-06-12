import Image, { StaticImageData } from "next/image"
import feedback_back_mobile from "@/public/images/feedback/feedback_back_mobile.svg"

interface FeedbackCardProps {
  name: string
  status: string
  text: string
  image: StaticImageData | string
}

const FeedbackCard = ({ name, status, text, image }: FeedbackCardProps) => {
  return (
    <div className="relative w-[262px] h-[371px] overflow-hidden flex items-end justify-center">
      <Image
        src={feedback_back_mobile}
        width={262}
        height={371}
        alt="feedback card background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <Image
        src={image}
        alt={name}
        width={126}
        height={126}
        className="rounded-full absolute top-0"
      />
      <div className="relative gap-4 flex flex-col justify-between h-[230px] px-[1vw] pb-4 text-PrimaryBlack">
        <div className="flex flex-col items-center text-center gap-2">
          <div>
            <h4 className="font-bold text-[18px]">{name}</h4>
            <p className="text-[12px]">{status}</p>
          </div>
        </div>
        <p className="text-[14px] text-center line-clamp-6">{text}</p>
      </div>
    </div>
  )
}

export default FeedbackCard
