interface LogoProps {
  variant?: "header" | "footer" | "hero" | "compact"
  className?: string
}

export function Logo({ variant = "header", className = "" }: LogoProps) {
  const sizeClasses = {
    header: "h-8 w-auto sm:h-10 md:h-12 lg:h-14",
    footer: "h-6 w-auto sm:h-8 md:h-10",
    hero: "h-12 w-auto sm:h-16 md:h-20 lg:h-24",
    compact: "h-6 w-auto sm:h-8",
  }

  return (
    <img
      src="/logo-technest.svg"
      alt="TechNest Logo"
      className={`${sizeClasses[variant]} transition-all duration-200 dark:brightness-110 ${className}`}
    />
  )
}

// Mobile-optimized compact logo component
export function LogoCompact({ className = "" }: { className?: string }) {
  return (
    <div className="flex items-center space-x-1">
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm sm:text-base">TN</span>
      </div>
      <span className="text-lg sm:text-xl md:text-2xl font-bold text-stone-800 dark:text-stone-100 hidden xs:block">
        TechNest
      </span>
    </div>
  )
}
