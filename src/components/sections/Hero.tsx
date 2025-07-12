'use client'

import { Calendar, MapPin, Users, ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 conference-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-pharmaceutical-900/20 to-primary-900/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Conference Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-pharmaceutical-600 font-bold text-sm">74</span>
            </div>
            <span className="text-sm font-medium">Indian Pharmaceutical Congress 2025</span>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Innovating
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Healthcare
              </span>
              for Tomorrow
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join 5000+ pharmaceutical professionals, researchers, and industry leaders at India's most prestigious pharmaceutical congress.
            </p>
          </div>

          {/* Key Info */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-lg">
            <div className="flex items-center space-x-2">
              <Calendar className="w-6 h-6 text-yellow-300" />
              <span className="font-medium">February 15-17, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-yellow-300" />
              <span className="font-medium">New Delhi, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-yellow-300" />
              <span className="font-medium">5000+ Delegates</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="#registration"
              className="group bg-white text-pharmaceutical-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Register Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-pharmaceutical-600 transition-all duration-300 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Promo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: '74th', label: 'Edition' },
              { number: '100+', label: 'Sessions' },
              { number: '200+', label: 'Speakers' },
              { number: '50+', label: 'Countries' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">{stat.number}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero