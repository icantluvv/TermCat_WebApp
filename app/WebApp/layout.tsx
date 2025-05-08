import Navigation from "@/components/nav/Navigation"

export default function AppLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen w-full">
      <div className="lg:w-[10%]">
        <Navigation />
      </div>

      {/* <main
        className="w-full gap-6 flex flex-col lg:w-[88%] xl:w-[92%] lg:ml-[12%] xl:ml-[8%] px-[5%] md:px-[3%] 
     xl:h-[80vh] xl:py-[5vh] 2xl:pt-[5vh] py-[5vh]"
      >
        {children}
      </main> */}

      <div className="w-[90%] px-[2%] py-[3%] flex flex-col flex-1">
        {children}
      </div>
    </div>
  )
}
