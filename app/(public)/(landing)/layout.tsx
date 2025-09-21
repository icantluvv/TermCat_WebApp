import LandingHeader from "@/components/shared/header/landing-header/LandingHeader"
import PageWrapper from "@/components/shared/PageWrapper/PageWrapper"
import Footer from "@/components/molecules/landing-page/Footer/Footer"

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageWrapper>
      <LandingHeader />
      {children}
      <Footer />
    </PageWrapper>
  )
}
