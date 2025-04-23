import HeaderLayout from "@/components/header/HeaderLayout"
import TariffLayout from "./components/TariffLayout"
import CardsLayout from "./components/CardsLayout"
import { UserService } from "@/lib/services/user.service"

export default async function Home() {
  const User = await UserService.getInstance().getUser()
  return (
    <>
      <HeaderLayout
        title={"Привет, " + User?.name}
        text={"Начни редактировать проект прямо сейчас"}
      ></HeaderLayout>
      <TariffLayout></TariffLayout>
      <CardsLayout></CardsLayout>
    </>
  )
}
