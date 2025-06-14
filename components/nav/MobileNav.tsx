import NavItem from "./NavItem"

const MobileNav = ({ links }: NavigationProps) => {
  return (
    <nav className="w-full bg-black xl:hidden h-[60px] rounded-t-[25px] lg:rounded-t-[50px] fixed bottom-0 z-[8000] items-center flex">
      <ul className="flex flex-1 justify-around px-[5%]">
        {links.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </ul>
    </nav>
  )
}
export default MobileNav
