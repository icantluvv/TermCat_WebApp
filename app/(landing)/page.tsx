import Footer from "./components/Footer/Footer"
import TermCat from "./components/Sections/TermCat/TermCat"
import Stats from "./components/Sections/Stats/Stats"
import Points from "./components/Sections/Points/Points"
import Features from "./components/Sections/Features/Features"
import TariffSection from "./components/Sections/Tariffs/TariffSection"
import FAQ from "./components/Sections/FAQ/FAQ"
import Feedback from "./components/Sections/Feedback/Feedback"

export default function LandingPage() {
  return (
    <div className="w-full flex flex-col items-center bg-PrimaryBlack xl:px-[6.5vw] gap-[80px] xl:gap-[160px] relative py-[100px]">
      <main className="flex flex-col w-full gap-[40px] xl:gap-[80px] row-start-2 items-center z-[1000] ">
        <TermCat />
        <Stats />
        <Points />
        <Features />
        <TariffSection />
        <Feedback/>
        <FAQ></FAQ>
      </main>
      <Footer />
    </div>
  )
}
