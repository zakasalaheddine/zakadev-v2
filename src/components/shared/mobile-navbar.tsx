'use client'

import { MenuIcon } from 'lucide-react'
import NavbarLink from './navbar-link'
import { useState } from 'react'
import { cn } from '@/libs/utils'

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button className='md:hidden' onClick={() => setIsOpen((prev) => !prev)}>
        <MenuIcon />
      </button>
      <div className={cn("w-full py-5 hidden ", isOpen && 'block md:hidden')}>
        <div className="space-y-3 flex flex-col items-center md:hidden">
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/work">Work</NavbarLink>
          <NavbarLink href="/about">About</NavbarLink>
        </div>
        <div className="flex md:hidden flex-col items-center text-secondary my-5">
          <span>[ 02 ] Get in contact</span>
          <span>{`salaheddine@zakadev.com`}</span>
        </div>
      </div>
    </>
  )
}
