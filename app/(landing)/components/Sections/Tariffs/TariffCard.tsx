"use client"

import { useState } from "react"
import MobileTariffCard from "./MobileTariffCard"
import BigTariffCard from "./BigTariffCard"

const features = [
  "Поддержка одной языковой пары",
  "Доступ к основной базе терминологии",
  "Перевод текста объемом 1600 символов"
]

const TariffCard = () => {
  const [choosing, setChoosing] = useState(false)

  return (
    <>
      <BigTariffCard
        features={features}
        choosing={choosing}
        setChoosing={setChoosing}
      />
      <MobileTariffCard
        features={features}
        setChoosing={setChoosing}
        choosing={choosing}
      />
    </>
  )
}

export default TariffCard
