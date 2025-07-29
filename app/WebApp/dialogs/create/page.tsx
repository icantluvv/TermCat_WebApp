import CreateDialogChat from "../../../../components/feature/WebApp-pages/dialogs/CreateDialogChat"
import InstructionChatModile from "../../../../components/feature/WebApp-pages/dialogs/InstructionChatModal"

const CreateDialogPage = async () => {
  return (
    <main className="flex flex-col w-full items-center h-[100svh] overflow-hidden relative">
      <InstructionChatModile />
      <CreateDialogChat />
    </main>
  )
}

export default CreateDialogPage
