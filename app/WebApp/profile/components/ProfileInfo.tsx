import Image from "next/image"
import React from "react"
import redact_info from "@/public/images/profile/redact_info.svg"
import back from "@/public/images/homepage/db8ea4379f48b0bd833ddd83078abae6.png"
import InputField from "@/components/input/InputField"
import Button from "@/components/Button/Button"

const ProfileInfo = ({ User }: UserProps) => (
  <>
    <div className="bg-[#E8E8E8] flex rounded-[24px] w-full relative ">
      {/* info block */}
      <div className="z-[5000] p-[24px] lg:p-[40px] flex flex-col lg:flex-row gap-y-[24px] lg:gap-x-4 2xl:gap-x-10 lg:gap-y-0 w-full">
        {/* profile image */}
        <div className="lg:min-w-[150px] xl:min-w-[200px]">
          <div className="w-[126px] h-[126px] lg:w-[150px] lg:h-[150px] xl:w-[175px] xl:h-[175px] 2xl:w-[200px] 2xl:h-[200px] bg-[#C2F041] rounded-[50%]"></div>
        </div>

        {/* input places*/}
        <div className="flex w-full flex-col gap-y-[24px]">
          <InputField label="Имя" type="text" placeholder={`${User.name}`} />
          <InputField
            label="E-mail"
            type="email"
            placeholder={`${User.email}`}
          />
          <InputField label="Старый пароль" type="password" placeholder="" />
          <InputField label="Новый пароль" type="password" placeholder="" />
          <div className="max-w-[300px]">
            <Button text={"Сохранить"} variant="main" type="button"></Button>
          </div>
        </div>

        {/* redact button */}

        <button
          className="bg-black rounded-[50%] min-w-[48px] h-[48px] absolute 
        lg:relative top-[24px] right-[24px] lg:top-0 lg:right-0 flex items-center justify-center"
        >
          <Image
            src={redact_info}
            alt="Редактировать"
            className="w-1/2 h-1/2"
          />
        </button>
      </div>

      {/* background */}
      <Image
        src={back}
        className="w-full h-full absolute opacity-10 rounded-[24px]"
        alt="background"
      />
    </div>
  </>
)

export default ProfileInfo
