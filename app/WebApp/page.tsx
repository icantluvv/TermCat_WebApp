import HeaderLayout from "@/components/header/HeaderLayout"
import TariffLayout from "./components/TariffLayout"
import CardsLayout from "./components/CardsLayout"
import { cookies } from "next/headers"

export default async function Home() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value
  const res = await fetch(`${process.env.BACKEND_URL}/users/getMe`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    }
  })

  const User: User = await res.json()

  return (
    <>
      <HeaderLayout
        title={"Привет, " + User.name}
        text={"Начни редактировать проект прямо сейчас"}
      />
      <TariffLayout />
      <CardsLayout />
    </>
  )
}
