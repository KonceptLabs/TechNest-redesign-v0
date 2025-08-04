import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant?: "header" | "footer" | "hero"
  className?: string
}

export function Logo({ variant = "header", className }: LogoProps) {
  const sizes = {
    header: "h-12 sm:h-14 md:h-16 lg:h-18",
    footer: "h-10 sm:h-12 md:h-14 lg:h-16",
    hero: "h-16 sm:h-20 md:h-28 lg:h-32",
  }

  return (
    <Link href="#top" className={cn("block", className)}>
      <Image
        src="/logo-name-HORIZONTAL.svg"
        alt="TechNest LLC"
        width={400}
        height={100}
        className={cn("w-auto", sizes[variant])}
        priority
      />
    </Link>
  )
}

export function LogoCompact({ className }: { className?: string }) {
  return (
    <Link href="#top" className={cn("block", className)}>
      <Image
        src="/logo-name-HORIZONTAL.svg"
        alt="TechNest LLC"
        width={200}
        height={50}
        className={cn("w-auto h-10")}
        priority
      />
    </Link>
  )
}
