import MobileNavbar from './mobile-navbar'
import NavbarLink from './navbar-link'

export default function Navbar() {
  return (
    <header className="flex items-center justify-between flex-wrap sticky top-0 py-5 container">
      <div className="flex flex-col text-secondary">
        <span>[ 01 ] Hire Me</span>
        <span>{`Let's Work Together.`}</span>
      </div>
      <div className="space-x-8 hidden md:block">
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/work">Work</NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
      </div>
      <div className="hidden md:flex flex-col text-secondary ">
        <span>[ 02 ] Get in contact</span>
        <span>{`salaheddine@zakadev.com`}</span>
      </div>
      <MobileNavbar />
    </header>
  )
}
