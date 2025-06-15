import Navigation from "@/components/nav/Navigation"

export default function DialogsLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="xl:px-[2%] flex-1 flex gap-[2%] bg-PageBG">
      <Navigation />

      <div className="flex-1 px-[4vw] xl:px-0 xl:ml-[8%] xl:pb-0 xl:pr-0 ">
        {children}
      </div>
    </div>
  )
}
