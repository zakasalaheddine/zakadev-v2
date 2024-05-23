'use client'

import { cn } from '@/libs/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'

type NavbarLink = ComponentProps<typeof Link>
export default function NavbarLink(props: NavbarLink) {
  const pathname = usePathname()
  const isActive = pathname === (props.href as string)
  return (
    <Link
      {...props}
      className={cn('text-secondary', isActive && 'text-primary')}
    />
  )
}
