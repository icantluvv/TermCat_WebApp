import LandingHeader from "@/components/shared/header/landing-header/LandingHeader"
import PageWrapper from "@/components/shared/PageWrapper/PageWrapper"
import Container from "@/components/shared/Container/Container"
import Footer from "@/components/feature/landing-page/Footer/Footer"

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageWrapper>
      <Container>
        <LandingHeader />
        {children}
        <Footer />
      </Container>
    </PageWrapper>
  )
}
