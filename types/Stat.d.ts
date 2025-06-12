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
