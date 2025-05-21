import NavItem from "./NavItem"

const MobileNav = ({ links }: NavigationProps) => {
  return (
    <nav className="w-full bg-black lg:hidden h-[6vh] min-h-[50px] rounded-t-[25px] fixed bottom-0 z-[8000] items-center flex">
      <ul className="flex flex-1 gap-[10vw] justify-center">
        {links.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </ul>
    </nav>
  )
}
export default MobileNav
