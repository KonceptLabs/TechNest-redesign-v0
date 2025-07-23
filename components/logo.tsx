import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "header" | "footer" | "hero"
  className?: string
}

export function Logo({ variant = "header", className }: LogoProps) {
  const sizes = {
    header: "h-8 sm:h-10 md:h-12 lg:h-14",
    footer: "h-6 sm:h-8 md:h-10 lg:h-12",
    hero: "h-16 sm:h-20 md:h-28 lg:h-32",
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <svg className={cn("w-auto", sizes[variant])} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="15" width="30" height="30" rx="5" className="fill-blue-600 dark:fill-blue-400" />
        <rect x="15" y="20" width="20" height="20" rx="3" className="fill-white dark:fill-stone-900" />
        <rect x="18" y="23" width="14" height="14" rx="2" className="fill-blue-600 dark:fill-blue-400" />
        <text x="50" y="25" className="fill-stone-800 dark:fill-stone-100 text-xs font-bold">
          TechNest
        </text>
        <text x="50" y="40" className="fill-stone-600 dark:fill-stone-300 text-[8px]">
          Smart Home Solutions
        </text>
      </svg>
    </div>
  )
}

export function LogoCompact({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className="w-10 h-10 bg-blue-600 dark:bg-blue-400 rounded-lg flex items-center justify-center">
        <div className="w-6 h-6 bg-white dark:bg-stone-900 rounded flex items-center justify-center">
          <div className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-sm"></div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-stone-800 dark:text-stone-100">
          TechNest
        </span>
        <span className="text-base sm:text-lg font-bold text-stone-600 dark:text-stone-300 -mt-1">Smart Home</span>
      </div>
    </div>
  )
}
