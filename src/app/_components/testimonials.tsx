import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { profile } from '@/data/profile'

export default function Testimonials() {
  const {
    testimonials: { items, subtitle, title }
  } = profile
  return (
    <section className="my-10">
      <h3 className="uppercase text-4xl mb-5">{title}</h3>
      <div className="w-full md:w-[55em] space-y-1">
        <p className="text-primary/70">{subtitle}</p>
      </div>

      <div className="relative overflow-hidden">
        <InfiniteMovingCards
          items={items}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  )
}