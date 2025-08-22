"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, TrendingUp, Star, DollarSign } from "lucide-react"
import { useEffect, useState } from "react"
import Header from "@/components/header"

function NumberTicker({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function RobloxMarketplace() {

  // no-op effect retained if needed later
  useEffect(() => {}, [])

  // no save/drag state – purely marquee

  // no drag handlers – marquee only





  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />

      <style jsx global>{`
        /* Gentle vertical floating for decorative images */
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>



      {/* Hero Section */}
      <section 
        className="relative py-28 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/5 via-transparent to-green-800/3 pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-20 left-10 w-2 h-2 bg-green-500/60 rounded-full animate-ping"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-green-400/50 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-green-600/70 rounded-full animate-ping delay-500"></div>
            <div
              className="absolute top-1/3 right-1/3 w-32 h-32 border border-green-500/5 rounded-full animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>
            <div
              className="absolute top-1/2 right-1/4 w-24 h-24 border border-green-400/3 rounded-full animate-spin"
              style={{ animationDuration: "15s", animationDirection: "reverse" }}
            ></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-20 bg-gradient-to-b from-green-600/15 to-transparent rotate-45 animate-pulse delay-2000"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-16 bg-gradient-to-b from-green-500/10 to-transparent rotate-12 animate-pulse delay-3000"></div>
          </div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Buy & Sell{" "}
            <span className="text-green-500 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent animate-pulse">
              ROBLOX Items
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Your trusted source for Roblox item trading. Safe, fast transactions with competitive prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            <Button
              size="lg"
              className="bg-green-700 hover:bg-green-800 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-600/20"
              onClick={() => { window.location.href = 'https://example.com' }}
            >
              Click here to sell
            </Button>
            <Button
              size="lg"
              className="bg-green-700 hover:bg-green-800 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-600/20"
              onClick={() => { window.location.href = 'https://example.com' }}
            >
              Click here to buy
            </Button>
          </div>
        </div>
      </section>



      {/* Selling Information */}
      <section className="py-16 px-4 bg-slate-800/50 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Trading Information
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <Card className="bg-slate-800 border-slate-700 hover:border-green-600 transition-all duration-500 hover:shadow-xl hover:shadow-green-600/8 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 group">
              <CardHeader>
                <CardTitle className="text-green-500 flex items-center gap-2 group-hover:text-green-400 transition-colors">
                  <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Why Trade Here
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 group-hover:text-slate-200 transition-colors">
                  I offer fair prices and secure transactions for all Roblox items. With years of trading experience,
                  you can trust that your items are in good hands.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-green-600 transition-all duration-500 hover:shadow-xl hover:shadow-green-600/8 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 group">
              <CardHeader>
                <CardTitle className="text-green-500 flex items-center gap-2 group-hover:text-green-400 transition-colors">
                  <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Market Knowledge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 group-hover:text-slate-200 transition-colors">
                  I stay up-to-date with current market trends and values to ensure you get competitive prices for your
                  items.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-green-600 transition-all duration-500 hover:shadow-xl hover:shadow-green-600/8 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 group">
              <CardHeader>
                <CardTitle className="text-green-500 flex items-center gap-2 group-hover:text-green-400 transition-colors">
                  <DollarSign className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Fast Transactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 group-hover:text-slate-200 transition-colors">
                  Quick and efficient trading process. Most transactions are completed within 24 hours of agreement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            My Trading Stats
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { number: 70, suffix: "+", label: "ITEMS BOUGHT", icon: Users },
              { number: 45, suffix: "+", label: "ITEMS SOLD", icon: DollarSign },
              { number: 3, suffix: "+", label: "YEARS TRADING", icon: TrendingUp },
              { number: 100, suffix: "%", label: "POSITIVE FEEDBACK", icon: Star },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-${(index + 1) * 100} group cursor-pointer`}
              >
                <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-500 hover:shadow-lg hover:shadow-green-600/40">
                  <stat.icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div className="text-3xl font-bold text-green-500 mb-2 group-hover:text-green-400 transition-colors">
                  <NumberTicker end={stat.number} suffix={stat.suffix} duration={2000 + index * 200} />
                </div>
                <div className="text-sm text-slate-400 uppercase tracking-wide group-hover:text-slate-300 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/80 via-slate-900/60 to-slate-800/80 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-3 h-3 bg-green-500/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-16 w-2 h-2 bg-green-600/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/4 w-1 h-12 bg-gradient-to-b from-green-500/15 to-transparent rotate-45 animate-pulse delay-2000"></div>
          <div
            className="absolute top-1/2 right-1/3 w-24 h-24 border border-green-600/8 rounded-full animate-spin"
            style={{ animationDuration: "25s" }}
          ></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Shield className="w-12 h-12 text-green-500 mr-4 animate-bounce" style={{ animationDuration: "3s" }} />
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Trusted Personal Trading
              </h2>
            </div>

            <p className="text-xl text-slate-400 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Built on years of experience and community trust
            </p>

            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "Secure Trading",
                  description:
                    "Years of experience in Roblox trading with 100% secure transactions and verified buyers",
                },
                {
                  icon: TrendingUp,
                  title: "Market Expertise",
                  description: "Competitive pricing on all items with up-to-date market knowledge and fair valuations",
                },
                {
                  icon: Users,
                  title: "Direct Communication",
                  description: "Fast and reliable item transfers with direct seller communication and community trust",
                },
                {
                  icon: Star,
                  title: "Proven Track Record",
                  description: "Trusted by the Roblox community with 100% positive feedback and satisfied customers",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`bg-slate-800/60 border-slate-700/50 backdrop-blur-sm hover:border-green-600/50 transition-all duration-500 hover:shadow-xl hover:shadow-green-600/15 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-${(index + 1) * 150} group`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-500 hover:shadow-lg hover:shadow-green-600/40">
                      <item.icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-500 mb-3 group-hover:text-green-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Marquee Section */}
      <section className="py-8 bg-slate-800/30 overflow-hidden">
        <div className="relative">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            <div className="flex space-x-8 px-4">
              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">"yo this dude legit fr, got my dominus quick"</span>
                <span className="text-green-500 font-medium">- gum</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">"best prices "</span>
                <span className="text-green-500 font-medium">- jnxxy</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">
                  "been trading with him for months, always comes through with the rare items and fair deals, never had
                  any issues"
                </span>
                <span className="text-green-500 font-medium">- bonka</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <Star className="w-4 h-4 text-slate-600" />
                </div>
                <span className="text-slate-300">"solid trader, got my valkyrie helmet same day"</span>
                <span className="text-green-500 font-medium">- xzay</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">
                  "nah this guy different, actually knows the market and doesn't try to lowball you like everyone else"
                </span>
                <span className="text-green-500 font-medium">- kenzo</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">"fast and clean"</span>
                <span className="text-green-500 font-medium">- zyx</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">
                  "been looking for someone trustworthy for ages, finally found him"
                </span>
                <span className="text-green-500 font-medium">- nova</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">"W trader fr"</span>
                <span className="text-green-500 font-medium">- ace</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">"mans got the rarest items on lock"</span>
                <span className="text-green-500 font-medium">- vex</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">"straight up reliable, no bs"</span>
                <span className="text-green-500 font-medium">- flux</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <Star className="w-4 h-4 text-slate-600" />
                </div>
                <span className="text-slate-300">
                  "got my sparkle time fedora for a steal, this guy knows what he's doing"
                </span>
                <span className="text-green-500 font-medium">- raze</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">"goated trader"</span>
                <span className="text-green-500 font-medium">- blitz</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">
                  "been scammed before but this dude actually legit, got my clockwork shades no problem"
                </span>
                <span className="text-green-500 font-medium">- drift</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">"fire service"</span>
                <span className="text-green-500 font-medium">- storm</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">"homie hooked me up with that emerald valkyrie, respect"</span>
                <span className="text-green-500 font-medium">- ghost</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <Star className="w-4 h-4 text-slate-600" />
                </div>
                <span className="text-slate-300">"quick responses and fair deals"</span>
                <span className="text-green-500 font-medium">- pixel</span>
              </div>
            </div>

            {/* Duplicate for seamless loop */}
            <div className="flex space-x-8 px-4">
              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">"yo this dude legit fr, got my dominus quick"</span>
                <span className="text-green-500 font-medium">- gum</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">"best prices no cap"</span>
                <span className="text-green-500 font-medium">- jnxxy</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">
                  "been trading with him for months, always comes through with the rare items and fair deals, never had
                  any issues"
                </span>
                <span className="text-green-500 font-medium">- bonka</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <Star className="w-4 h-4 text-slate-600" />
                </div>
                <span className="text-slate-300">"solid trader, got my valkyrie helmet same day"</span>
                <span className="text-green-500 font-medium">- xzay</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">
                  "nah this guy different, actually knows the market and doesn't try to lowball you like everyone else"
                </span>
                <span className="text-green-500 font-medium">- kenzo</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">"fast and clean"</span>
                <span className="text-green-500 font-medium">- zyx</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">
                  "been looking for someone trustworthy for ages, finally found him"
                </span>
                <span className="text-green-500 font-medium">- nova</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">"W trader fr"</span>
                <span className="text-green-500 font-medium">- ace</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">"mans got the rarest items on lock"</span>
                <span className="text-green-500 font-medium">- vex</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">"straight up reliable, no bs"</span>
                <span className="text-green-500 font-medium">- flux</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <Star className="w-4 h-4 text-slate-600" />
                </div>
                <span className="text-slate-300">
                  "got my sparkle time fedora for a steal, this guy knows what he's doing"
                </span>
                <span className="text-green-500 font-medium">- raze</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">"goated trader"</span>
                <span className="text-green-500 font-medium">- blitz</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">
                  "been scammed before but this dude actually legit, got my clockwork shades no problem"
                </span>
                <span className="text-green-500 font-medium">- drift</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">"fire service"</span>
                <span className="text-green-500 font-medium">- storm</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300">"homie hooked me up with that emerald valkyrie, respect"</span>
                <span className="text-green-500 font-medium">- ghost</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/50">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <Star className="w-4 h-4 text-slate-600" />
                </div>
                <span className="text-slate-300">"quick responses and fair deals"</span>
                <span className="text-green-500 font-medium">- pixel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-900 via-emerald-800 via-green-700 to-green-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div
            className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-full animate-spin"
            style={{ animationDuration: "30s", animationDirection: "reverse" }}
          ></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Ready to Trade?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Get in touch to discuss your Roblox item trading needs. Whether you're buying or selling, I'm here to help
            with fair prices and secure transactions.
          </p>
          <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <Button
              size="lg"
              className="bg-green-950 hover:bg-black text-white text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  )
}
