import BlurIn from '@/components/ui/blur-in'
import { profile } from '@/data/profile'

export default function Hero() {
  const { name, position, about } = profile
  return (
    <div className="flex flex-col space-y-4">
      <BlurIn className="text-7xl md:text-9xl font-semibold uppercase font-display text-center tracking-[-0.02em] drop-shadow-sm">
        {name}
      </BlurIn>

      <div className="w-full md:w-[55em] space-y-1">
        <BlurIn component="h2" className="uppercase text-accent" delay={0.3}>
          {position}
        </BlurIn>
        <BlurIn component="p" className="text-primary/70" delay={0.4}>
          {about}
        </BlurIn>
      </div>
    </div>
  )
}
