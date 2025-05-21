import Image from "next/image"
import React from "react"
import back from "@/public/images/homepage/db8ea4379f48b0bd833ddd83078abae6.png"
import google from "@/public/images/profile/google.svg"

const LinkedServices = () => (
  <>
    {/* pc version */}
    <div
      className="bg-[#E8E8E8] hidden lg:flex lg:min-w-[435px] flex-col rounded-[24px] 
    relative self-start"
    >
      <div
        className="w-full pl-[40px] py-[40px] pr-[100px] flex flex-col 
      gap-y-8 z-[5000]"
      >
        <p className="font-cygre font-medium text-[2rem] text-nowrap">
          Привязанные сервисы
        </p>
        <div className="flex gap-4">
          {[1, 2].map((_, index) => (
            <button
              key={index}
              className="max-h-[48px] flex items-center bg-[#0c0c0c] hover:opacity-90 
              active:opacity-80 rounded-[24px] pl-[20px] pr-[28px] py-[8px] transition-all gap-[10px]"
            >
              <Image src={google} alt="Google" className="w-[36px] h-[36px]" />
              <p className="text-white font-cygre font-medium text-[1rems] select-none">
                Google
              </p>
            </button>
          ))}
        </div>
      </div>
      <Image
        src={back}
        className="w-full h-full absolute opacity-10 rounded-[24px]"
        alt=""
      />
    </div>

    {/* mobile version */}
    <div className="bg-[#E8E8E8] lg:hidden flex flex-col rounded-[24px] w-full md:w-full relative self-start">
      <div className="w-full p-[24px] flex flex-col gap-y-8 z-[5000]">
        <p className="font-cygre font-medium text-[1.5rem]">
          Привязанные сервисы
        </p>
        <div className="flex gap-4">
          {[1, 2].map((_, index) => (
            <button
              key={index}
              className="max-h-[48px] flex items-center bg-[#0c0c0c] hover:opacity-90 active:opacity-80 rounded-[24px] pl-[20px] pr-[28px] py-[8px] transition-all gap-[10px]"
            >
              <Image src={google} alt="Google" className="w-[36px] h-[36px]" />
              <p className="text-white text-[0.875rem] lg:text-[1rem] font-cygre font-medium">
                Google
              </p>
            </button>
          ))}
        </div>
      </div>
      <Image
        src={back}
        className="w-full h-full absolute opacity-10 rounded-[24px]"
        alt=""
      />
    </div>
  </>
)

export default LinkedServices
