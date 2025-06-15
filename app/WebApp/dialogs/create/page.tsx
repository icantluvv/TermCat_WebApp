import CreateDialogChat from "../components/CreateDialogChat"

const CreateDialogPage = async () => {
  return (
    <div className="flex flex-col w-full items-center h-[100svh] overflow-hidden ">
      {/* <div className="hidden xl:flex w-full pt-[5svh]">
        <HeaderLayout title={dialog.title} text="" />
      </div> */}
      <CreateDialogChat />
    </div>
  )
}

export default CreateDialogPage
