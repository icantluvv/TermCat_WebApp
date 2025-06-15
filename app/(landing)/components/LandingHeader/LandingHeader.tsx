import BigLandingHeader from "./BigLandingHeader"
import MobileLandingHeader from "./MobileLandingHeader"

const navLinks = [
  { href: "/WebApp", label: "Войти" },
  { href: "/signup", label: "Зарегистрироваться" },
  { href: "/", label: "О компании" }
]

const LandingHeader = () => (
  <header className="fixed top-0 left-0 w-full bg-PrimaryBlack flex z-[5000]">
    <BigLandingHeader />
    <MobileLandingHeader navLinks={navLinks} />
  </header>
)

export default LandingHeader
