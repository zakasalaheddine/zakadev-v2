import Link from 'next/link'
import Button from '../ui/button'
import { profile } from '@/data/profile'
import { Fragment } from 'react'

export default function Footer() {
  const { socials } = profile
  return (
    <>
      <section className="container my-10">
        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-7xl md:text-9xl font-semibold text-primary">
            Have a Project
          </h1>

          <div className="w-full md:w-[55em] space-y-1">
            <p className="text-primary/70">
              Let my expertise as a seasoned product designer transform your
              ideas into standout designs. I specialize in bringing innovation
              and functionality to the table, ensuring your project surpasses
              expectations.
            </p>
          </div>
          <Link href="mailto:salaheddine@zakadev.com">
            <Button>{`Let's Talk`}</Button>
          </Link>
        </div>
      </section>
      <footer className="container">
        <div className="flex items-center justify-between border-t border-secondary/25 py-10">
          <div className="text-primary/70">
            © ZAKA Salah Eddine. All Rights Reserved 2024.
          </div>
          <div className="space-x-4 text-secondary">
            <Link href={socials.twitter} target='_blank'>Twitter (X.com)</Link>
            <Link href={socials.linkedin} target='_blank'>Linkedin</Link>
            <Link href={socials.github} target='_blank'>Github</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
