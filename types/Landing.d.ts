interface StepItemProps {
  id: string
  title: string
  text: string
  reverse?: boolean
}

interface CardItem {
  id: number
  middleText: string
  bigText: string
  smallText: string
  extraContent?: React.ReactNode
}

interface InfoCardProps {
  item: CardItem
}

interface NavigationItem {
  href: string | unknown
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

interface TariffCardProps {
  features: string[]
  choosing: boolean
  setChoosing: React.Dispatch<React.SetStateAction<boolean>>
}

type CardProps = { href: string }

interface FeedbackCardProps {
  name: string
  status: string
  text: string
  image: StaticImageData | string
}
