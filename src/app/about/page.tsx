import { profile } from '@/data/profile'
import Image from 'next/image'

export default function AboutPage() {
  const { image, aboutHeading, aboutContent } = profile
  return (
    <main className="container flex flex-col">
      <div className="flex items-start gap-5">
        <div className='md:w-[30em] flex-shrink-0'>
          <Image src={image} alt={aboutHeading} width={419} height={627} className='w-full h-auto object-cover' />
        </div>
        <div className='flex flex-col items-start gap-6'>
          <h1 className='text-8xl font-semibold'>{aboutHeading}</h1>
          <div className='space-y-3'>
            {aboutContent.map((content, idx) => (
              <p className='text-primary/70' key={`content_${idx}`}>{content}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
