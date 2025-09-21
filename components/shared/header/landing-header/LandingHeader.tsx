import Container from "../../Container/Container"
import BigLandingHeader from "./BigLandingHeader"
import MobileLandingHeader from "./MobileLandingHeader"

const navLinks = [
  { href: "/login", label: "Войти" },
  { href: "/registration", label: "Зарегистрироваться" },
  { href: "/", label: "О компании" }
]

const LandingHeader = () => (
  <Container>
    <header className="sticky top-0 left-0 w-full bg-PrimaryBlack flex z-[9999]">
      <BigLandingHeader />
      <MobileLandingHeader navLinks={navLinks} />
    </header>
  </Container>
)

export default LandingHeader
