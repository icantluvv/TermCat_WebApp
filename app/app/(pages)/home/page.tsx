import HeaderLayout from "@/components/header/HeaderLayout";
import TariffLayout from "./components/TariffLayout";
import CardsLayout from "./components/CardsLayout";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-6 xl:w-[92%] py-[5vh] xl:ml-[8%] px-[5%]">
      <HeaderLayout
        title={"Привет, Тимофей!"}
        text={"Начни редактировать проект прямо сейчас"}
      ></HeaderLayout>
      <TariffLayout></TariffLayout>
      <CardsLayout></CardsLayout>
    </main>
  )
}
