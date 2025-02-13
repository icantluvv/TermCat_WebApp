import CardsLayout from "@/components/homepage/CardsLayout"
import HeaderLayout from "@/components/homepage/HeaderLayout"
import TariffLayout from "@/components/homepage/TariffLayout"

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-6 xl:w-[92%] py-[5vh] xl:ml-[8%] px-[5%] xl:h-screen">
      <HeaderLayout></HeaderLayout>
      <TariffLayout></TariffLayout>
      <CardsLayout></CardsLayout>
    </main>
  )
}
