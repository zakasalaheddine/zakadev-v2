import { cn } from '@/libs/utils'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export default function Button({
  className,
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      {...props}
      className={cn(
        'flex flex-col items-center justify-center py-8 px-20 bg-primary text-background transition-all duration-100 hover:bg-accent hover:text-primary',
        className
      )}
    />
  )
}
