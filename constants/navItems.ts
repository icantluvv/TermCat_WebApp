import home from "@/public/images/sidebar/home.svg"
import profile from "@/public/images/sidebar/profile.svg"
import chat from "@/public/images/sidebar/chat.svg"
import history from "@/public/images/sidebar/history.svg"
import nav_logo from "@/public/images/sidebar/nav_logo.svg"
import quit from "@/public/images/sidebar/quit.svg"

export const navItems = [
  { href: "/", icon: nav_logo, alt: "Logo" },
  { href: "/WebApp", icon: home, alt: "Home" },
  { action: "newDialog", icon: chat, alt: "New Dialog" },
  { href: "/WebApp/dialogs", icon: history, alt: "Dialogs History" },
  { href: "/WebApp/profile", icon: profile, alt: "Profile" },
  { action: "logout", icon: quit, alt: "Logout" }
]
