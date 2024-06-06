import BlurIn from '@/components/ui/blur-in'
import { profile } from '@/data/profile'
import Link from 'next/link'

export default function Experiences() {
  const { experiences } = profile
  return (
    <BlurIn component="section" className="my-10" delay={0.6}>
      <h3 className="uppercase text-4xl mb-5">Past Experience</h3>
      <div>
        {experiences.map(
          ({ date, company, description, location, title }, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start gap-5 md:gap-14 border-b border-primary/20 py-5"
            >
              <div className="min-w-40">
                <h6 className="uppercase">{date}</h6>
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-col items-start gap-1">
                  <h4 className="uppercase">{title}</h4>
                  <h5 className="text-sm">
                    {company} | {location}
                  </h5>
                </div>
                <div>
                  <p className="text-primary/70">{description}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="mt-5">
        <Link href="/" className="underline text-secondary">
          Download the Resume
        </Link>
      </div>
    </BlurIn>
  )
}
