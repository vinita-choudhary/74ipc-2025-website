import Link from 'next/link'
import { Mail, Phone, MapPin, Twitter, LinkedIn, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pharmaceutical-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">74</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">74th IPC 2025</h3>
                <p className="text-gray-400 text-sm">Indian Pharmaceutical Congress</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              The premier pharmaceutical conference bringing together industry leaders, researchers, and innovators to shape the future of healthcare in India and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Congress', href: '#about' },
                { name: 'Speakers', href: '#speakers' },
                { name: 'Schedule', href: '#schedule' },
                { name: 'Registration', href: '#registration' },
                { name: 'Venue', href: '#venue' },
                { name: 'Sponsors', href: '#sponsors' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-pharmaceutical-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pharmaceutical-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>India Expo Centre</p>
                  <p>Greater Noida, Delhi NCR</p>
                  <p>India - 201306</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pharmaceutical-400 flex-shrink-0" />
                <a
                  href="mailto:info@74ipc2025.org"
                  className="text-sm text-gray-300 hover:text-pharmaceutical-400 transition-colors"
                >
                  info@74ipc2025.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pharmaceutical-400 flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-sm text-gray-300 hover:text-pharmaceutical-400 transition-colors"
                >
                  +91 123 456 7890
                </a>
              </div>
            </div>
          </div>

          {/* Conference Details */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Conference Details</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <p className="font-medium text-white">Dates</p>
                <p>February 15-17, 2025</p>
              </div>
              <div>
                <p className="font-medium text-white">Theme</p>
                <p className="italic">"Innovating Healthcare for Tomorrow"</p>
              </div>
              <div>
                <p className="font-medium text-white">Expected Delegates</p>
                <p>5000+ Professionals</p>
              </div>
              <div>
                <p className="font-medium text-white">Sessions</p>
                <p>100+ Scientific Sessions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: LinkedIn, href: '#', label: 'LinkedIn' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-pharmaceutical-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 74th Indian Pharmaceutical Congress. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-2 text-xs text-gray-500">
                <Link href="/privacy" className="hover:text-pharmaceutical-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-pharmaceutical-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-pharmaceutical-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer