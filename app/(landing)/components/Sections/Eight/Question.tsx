"use client"
import React, { useState } from "react"
import Text from "@/ui/Text"
// import Image from "next/image"

// import minus from "@/public/assets/images/minus.svg"
// import plus from "@/public/assets/images/plus.svg"

const Question = ({ title, text }: QuestionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`w-full flex flex-col ${
        isOpen ? "gap-[12px] delay-0 " : "gap-[0px] delay-200"
      } relative rounded-[24px] bg-[#f4f4f4] hover:bg-[#eaeaea] border-[#dde1e6] border p-[24px] transition-all duration-300`}
    >
      <Text text={title} tag={"h3"}></Text>

      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: isOpen ? "500px" : "0px", opacity: isOpen ? 1 : 0 }}
      >
        <Text text={text} tag={"p-black"}></Text>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute w-full h-full left-0 top-0 rounded-[24px] transition-all group"
      >
        <div className="right-[30px] top-[20px] absolute">
          <div
            className={`w-[24px] h-[24px] bg-primaryGreen hover:bg-primaryGreenActive rounded-full flex items-center justify-center transition-all duration-300 ${
              isOpen ? "rotate-[135deg]" : "rotate-0"
            }`}
          >
            <span className="text-black text-xl leading-none mb-[2px]">+</span>
          </div>
        </div>
      </button>
    </div>
  )
}

export default Question

interface QuestionProps {
  title: string
  text: string
}
