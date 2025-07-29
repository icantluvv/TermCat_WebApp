"use client"

import Image from "next/image"
import {useFeedbackStore} from "@/store/LandingFeedbackPeopleStore"

import human1 from "@/public/images/landing/feedback/human1.png"
import human2 from "@/public/images/landing/feedback/human2.png"
import human3 from "@/public/images/landing/feedback/human3.png"
import human4 from "@/public/images/landing/feedback/human4.png"
import human5 from "@/public/images/landing/feedback/human5.png"
import human6 from "@/public/images/landing/feedback/human6.png"
import human7 from "@/public/images/landing/feedback/human7.png"

import arrow from "@/public/images/landing/arrow.svg"
import {feedbacks} from "@/app/(landing)/constants";


const FeedbackSlider = () => {
    const {activeIndex, next, prev, setActiveIndex} = useFeedbackStore()

    const getShiftedArray = () => {
        const len = feedbacks.length
        const centerIndex = Math.floor(len / 2)
        const result = []
        for (let i = -centerIndex; i <= centerIndex; i++) {
            const index = (activeIndex + i + len) % len
            result.push({...feedbacks[index], realIndex: index})
        }
        return result
    }

    const visibleFeedbacks = getShiftedArray()
    const activeFeedback = feedbacks[activeIndex]

    return (
        <div className="w-full flex-col relative items-center gap-[40px] hidden xl:flex">
            <div className="text-center max-w-[850px] flex flex-col gap-[40px]">
                <p className="text-LightGray text-[18px] h-[100px]">
                    {activeFeedback.text}
                </p>
                <div className="flex flex-col gap-[6px]">
                    <h4 className="font-semibold text-LightGray text-[24px]">
                        {activeFeedback.name}
                    </h4>
                    <p className="text-[18px] text-Gray02">{activeFeedback.status}</p>
                </div>
            </div>

            <div className="flex items-start h-[270px] overflow-hidden">
                {visibleFeedbacks.map((item, idx) => {
                    const isActive = item.realIndex === activeIndex

                    const distanceFromCenter = Math.abs(
                        idx - Math.floor(visibleFeedbacks.length / 2)
                    )

                    const scale = isActive ? 1 : 1.75 - distanceFromCenter * 0.26
                    const marginTop = isActive ? 0 : 70 + distanceFromCenter * 40

                    return (
                        <div
                            key={idx}
                            onClick={() => setActiveIndex(item.realIndex)}
                            className={`overflow-hidden ${
                                isActive ? "w-[314px] h-[314px]" : "w-[150px] h-[150px]"
                            } rounded-full cursor-pointer transition-all duration-300 ${
                                isActive ? "bg-PrimaryGreen z-[1000]" : "bg-LightGray"
                            }`}
                            style={{
                                transform: `scale(${scale})`,
                                marginTop: `${marginTop}px`
                            }}
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                className="object-cover w-full h-full"
                                width={isActive ? 314 : 150}
                                height={isActive ? 314 : 150}
                            />
                        </div>
                    )
                })}
            </div>

            <div className="flex w-full absolute justify-between">
                <button
                    onClick={() => prev(feedbacks.length)}
                    className="w-[48px] h-[48px] bg-LightGray hover:bg-PrimaryGreen active:bg-PrimaryGreenActive rounded-full flex items-center justify-center rotate-[224deg]"
                >
                    <Image src={arrow} alt=""/>
                </button>
                <button
                    onClick={() => next(feedbacks.length)}
                    className="w-[48px] h-[48px] bg-LightGray hover:bg-PrimaryGreen active:bg-PrimaryGreenActive rounded-full flex items-center justify-center rotate-[44deg]"
                >
                    <Image src={arrow} alt=""/>
                </button>
            </div>
        </div>
    )
}

export default FeedbackSlider
