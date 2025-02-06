"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  animation?: "fadeIn" | "slideUp" | "slideRight" | "scale"
  delay?: number
}

export default function AnimateOnScroll({
  children,
  className = "",
  animation = "fadeIn",
  delay = 0,
}: AnimateOnScrollProps) {
  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true },
      transition: { duration: 0.5, delay },
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay },
    },
    slideRight: {
      initial: { opacity: 0, x: -50 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      transition: { duration: 0.5, delay },
    },
  }

  return (
    <motion.div className={className} {...animations[animation]}>
      {children}
    </motion.div>
  )
}

