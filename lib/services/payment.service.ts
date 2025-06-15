import axios from "axios"

export class PaymentService {
  private static instance: PaymentService

  private constructor() {}

  public static getInstance() {
    if (!PaymentService.instance) {
      PaymentService.instance = new PaymentService()
    }
    return PaymentService.instance
  }

  async activeSubByPromo(code: string) {
    try {
      const response = await axios.post("/api/payment/activatePromo", { code })
      return {
        success: true,
        data: response.data
      }
    } catch (error: unknown) {
      console.error("Ошибка при активации подписки по промокоду:", error)

      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          return {
            success: false,
            message: error.response.data.message || "Подписка уже активирована"
          }
        }

        return {
          success: false,
          message:
            error.response?.data?.message ||
            "Произошла ошибка при активации подписки"
        }
      }

      return {
        success: false,
        message: "Неизвестная ошибка при активации подписки"
      }
    }
  }
}
