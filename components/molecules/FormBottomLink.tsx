import BasicLink from "@/components/atoms/BasicLink"

type FormBottomLinkProps = {
  question: string
  href: string
  move: string
}

function FormBottomLink({ question, href, move }: FormBottomLinkProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-[3px] items-center">
        <p className="text-Gray02 text-[12px] md:text-[14px]">{question}</p>
        <BasicLink href={href} className="font-medium text-[14px] md:text-[16px] hover:opacity-75 active:opacity-60">
          {move}
        </BasicLink>
      </div>
    </div>
  )
}

export default FormBottomLink
