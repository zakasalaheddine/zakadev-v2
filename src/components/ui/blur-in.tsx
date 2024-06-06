'use client'
import { motion } from 'framer-motion'
import { cn } from '@/libs/utils'
import { ReactNode } from 'react'

interface BlurIntProps {
  children: ReactNode
  className?: string
  component?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'div'
    | 'section'
  variant?: {
    hidden: { filter: string; opacity: number }
    visible: { filter: string; opacity: number }
  }
  duration?: number
  delay?: number
}
const BlurIn = ({
  children,
  className,
  variant,
  component,
  delay = 0,
  duration = 1
}: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 }
  }
  const combinedVariants = variant || defaultVariants

  const Component = component ? motion(component) : motion.h1

  return (
    <Component
      initial="hidden"
      animate="visible"
      transition={{ duration, delay }}
      variants={combinedVariants}
      className={cn(className)}
    >
      {children}
    </Component>
  )
}

export default BlurIn
