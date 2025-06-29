"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Play,
  Gift,
  ImageIcon,
  MessageSquare,
  Users,
  Zap,
  ArrowRight,
  Gamepad2,
  Twitch,
  Youtube,
  Monitor,
  Sparkles,
  Heart,
  Star,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-bounce delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative z-40 border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center space-x-3 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25 hover:shadow-primary/50 transition-all duration-300 hover:scale-110">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Strayx
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {["Features", "Beta", "Community"].map((item, index) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-gray-300 hover:text-white transition-all duration-500 hover:scale-105 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div
              className={`flex items-center space-x-4 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <Button
                variant="ghost"
                className="hidden sm:inline-flex text-gray-300 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300"
              >
                Login
              </Button>
              <Button className="bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/80 hover:to-cyan-600/80 rounded-2xl shadow-lg shadow-primary/25 hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
                Beta Zugang
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-30 py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Badge className="mb-8 bg-gradient-to-r from-primary/20 to-cyan-600/20 text-white border-primary/30 rounded-full px-6 py-2 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Brandneu: Jetzt Beta testen!
              </Badge>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Community Games
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-cyan-500 to-teal-500 bg-clip-text text-transparent animate-pulse">
                  neu gedacht
                </span>
              </h1>
            </div>

            <div
              className={`transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Vergiss Google Forms und Discord Chaos! Strayx bringt{" "}
                <span className="text-primary font-semibold">Clip Reactions</span>,
                <span className="text-cyan-400 font-semibold"> Giveaways</span> und{" "}
                <span className="text-pink-400 font-semibold">Community Games</span> auf ein neues Level - komplett
                kostenlos.
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 delay-900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/80 hover:to-cyan-600/80 text-lg px-10 py-4 rounded-3xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-500 hover:scale-110 group"
              >
                <Sparkles className="mr-3 w-5 h-5 group-hover:animate-spin" />
                Beta starten
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-4 rounded-3xl bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-500 hover:scale-105 group"
              >
                <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                Demo ansehen
              </Button>
            </div>

            <div
              className={`flex items-center justify-center space-x-12 text-gray-400 transition-all duration-1000 delay-1100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              {[
                { icon: Twitch, name: "Twitch", color: "hover:text-cyan-400" },
                { icon: Youtube, name: "YouTube", color: "hover:text-red-400" },
                { icon: Monitor, name: "Alle Plattformen", color: "hover:text-blue-400" },
              ].map((platform, index) => (
                <div
                  key={platform.name}
                  className={`flex items-center space-x-3 ${platform.color} transition-all duration-300 hover:scale-110 cursor-pointer`}
                >
                  <platform.icon className="w-7 h-7" />
                  <span className="hidden sm:block font-medium">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-30 py-20 bg-gradient-to-b from-black/10 to-black/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                Revolutionäre Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Alles was du brauchst, um deine Community zu begeistern - ohne technisches Know-how
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Play,
                title: "Clip Reactions",
                description: "Lass deine Community Clips bewerten und kommentieren. Live-Reactions in Echtzeit!",
                iconColor: "text-red-400",
                iconBg: "bg-red-500/20",
              },
              {
                icon: Gift,
                title: "Smart Giveaways",
                description: "Faire und transparente Giveaways mit automatischer Gewinner-Auswahl und Anti-Cheat.",
                iconColor: "text-green-400",
                iconBg: "bg-green-500/20",
              },
              {
                icon: ImageIcon,
                title: "Bilderreactions",
                description: "Zeige Bilder und sammle Reaktionen deiner Community in Echtzeit mit Emoji-Regen.",
                iconColor: "text-blue-400",
                iconBg: "bg-blue-500/20",
              },
              {
                icon: MessageSquare,
                title: "Q&A Sessions",
                description: "Sammle und moderiere Fragen live. Mit Upvoting und automatischer Sortierung.",
                iconColor: "text-cyan-400",
                iconBg: "bg-cyan-500/20",
              },
              {
                icon: Users,
                title: "Live Polls",
                description: "Interaktive Umfragen mit Echtzeit-Ergebnissen und schönen Visualisierungen.",
                iconColor: "text-orange-400",
                iconBg: "bg-orange-500/20",
              },
              {
                icon: Zap,
                title: "Stream Integration",
                description: "Nahtlose Integration mit OBS, Streamlabs und allen gängigen Streaming-Tools.",
                iconColor: "text-pink-400",
                iconBg: "bg-pink-500/20",
              },
            ].map((feature, index) => (
              <Card
                key={feature.title}
                className="group bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700/50 backdrop-blur-xl hover:border-primary/50 hover:from-slate-700/90 hover:to-slate-800/90 transition-all duration-500 hover:scale-105 hover:-translate-y-2 rounded-3xl overflow-hidden shadow-xl shadow-black/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-8">
                  <div
                    className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg border border-white/10`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <CardTitle className="text-white text-xl mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beta Section */}
      <section id="beta" className="relative z-30 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 via-cyan-500/10 to-teal-500/10 rounded-3xl p-12 backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-cyan-600/20 rounded-full px-6 py-3 mb-6">
                  <Heart className="w-5 h-5 text-red-400 animate-pulse" />
                  <span className="text-white font-medium">Werde Beta-Pioneer</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Hilf uns{" "}
                  <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                    Strayx
                  </span>{" "}
                  zu perfektionieren
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Strayx ist brandneu und wir suchen die ersten Creator, die mit uns die Zukunft der Community Games
                  gestalten.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: Gift,
                    title: "100% Kostenlos",
                    description: "Alle Features sind und bleiben kostenlos. Für immer.",
                    color: "text-green-400",
                  },
                  {
                    icon: Users,
                    title: "Dein Input zählt",
                    description: "Als Beta-Tester gestaltest du aktiv die Entwicklung mit.",
                    color: "text-blue-400",
                  },
                  {
                    icon: Zap,
                    title: "Keine API nötig",
                    description: "Plug & Play - ohne technische Kenntnisse sofort loslegen.",
                    color: "text-cyan-400",
                  },
                ].map((benefit, index) => (
                  <div key={benefit.title} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-all duration-300">
                      <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/80 hover:to-cyan-600/80 text-lg px-12 py-4 rounded-3xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-500 hover:scale-110 group"
                >
                  <Star className="mr-3 w-5 h-5 group-hover:animate-spin" />
                  Beta Zugang sichern
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-gray-400 mt-4">Limitierte Plätze • Kein Risiko • Dein Feedback ist Gold wert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative z-30 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bleib auf dem{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">Laufenden</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Erfahre als Erstes von neuen Features, Beta-Updates und exklusiven Creator-Tipps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Deine E-Mail für Beta Updates"
                className="flex-1 bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-2xl backdrop-blur-sm focus:border-primary transition-all duration-300"
              />
              <Button className="bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/80 hover:to-cyan-600/80 rounded-2xl transition-all duration-300 hover:scale-105">
                Beta Liste
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">Nur wichtige Updates • Jederzeit abmeldbar • Kein Spam</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-30 bg-black/40 backdrop-blur-xl border-t border-white/10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-600 rounded-2xl flex items-center justify-center">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Strayx
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Die ultimative Plattform für Community Games und Streamer-Interaktionen der nächsten Generation.
              </p>
            </div>

            {[
              {
                title: "Produkt",
                links: ["Features", "Beta Zugang", "Roadmap", "Changelog"],
              },
              {
                title: "Community",
                links: ["Discord", "Twitter", "Feedback", "Creator Hub"],
              },
              {
                title: "Support",
                links: ["Hilfe Center", "Kontakt", "Status", "Bug Report"],
              },
            ].map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Strayx. Made with <Heart className="w-4 h-4 text-red-400 inline animate-pulse" /> for the
              Creator Community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
