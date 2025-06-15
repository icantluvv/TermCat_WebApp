interface NavItem {
  href: string | unknown
  icon: string
  alt: string
}

interface NavProps {
  links: NavigationItem[]
}
