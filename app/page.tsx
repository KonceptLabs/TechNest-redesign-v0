import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Users,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Lightbulb,
  Lock,
  Settings,
  Heart,
} from "lucide-react"
import Link from "next/link"
import { Logo, LogoCompact } from "@/components/logo"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { HeroVideoBackground } from "@/components/hero-video-background"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-stone-900 transition-colors">
      {/* Header */}
      <header className="border-b border-stone-200 dark:border-stone-700 bg-white/95 dark:bg-stone-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {/* Full logo for larger screens */}
              <div className="hidden sm:block">
                <Logo variant="header" />
              </div>
              {/* Compact logo for mobile */}
              <div className="block sm:hidden">
                <LogoCompact />
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#services"
                className="text-stone-600 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-stone-600 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="#process"
                className="text-stone-600 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Process
              </Link>
              <Link
                href="#testimonials"
                className="text-stone-600 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Reviews
              </Link>
              <ThemeToggle />
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white">
                Get Started
              </Button>
            </nav>
            <div className="flex items-center space-x-2 md:hidden">
              <ThemeToggle />
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-stone-50 to-blue-50 dark:from-stone-800 dark:to-stone-900 overflow-hidden min-h-[600px]">
        <HeroVideoBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-900/50 border-amber-200 dark:border-amber-700">
              Serving Plainfield &amp; Surrounding Chicagoland Area
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-stone-800 dark:text-stone-100 mb-6 leading-tight">
              Smart Home Tech.
              <br />
              <span className="text-blue-600 dark:text-blue-400">Smarter Choices.</span>
            </h1>
            <div className="text-xl text-stone-600 dark:text-stone-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              <p className="mb-4">Navigate the complexity of your connected home with clarity and peace of mind.</p>
              <p>
                We listen to your needs, simplifying the process to empower informed decisions that protect your{" "}
                <span className="emphasized-word emphasized-word--blue font-semibold">family</span>,{" "}
                <span className="emphasized-word emphasized-word--amber font-semibold">home</span> and{" "}
                <span className="emphasized-word emphasized-word--green font-semibold">wallet</span>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 py-4"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 px-8 py-4 bg-transparent"
              >
                See How We Simplify
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white dark:bg-stone-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-2">Privacy First</h3>
              <p className="text-stone-600 dark:text-stone-300">
                Clear privacy pledge and post-installation privacy reviews
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-700 dark:text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-2">
                Your Best Interest First
              </h3>
              <p className="text-stone-600 dark:text-stone-300">
                No exclusive partnerships - we recommend what's best for you
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-2">Local & Personal</h3>
              <p className="text-stone-600 dark:text-stone-300">
                Plainfield-based with a personal, community-focused approach
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-stone-50 dark:bg-stone-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">How We Help</h2>
            <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
              From basic advice to complete smart home transformations, we're here to guide you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 hover:shadow-lg dark:hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-100 mb-3">
                  Smart Home Consultation
                </h3>
                <p className="text-stone-600 dark:text-stone-300 mb-4">
                  Get personalized recommendations based on your specific needs, budget, and privacy concerns.
                </p>
                <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2" />
                    Device recommendations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2" />
                    Privacy assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2" />
                    Budget planning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 hover:shadow-lg dark:hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-amber-700 dark:text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-100 mb-3">Installation & Setup</h3>
                <p className="text-stone-600 dark:text-stone-300 mb-4">
                  Professional installation and configuration to ensure your devices work seamlessly together.
                </p>
                <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2" />
                    Professional installation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2" />
                    Network optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2" />
                    Device integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 hover:shadow-lg dark:hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-100 mb-3">
                  Security & Privacy Review
                </h3>
                <p className="text-stone-600 dark:text-stone-300 mb-4">
                  Comprehensive review of your smart home's security and privacy settings for peace of mind.
                </p>
                <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2" />
                    Privacy settings walkthrough
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2" />
                    Network security audit
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2" />
                    Ongoing support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-stone-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">Your Trusted Local Partner</h2>
              <p className="text-xl text-stone-600 dark:text-stone-300">
                Two decades of tech leadership meets genuine community care
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-full h-64 bg-gradient-to-br from-stone-200 to-blue-200 dark:from-stone-700 dark:to-blue-800 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-16 h-16 text-stone-600 dark:text-stone-300" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-stone-800 dark:text-stone-100 mb-4">
                  From Personal Passion to Community Mission
                </h3>
                <p className="text-stone-600 dark:text-stone-300 mb-4">
                  What started as taking apart the family computer decades ago has evolved into a lifetime passion for
                  consumer technology. After two decades leading successful B2B software companies, I realized the
                  perfect alignment: combining customer-first approach with deep tech knowledge.
                </p>
                <p className="text-stone-600 dark:text-stone-300 mb-6">
                  The "aha!" moment came during casual conversations with community members who unanimously said: "I
                  would pay good money to get that kind of guidance in my house." That's when TechNest was born.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" />
                    <span className="text-stone-700 dark:text-stone-300">20+ years of tech industry leadership</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" />
                    <span className="text-stone-700 dark:text-stone-300">Customer-first approach</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" />
                    <span className="text-stone-700 dark:text-stone-300">Plainfield, IL community roots</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-stone-50 dark:bg-stone-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">The TechNest Process</h2>
            <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
              Our proven consultation journey ensures you get exactly what you need, nothing you don't.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-100 mb-2">Listen & Understand</h3>
                  <p className="text-stone-600 dark:text-stone-300">
                    We start by truly understanding your lifestyle, needs, concerns, and budget. No assumptions, just
                    genuine conversation about what matters to you and your family.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-100 mb-2">Educate & Explore</h3>
                  <p className="text-stone-600 dark:text-stone-300">
                    We present clear, unbiased options tailored to your situation. Every recommendation comes with
                    honest pros, cons, and privacy considerations explained in plain language.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-100 mb-2">
                    Implement & Integrate
                  </h3>
                  <p className="text-stone-600 dark:text-stone-300">
                    Professional installation and configuration ensure everything works seamlessly. We handle the
                    technical complexity so you can focus on enjoying your enhanced home.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-100 mb-2">Empower & Support</h3>
                  <p className="text-stone-600 dark:text-stone-300">
                    Complete walkthrough of your new system, privacy settings review, and ongoing support. You'll feel
                    confident and in control of your smart home technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white dark:bg-stone-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">What Our Neighbors Say</h2>
            <p className="text-xl text-stone-600 dark:text-stone-300">
              Real feedback from real families in our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-stone-600 dark:text-stone-300 mb-4">
                  "Finally, I feel safe and understand my home tech! TechNest took the time to explain everything and
                  made sure our privacy was protected."
                </p>
                <div className="text-sm text-stone-500 dark:text-stone-400">
                  <p className="font-semibold">Sarah M.</p>
                  <p>Plainfield, IL</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-stone-600 dark:text-stone-300 mb-4">
                  "No pushy sales tactics, just honest advice. They helped us choose devices that actually fit our
                  lifestyle and budget. Couldn't be happier!"
                </p>
                <div className="text-sm text-stone-500 dark:text-stone-400">
                  <p className="font-semibold">Mike & Jennifer R.</p>
                  <p>Naperville, IL</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-stone-600 dark:text-stone-300 mb-4">
                  "The post-installation walkthrough was incredible. We actually understand how everything works and
                  feel confident using our smart home system."
                </p>
                <div className="text-sm text-stone-500 dark:text-stone-400">
                  <p className="font-semibold">David L.</p>
                  <p>Bolingbrook, IL</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's have a conversation about your smart home goals. No pressure, just honest guidance from your trusted
            local technology partner.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-stone-50 dark:bg-white dark:text-blue-600 dark:hover:bg-stone-100 px-8 py-4"
          >
            Schedule Your Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-800 dark:bg-stone-950 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Logo variant="footer" />
              </div>
              <p className="text-stone-300 dark:text-stone-400 mb-4">
                Clarity, Control, and Peace of Mind for Your Connected Home.
              </p>
              <p className="text-sm text-stone-400 dark:text-stone-500">
                Serving Plainfield, IL and surrounding communities with trusted smart home guidance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-stone-300 dark:text-stone-400">(708)TCH-NEST</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-stone-300 dark:text-stone-400">info@technestpros.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-stone-300 dark:text-stone-400">Plainfield, IL</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Our Promise</h3>
              <ul className="space-y-2 text-stone-300 dark:text-stone-400">
                <li>• Vendor-agnostic recommendations</li>
                <li>• Clear privacy protection</li>
                <li>• No pushy sales tactics</li>
                <li>• Local, personal service</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-700 dark:border-stone-800 mt-8 pt-8 text-center text-stone-400 dark:text-stone-500">
            <p>&copy; 2024 TechNest. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
