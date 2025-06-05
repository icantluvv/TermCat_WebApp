import Navigation from "@/components/nav/Navigation"

export default function AppLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="xl:px-[2%] flex gap-[2%]">
      <Navigation />
      <div className="flex-1 xl:pl-[8%] px-[4%] py-[5vh] pb-[15vh] xl:py-[3%]">
        {children}
      </div>
    </div>
  )
}
