import React from "react"
import Text from "@/ui/Text"
import Link from "next/link"
const BlockURL = ({ text1, text2, text3, text4 }: BlockURLProps) => (
  <div className="w-full md:w-[48%] xl:w-1/4 flex flex-col gap-y-4">
    <Text text={"Footer"} tag={"h5"}></Text>
    <div className="flex flex-col transition-all">
      <Link href={""} className="hover:opacity-50 w-auto">
        <Text text={text1} tag={"p-footer"}></Text>
      </Link>
      <Link href={""} className="hover:opacity-50">
        <Text text={text2} tag={"p-footer"}></Text>
      </Link>
      <Link href={""} className="hover:opacity-50">
        <Text text={text3} tag={"p-footer"}></Text>
      </Link>
      <Link href={""} className="hover:opacity-50">
        <Text text={text4} tag={"p-footer"}></Text>
      </Link>
    </div>
  </div>
)

export default BlockURL

interface BlockURLProps {
  text1: string
  text2: string
  text3: string
  text4: string
}
