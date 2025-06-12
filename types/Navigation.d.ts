interface NavigationItem {
  href: string
  icon: string
  alt: string
}

interface NavigationProps {
  links: NavigationItem[]
}

interface LandingLinksProps {
  navLinks: headerLink[]
}

interface headerLink {
  href: string
  label: string
}
