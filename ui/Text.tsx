import React from "react"

const Text = ({ text, tag }: TextProps) => {
  switch (tag) {
    case "h1":
      return (
        <h1 className="text-white text-[3.375rem] font-semibold">{text}</h1>
      )

    case "h1-green":
      return (
        <h1 className="text-primaryGreen text-[3.375rem] font-semibold">
          {text}
        </h1>
      )
    case "h2":
      return <h2 className="text-white text-[3rem] font-medium">{text}</h2>

    case "h2-green":
      return (
        <h2 className="text-primaryGreen text-[3rem] font-medium">{text}</h2>
      )

    case "h3":
      return <h3 className="text-black text-[1.5rem] font-medium">{text}</h3>

    case "h3-white":
      return <h3 className="text-white text-[1.5rem] font-medium">{text}</h3>

    case "h5":
      return <p className=" text-[1.125rem] text-white font-medium">{text}</p>

    case "p":
      return <p className=" text-[1.125rem] text-white font-thin">{text}</p>

    case "p-footer":
      return <p className=" text-[1rem] text-white font-thin">{text}</p>

    case "p-black":
      return (
        <p className="text-[1.125rem] text-black font-thin drop-shadow-lg">
          {text}
        </p>
      )
  }
}

export default Text

interface TextProps {
  text: string
  tag: string
}
