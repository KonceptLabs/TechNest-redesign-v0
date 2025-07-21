interface LogoProps {
  variant?: "header" | "footer" | "hero" | "compact"
  className?: string
}

export function Logo({ variant = "header", className = "" }: LogoProps) {
  const sizeClasses = {
    header: "h-8 w-auto sm:h-10 md:h-12 lg:h-14",
    footer: "h-6 w-auto sm:h-8 md:h-10",
    hero: "h-16 w-auto sm:h-20 md:h-28 lg:h-32",
    compact: "h-6 w-auto sm:h-8",
  }

  return (
    <img
      src="/logo-technest.svg"
      alt="TechNest Logo"
      className={`${sizeClasses[variant]} transition-all duration-200 dark:brightness-110 filter dark:saturate-110 ${className}`}
    />
  )
}

// Mobile-optimized compact logo component
export function LogoCompact({ className = "" }: { className?: string }) {
  return (
    <div className="flex items-center space-x-1">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg flex items-center justify-center">
        <span className="text-base sm:text-lg font-bold text-white">TN</span>
      </div>
      <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-stone-800 dark:text-stone-100 hidden xs:block">
        TechNest
      </span>
    </div>
  )
}
