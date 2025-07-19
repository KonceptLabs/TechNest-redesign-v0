"use client"

import { useEffect, useRef } from "react"

export function HeroVideoBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size to match container
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation variables
    const nodes: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      pulse: number
    }> = []

    // Create nodes representing smart home devices
    for (let i = 0; i < 15; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 4 + 2,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.02
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx
        node.y += node.vy
        node.pulse += 0.05

        // Bounce off edges
        if (node.x <= node.size || node.x >= canvas.width - node.size) node.vx *= -1
        if (node.y <= node.size || node.y >= canvas.height - node.size) node.vy *= -1

        // Keep nodes in bounds
        node.x = Math.max(node.size, Math.min(canvas.width - node.size, node.x))
        node.y = Math.max(node.size, Math.min(canvas.height - node.size, node.y))

        // Draw connections to nearby nodes
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const distance = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2))

            if (distance < 120) {
              const opacity = 0.6 * (1 - distance / 120)
              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(otherNode.x, otherNode.y)
              ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})` // Blue-500
              ctx.lineWidth = 1.5
              ctx.stroke()
            }
          }
        })

        // Draw node with pulsing effect
        const pulseSize = node.size + Math.sin(node.pulse) * 1.5

        // Outer glow
        ctx.beginPath()
        ctx.arc(node.x, node.y, pulseSize + 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, 0.2)`
        ctx.fill()

        // Main node
        ctx.beginPath()
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, 0.8)`
        ctx.fill()

        // Inner highlight
        ctx.beginPath()
        ctx.arc(node.x - pulseSize * 0.3, node.y - pulseSize * 0.3, pulseSize * 0.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(147, 197, 253, 0.6)`
        ctx.fill()
      })

      // Add floating particles
      for (let i = 0; i < 8; i++) {
        const x = Math.sin(time + i) * 100 + canvas.width / 2 + (i - 4) * 80
        const y = Math.cos(time * 0.7 + i) * 50 + canvas.height / 2 + (i - 4) * 60

        ctx.beginPath()
        ctx.arc(x, y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(147, 197, 253, ${0.4 + Math.sin(time * 2 + i) * 0.2})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40 dark:opacity-30"
      style={{ pointerEvents: "none" }}
    />
  )
}
