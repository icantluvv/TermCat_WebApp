import Footer from "./components/Footer/Footer"
import Header from "./components/LandingHeader/LandingHeader"
import EightSection from "./components/Sections/Eight/EightSection"
import FirstSection from "./components/Sections/First/FirstSection"
import SecondSection from "./components/Sections/Second/SecondSection"
import ThirdSection from "./components/Sections/Third/ThirdSection"
import FourthSection from "./components/Sections/Fourth/FourthSection"
import FifthSection from "./components/Sections/Fifth/FifthSection"
import SixSection from "./components/Sections/Six/SixSection"
import MobileHeader from "./components/LandingHeader/MobileLandingHeader"
import MobileFooter from "./components/Footer/MobileFooter"

export default function LandingPage() {
  return (
    <div className="w-full flex min-h-screen flex-col items-center bg-PrimaryBlack px-[5.556vw]">
      <Header></Header>
      {/* <MobileNav></MobileNav> */}
      <MobileHeader></MobileHeader>
      <main className="flex flex-col w-full gap-[10vh] row-start-2 items-center sm:items-start">
        <FirstSection></FirstSection>
        <SecondSection></SecondSection>
        <ThirdSection></ThirdSection>
        <FourthSection></FourthSection>
        <FifthSection></FifthSection>
        <SixSection></SixSection>
        <EightSection></EightSection>
      </main>
      {/* <NineSection></NineSection> */}
      <Footer></Footer>
      <MobileFooter></MobileFooter>
    </div>
  )
}
