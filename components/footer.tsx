import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  // Define logo path with fallback
  const logoPath = "/images/logo-light.png"

  return (
    <footer className="bg-[#2C3338] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white/70">
                Subscribe to our newsletter for the latest roofing tips, industry news, and exclusive offers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input type="email" placeholder="Your email address" className="bg-gray-700 border-gray-600 text-white" />
              <Button className="bg-[#C5A572] hover:bg-[#b39461] text-white whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image
                src={logoPath || "/placeholder.svg"}
                alt="London Building & Roofing"
                width={180}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-white/70 mb-6">
              Professional roofing services for residential and commercial properties across London, delivered with
              craftsmanship and care.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-white/70 hover:text-[#C5A572] transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://twitter.com" className="text-white/70 hover:text-[#C5A572] transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="https://instagram.com" className="text-white/70 hover:text-[#C5A572] transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://linkedin.com" className="text-white/70 hover:text-[#C5A572] transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-white/70 hover:text-[#C5A572] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-white/70 hover:text-[#C5A572] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-[#C5A572] transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-white/70 hover:text-[#C5A572] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-[#C5A572] transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-[#C5A572] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/residential"
                  className="text-white/70 hover:text-[#C5A572] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Residential Roofing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/commercial"
                  className="text-white/70 hover:text-[#C5A572] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Commercial Roofing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/emergency"
                  className="text-white/70 hover:text-[#C5A572] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Emergency Repairs
                </Link>
              </li>
              <li>
                <Link
                  href="/services/inspections"
                  className="text-white/70 hover:text-[#C5A572] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Roof Inspections
                </Link>
              </li>
              <li>
                <Link
                  href="/services/sustainable"
                  className="text-white/70 hover:text-[#C5A572] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Sustainable Roofing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/historic"
                  className="text-white/70 hover:text-[#C5A572] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Historic Restoration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-[#C5A572] mt-1" />
                <span className="text-white/70">123 Roofing Street, London, EC1A 1BB</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-[#C5A572]" />
                <span className="text-white/70">020 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-[#C5A572]" />
                <span className="text-white/70">info@londonroofing.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-bold mb-2">Working Hours</h4>
              <p className="text-white/70">Monday-Friday: 8am-6pm</p>
              <p className="text-white/70">Saturday: 9am-4pm</p>
              <p className="text-white/70">Sunday: Closed (Emergency Only)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} London Building & Roofing. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-white/70 hover:text-[#C5A572] text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/70 hover:text-[#C5A572] text-sm">
                Terms & Conditions
              </Link>
              <Link href="/sitemap" className="text-white/70 hover:text-[#C5A572] text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
