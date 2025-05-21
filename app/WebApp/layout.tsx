import Navigation from "@/components/nav/Navigation"

export default function AppLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex">
      <Navigation />
      <div className="md:pl-[10%] px-[3%]">{children}</div>
    </div>
  )
}
