"use client"
import Button from "@/components/core/button/Button"
import Typography from "@/components/core/typography/Typography"
import React, { useState } from "react"

type QuestionProps = {
  title: string
  text: string
}

const Question = ({ title, text }: QuestionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  function openQuestion() {
    setIsOpen(!isOpen)
  }

  return (
    <Button
      variant="default"
      form="default"
      size="default"
      onClick={openQuestion}
      className={`w-full mt-6 flex flex-col ${
        isOpen ? "gap-[12px] delay-0 " : "gap-[0px] delay-200"
      } relative rounded-[24px] bg-[#f4f4f4] hover:bg-[#eaeaea] border-[#dde1e6] border p-[24px] `}
    >
      <Typography
        className="w-[90%] text-PrimaryBlack"
        start
        variants="h5"
        weight="medium"
      >
        {title}
      </Typography>

      <div
        className="overflow-hidden transition-all duration-500 ease-in-out text-start"
        style={{ maxHeight: isOpen ? "500px" : "0px", opacity: isOpen ? 1 : 0 }}
      >
        <Typography
          className="text-[16px] lg:text-[18px] text-PrimaryBlack/60 max-w-[95%]"
          variants={"button"}
        >
          {text}
        </Typography>
      </div>

      <div className="absolute w-full h-full left-0 top-0 rounded-[24px] transition-all group">
        <div className="right-[3vw] top-[2vh] lg:right-[30px] lg:top-[20px] absolute">
          <div
            className={`w-[24px] h-[24px] bg-primaryGreen hover:bg-primaryGreenActive rounded-full flex items-center justify-center transition-all duration-300`}
          >
            <div className="rounded-[50%] w-[24px] h-[24px] bg-PrimaryGreen flex justify-center items-center">
              <div
                className={`w-[2px] h-[12px] bg-PrimaryBlack absolute rotate-0 transition-transform duration-300 ${
                  isOpen ? "rotate-[90deg]" : ""
                }`}
              />
              <div className="w-[2px] h-[12px] rotate-90 bg-PrimaryBlack absolute" />
            </div>
          </div>
        </div>
      </div>
    </Button>
  )
}

export default Question
