import { profile } from '@/data/profile'

export default function Hero() {
  const { name, position, about } = profile
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-7xl md:text-9xl font-semibold uppercase">{name}</h1>

      <div className="w-full md:w-[55em] space-y-1">
        <h2 className="uppercase text-accent">{position}</h2>
        <p className="text-primary/70">{about}</p>
      </div>
    </div>
  )
}
