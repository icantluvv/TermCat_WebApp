import Navigation from "@/components/nav/Navigation"

export default function AppLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="xl:px-[2%] flex gap-[2%] bg-white">
      <Navigation />
      <div className="flex-1 min-h-[100svh] xl:pl-[8%] px-[4vw] py-[5vh] pb-[100px] lg:pb-0">
        {children}
      </div>
    </div>
  )
}
