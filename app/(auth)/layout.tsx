import AuthHeader from "./components/AuthHeader"

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col">
      <AuthHeader></AuthHeader>
      {children}
    </div>
  )
}
