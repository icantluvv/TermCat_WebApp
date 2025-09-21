import Navigation from "@/components/shared/nav/Navigation"

export default function ProfileLayout({
                                        children
                                      }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="xl:px-[2%] flex gap-[2%] bg-PageBG ">
      <Navigation />
      <div className="flex-1 min-h-[100svh] xl:pl-[8%] xl:px-0 pt-[5vh] pb-[100px] xl:pb-[5vh] px-[4vw]">
        {children}
      </div>
    </div>
  )
}
