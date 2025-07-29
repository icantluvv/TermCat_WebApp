import { Poppins } from "next/font/google"
import "../globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={poppins.variable}>
    <body>{children}</body>
    </html>
  )
}
