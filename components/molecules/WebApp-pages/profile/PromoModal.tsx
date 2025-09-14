"use client"
import { usePromoStore } from "@/store/PromoStore"
import { useState } from "react"
import Button from "@/components/Button/Button"
import { PaymentService } from "@/lib/services/payment.service"
import { useEffect } from "react"

const PromoModal = () => {
  const { isPromoModalOpen, closePromoModal } = usePromoStore()
  const [promoCode, setPromoCode] = useState("")

  const paymentService = PaymentService.getInstance()

  useEffect(() => {
    if (isPromoModalOpen) {
      // Блокируем прокрутку
      document.body.style.overflow = "hidden"
    } else {
      // Восстанавливаем прокрутку
      document.body.style.overflow = ""
    }

    // Очистка эффекта при размонтировании или изменении isPromoModalOpen
    return () => {
      document.body.style.overflow = ""
    }
  }, [isPromoModalOpen])

  if (!isPromoModalOpen) return null

  const handleActivate = async () => {
    try {
      await paymentService.activeSubByPromo(promoCode)
      closePromoModal()
      location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-PrimaryBlack bg-opacity-50 z-[9999]">
      <div className="bg-PageBG p-6 rounded-2xl flex flex-col gap-4 w-[300px]">
        <h3 className="text-[16px] xl:text-[18px] font-semibold">Введите промокод</h3>
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          className="border p-2 rounded"
        />
        <Button variant="submit" onClick={handleActivate}>
          Активировать
        </Button>
        <Button variant="text" onClick={closePromoModal}>
          Отмена
        </Button>
      </div>
    </div>
  )
}

export default PromoModal
