"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Shield,
  Users,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Monitor,
  DoorOpen,
  Thermometer,
  Camera,
  Wifi,
  Speaker,
  Home,
  Laptop,
  Wrench,
  Heart,
} from "lucide-react"
import Link from "next/link"
import { Logo, LogoCompact } from "@/components/logo"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { HeroVideoBackground } from "@/components/hero-video-background"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [communicationPreferences, setCommunicationPreferences] = useState<string[]>([])

  // --- FORM_HANDLER CODE (New State Variables for Contact Form)
  const [contactName, setContactName] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactPhone, setContactPhone] = useState("")
  const [additionalNotes, setAdditionalNotes] = useState("")
  const [formMessage, setFormMessage] = useState({ text: "", type: "" })
  // --- END MODIFIED CODE BLOCK (New State Variables for Contact Form) ---

  // Close card when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveStep(null)
    }

    if (activeStep !== null) {
      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [activeStep])

  const handleStepClick = (stepNumber: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveStep(activeStep === stepNumber ? null : stepNumber)
  }

  const handleStepHover = (stepNumber: number) => {
    setActiveStep(stepNumber)
  }

  const handleStepLeave = () => {
    setActiveStep(null)
  }

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, service])
    } else {
      setSelectedServices(selectedServices.filter((s) => s !== service))
    }
  }

  const handleCommunicationChange = (method: string, checked: boolean) => {
    if (checked) {
      setCommunicationPreferences([...communicationPreferences, method])
    } else {
      setCommunicationPreferences(communicationPreferences.filter((m) => m !== method))
    }
  }

  const processSteps = [
    {
      number: 1,
      title: "Listen & Understand",
      description:
        "We start by truly understanding your lifestyle, needs, concerns, and budget. No assumptions, just genuine conversation about what matters to you and your family.",
    },
    {
      number: 2,
      title: "Educate & Explore",
      description:
        "We present clear, unbiased options tailored to your situation. Every recommendation comes with honest pros, cons, and privacy considerations explained in plain language.",
    },
    {
      number: 3,
      title: "Implement & Integrate",
      description:
        "Professional installation and configuration ensure everything works seamlessly. We handle the technical complexity so you can focus on enjoying your enhanced home.",
    },
    {
      number: 4,
      title: "Empower & Support",
      description:
        "Complete walkthrough of your new system, privacy settings review, and ongoing support. You'll feel confident and in control of your smart home technology.",
    },
  ]

  const services = [
    "TV Mounting",
    "Video Doorbell Install",
    "Smart Thermostat Install",
    "Security Camera Mounting",
    "Wifi & Network Optimization",
    "Home Theater Setup",
    "Home Automation Consultation",
    "Computer Support",
    "General Handyman Services",
  ]

  const communicationMethods = ["Email", "Phone", "Text"]

  // --- FORM_HANDLER CODE (New handleSubmit function)
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault() // Prevent default form submission

    setFormMessage({ text: "Sending...", type: "loading" })

    const formData = {
      name: contactName,
      email: contactEmail,
      phone: contactPhone,
      preferredMethod: communicationPreferences.join(", "), // Send as comma-separated string
      servicesNeeded: selectedServices.join(", "), // Send as comma-separated string
      message: additionalNotes, // Renamed 'notes' to 'message' to match your Worker expectation
    }

    try {
      const workerUrl = "https://technest-contact-form.dkedzior.workers.dev"

      const response = await fetch(workerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setFormMessage({ text: result.message, type: "success" })
        // Clear the form fields after successful submission
        setContactName("")
        setContactEmail("")
        setContactPhone("")
        setCommunicationPreferences([])
        setSelectedServices([])
        setAdditionalNotes("")
      } else {
        setFormMessage({ text: result.message || "An unexpected error occurred.", type: "error" })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setFormMessage({ text: "Network error. Please try again later.", type: "error" })
    }
  }
  // --- END MODIFIED CODE BLOCK (New handleSubmit function) ---

  return (
    <div className="min-h-screen bg-white dark:bg-stone-900 transition-colors">
      {/* Header */}
      <header
        id="top"
        className="border-b border-stone-200 dark:border-stone-700 bg-white/95 dark:bg-stone-900/95 backdrop-blur-sm sticky top-0 z-50"
      >
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
                href="#process"
                className="text-stone-600 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Process
              </Link>
              <Link
                href="#about"
                className="text-stone-600 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="#testimonials"
                className="text-stone-600 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Reviews
              </Link>
              <a
                href="tel:708-824-6378"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-stone-600 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                (708)TCH-NEST
              </a>
              <ThemeToggle />
              <Link href="#contact">
                <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get Started
                </Button>
              </Link>
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
              Serving Plainfield - Surrounding Chicagoland Area
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
              <Link href="#contact">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 py-4 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="#process">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 px-8 py-4 bg-transparent hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  See How We Simplify
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-stone-50 dark:bg-stone-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-2">Privacy-Centric </h3>
              <p className="text-stone-600 dark:text-stone-300">
                Committed to protecting your data from consultation to installation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-700 dark:text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-2">Customer First</h3>
              <p className="text-stone-600 dark:text-stone-300">
                No vendor partnerships - we recommend based on your needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-2">Local & Personal</h3>
              <p className="text-stone-600 dark:text-stone-300">Family-owned, Plainfield-based and community-focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - First in order */}
      <section id="services" className="py-20 bg-white dark:bg-stone-800 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">Our Services</h2>
            <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
              Professional installation and setup services to make your home smarter, safer, and more convenient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 hover:shadow-lg dark:hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-2">TV Mounting</h3>
                <p className="text-stone-600 dark:text-stone-300 text-sm">
                  Professional wall mounting with cable management and optimal viewing angles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 hover:shadow-lg dark:hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DoorOpen className="w-6 h-6 text-amber-700 dark:text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-2">
                  Video Doorbell Install
                </h3>
                <p className="text-stone-600 dark:text-stone-300 text-sm">
                  Complete installation and setup with privacy-focused configuration.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 hover:shadow-lg dark:hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-2">
                  Smart Thermostat Install
                </h3>
                <p className="text-stone-600 dark:text-stone-300 text-sm">
                  Energy-efficient installation with personalized scheduling setup.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 hover:shadow-lg dark:hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-2">
                  Security Camera Mounting
                </h3>
                <p className="text-stone-600 dark:text-stone-300 text-sm">
                  Strategic placement and secure mounting for optimal coverage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 hover:shadow-lg dark:hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-2">
                  Wifi & Network Optimization
                </h3>
                <p className="text-stone-600 dark:text-stone-300 text-sm">
                  Improve coverage, speed, and security for all your connected devices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 hover:shadow-lg dark:hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Speaker className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-2">Home Theater Setup</h3>
                <p className="text-stone-600 dark:text-stone-300 text-sm">
                  Complete audio/video system installation and calibration.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 hover:shadow-lg dark:hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Home className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-2">
                  Home Automation Consultation
                </h3>
                <p className="text-stone-600 dark:text-stone-300 text-sm">
                  Personalized smart home planning and device recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 hover:shadow-lg dark:hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Laptop className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-2">Computer Support</h3>
                <p className="text-stone-600 dark:text-stone-300 text-sm">
                  Troubleshooting, setup, and optimization for all your devices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 hover:shadow-lg dark:hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-2">
                  General Handyman Services
                </h3>
                <p className="text-stone-600 dark:text-stone-300 text-sm">
                  Small repairs and installations to support your tech setup.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section - Second in order */}
      <section id="process" className="py-20 bg-stone-50 dark:bg-stone-900 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">The TechNest Process</h2>
            <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
              Our proven consultation journey ensures you get exactly what you need, nothing you don't.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-stone-200 dark:bg-stone-700 transform -translate-y-1/2 hidden md:block"></div>

              {/* Timeline Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
                {processSteps.map((step) => (
                  <div key={step.number} className="relative">
                    <div className="flex flex-col items-center text-center">
                      {/* Circle */}
                      <div
                        className="relative z-10 w-16 h-16 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        onClick={(e) => handleStepClick(step.number, e)}
                        onMouseEnter={() => handleStepHover(step.number)}
                        onMouseLeave={handleStepLeave}
                      >
                        {step.number}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-2">{step.title}</h3>

                      {/* Detail Card */}
                      {activeStep === step.number && (
                        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 mt-4 z-30">
                          <Card className="w-80 max-w-sm shadow-xl border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900">
                            <CardContent className="p-4">
                              <p className="text-base text-stone-700 dark:text-stone-200 leading-relaxed font-medium">
                                {step.description}
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Third in order */}
      <section id="about" className="py-20 bg-white dark:bg-stone-800 scroll-mt-20">
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
                  would pay good money to get that kind of guidance in my house." That's when TechNest LLC was born.
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

      {/* Testimonials - Fourth in order */}
      <section id="testimonials" className="py-20 bg-stone-50 dark:bg-stone-900 scroll-mt-20">
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

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Home?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let's have a conversation about your smart home goals. No pressure, just honest guidance from your
                trusted local technology partner.
              </p>
            </div>

            {/* --- FORM_HANDLER CODE (Contact Form JSX) --- */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block text-center text-green-400 font-bold text-lg">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={contactName} // Bind to state
                    onChange={(e) => setContactName(e.target.value)} // Update state on change
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white mb-2 block text-center text-green-400 font-bold text-lg">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={contactEmail} // Bind to state
                    onChange={(e) => setContactEmail(e.target.value)} // Update state on change
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                  />
                </div>
              </div>

              {/* Row 2: Phone Number and Preferred Method */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="text-white mb-2 block text-center text-green-400 font-bold text-lg">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={contactPhone} // Bind to state
                    onChange={(e) => setContactPhone(e.target.value)} // Update state on change
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                  />
                </div>
                <div>
                  <Label className="text-white mb-2 block text-center text-green-400 font-bold text-lg">
                    Preferred Method
                  </Label>
                  <div className="border border-white/20 rounded-lg p-2 bg-white/5 h-10 flex items-center justify-center">
                    <div className="flex gap-4 items-center justify-center">
                      {communicationMethods.map((method) => (
                        <div key={method} className="flex items-center space-x-2">
                          <Checkbox
                            id={method}
                            checked={communicationPreferences.includes(method)}
                            onCheckedChange={(checked) => handleCommunicationChange(method, checked as boolean)}
                            className="border-white/20 data-[state=checked]:bg-white data-[state=checked]:text-blue-600"
                          />
                          <Label htmlFor={method} className="text-white text-sm cursor-pointer">
                            {method}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Services Needed (spans both columns) */}
              <div className="col-span-2">
                <Label className="text-white mb-4 block text-center text-green-400 font-bold text-lg">
                  Services Needed
                </Label>
                <div className="border border-white/20 rounded-lg p-4 bg-white/5">
                  <div className="grid grid-cols-2 gap-3 max-h-48 overflow-y-auto">
                    {services.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={selectedServices.includes(service)}
                          onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                          className="border-white/20 data-[state=checked]:bg-white data-[state=checked]:text-blue-600"
                        />
                        <Label htmlFor={service} className="text-white text-sm cursor-pointer">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 4: Additional Notes (spans both columns) */}
              <div className="col-span-2">
                <Label htmlFor="notes" className="text-white mb-2 block text-center text-green-400 font-bold text-lg">
                  Additional Notes
                </Label>
                <Textarea
                  id="notes"
                  rows={4}
                  value={additionalNotes} // Bind to state
                  onChange={(e) => setAdditionalNotes(e.target.value)} // Update state on change
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                />
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-stone-50 hover:scale-105 active:scale-95 dark:bg-white dark:text-blue-600 dark:hover:bg-stone-100 px-12 py-4 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Submit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              {/* --- FORM_HANDLER CODE (Form Message Display) --- */}
              {formMessage.text && (
                <div
                  className={`mt-6 text-center p-4 rounded-lg border ${
                    formMessage.type === "success"
                      ? "bg-green-600/30 border-green-400 text-white font-bold text-lg"
                      : "bg-red-600/30 border-red-400 text-white font-bold text-lg"
                  }`}
                >
                  {formMessage.text}
                </div>
              )}
              {/* --- END MODIFIED CODE BLOCK (Form Message Display) --- */}
            </form>
            {/* --- END MODIFIED CODE BLOCK (Contact Form JSX) --- */}
          </div>
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
                  <a
                    href="tel:708-824-6378"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-300 dark:text-stone-400 hover:text-blue-400 transition-colors"
                  >
                    (708)TCH-NEST
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <a
                    href="mailto:info@technestpros.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-300 dark:text-stone-400 hover:text-blue-400 transition-colors"
                  >
                    info@technestpros.com
                  </a>
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
            <p>&copy; 2024 TechNest LLC. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
