import LandingHeader from "./components/LandingHeader/LandingHeader"

export default function LandingLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <LandingHeader />
      {children}
    </>
  )
}
