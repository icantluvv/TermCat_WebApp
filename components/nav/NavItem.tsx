import Link from "next/link"
import Image from "next/image"

const NavItem = ({
  href,
  icon,
  alt
}: {
  href: string
  icon: string
  alt: string
}) => (
  <li>
    <Link href={href} className="flex justify-center items-center">
      <Image
        src={icon}
        alt={alt}
        className="w-[48px] h-[48px] hover:opacity-70 transition-all"
      />
    </Link>
  </li>
)

export default NavItem
