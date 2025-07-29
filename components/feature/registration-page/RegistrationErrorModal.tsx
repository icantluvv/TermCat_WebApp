import Button from "@/components/Button/Button"

type RegistrationErrorModalProps = {
  onClose: () => void
}

const RegistrationErrorModal = ({ onClose }: RegistrationErrorModalProps) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1100]">
    <div className="bg-white p-6 rounded-xl max-w-xs w-full text-center">
      <h2 className="text-lg font-semibold mb-4">Ошибка в данных</h2>
      <p className="mb-6">
        Пожалуйста, проверьте правильность введённых данных.
      </p>
      <Button text="Закрыть" variant="submit" onClick={onClose} />
    </div>
  </div>
)

export default RegistrationErrorModal
