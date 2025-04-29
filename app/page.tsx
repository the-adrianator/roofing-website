import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceCard from "@/components/service-card";
import TestimonialCarousel from "@/components/testimonial-carousel";
import ProjectGallery from "@/components/project-gallery";
import QuoteCalculator from "@/components/quote-calculator";
import ServiceAreaMap from "@/components/service-area-map";
import TrustBadges from "@/components/trust-badges";
import BlogPreview from "@/components/blog-preview";
import EmergencyContact from "@/components/emergency-contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <Image
          src="/images/hero-london-skyline.png"
          alt="Premium roofing project with London skyline"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
          <div className="h-full flex flex-col justify-center px-6 md:px-10 lg:px-12">
            {" "}
            {/* Aligned with header */}
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Redefining Roofs for a Safer, Smarter London
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Expert roofing solutions for residential and commercial
                properties across London, delivered with craftsmanship and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
                  Emergency Repairs
                </Button>
                <Button className="bg-[#C5A572] hover:bg-[#b39461] text-white px-8 py-6 text-lg">
                  Free Inspection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the page content remains unchanged */}
      {/* Key Information Section */}
      <section className="bg-[#2C3338] text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-[#C5A572]" />
              <div>
                <p className="text-sm text-white/70">24/7 Emergency Service</p>
                <p className="font-bold">07551 139005</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-[#C5A572]" />
              <div>
                <p className="text-sm text-white/70">Working Hours</p>
                <p className="font-bold">Mon-Fri: 8am-6pm, Sat: 9am-4pm</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-[#C5A572]" />
              <div>
                <p className="text-sm text-white/70">Service Area</p>
                <p className="font-bold">All London Boroughs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3338] mb-4">
              Our Roofing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive roofing solutions tailored to your specific needs,
              delivered with exceptional craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Residential Roofing"
              description="Expert installation and repair services for all types of residential roofs, including slate, tile, and flat roofing systems."
              icon="home"
              imageSrc="/images/residential-roofing.png"
            />
            <ServiceCard
              title="Commercial Roofing"
              description="Specialized solutions for commercial properties, focusing on durability, energy efficiency, and minimal business disruption."
              icon="building"
              imageSrc="/images/commercial-roofing.png"
            />
            <ServiceCard
              title="Emergency Repairs"
              description="24/7 emergency repair service to quickly address leaks, storm damage, and other urgent roofing issues."
              icon="alert-triangle"
              imageSrc="/images/emergency-repairs.jpg"
            />
            <ServiceCard
              title="Roof Inspections"
              description="Comprehensive assessments to identify potential issues before they become costly problems."
              icon="search"
              imageSrc="/images/roof-inspections.jpg"
            />
            <ServiceCard
              title="Sustainable Roofing"
              description="Eco-friendly roofing options including green roofs, solar integration, and energy-efficient materials."
              icon="leaf"
              imageSrc="/images/sustainable-roofing.jpg"
            />
            <ServiceCard
              title="Historic Restoration"
              description="Specialized restoration services for historic buildings, preserving architectural integrity while enhancing performance."
              icon="landmark"
              imageSrc="/images/historic-restoration.jpg"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                variant="outline"
                className="border-[#456F8C] text-[#456F8C] hover:bg-[#456F8C] hover:text-white"
              >
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3338] mb-4">
              Why Choose London Building & Roofing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With decades of experience and a commitment to excellence, we
              deliver superior roofing solutions across London.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#456F8C]/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#456F8C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-award"
                  >
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C3338] mb-2">
                  25+ Years Experience
                </h3>
                <p className="text-gray-600">
                  Decades of expertise in delivering exceptional roofing
                  solutions across London.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#456F8C]/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#456F8C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield-check"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C3338] mb-2">
                  Fully Accredited
                </h3>
                <p className="text-gray-600">
                  NFRC certified with comprehensive insurance and extended
                  warranties.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#456F8C]/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#456F8C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-recycle"
                  >
                    <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
                    <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
                    <path d="m14 16-3 3 3 3" />
                    <path d="M8.293 13.596 4.5 9.497l1.906-3.35a1.786 1.786 0 0 1 1.554-.888H12" />
                    <path d="m5.5 9.5 3-3-3-3" />
                    <path d="m12.59 5.507.877-1.51a1.786 1.786 0 0 1 1.554-.888H19.5l.5 4" />
                    <path d="m17 8 3-3" />
                    <path d="M16.5 11.5 12 16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C3338] mb-2">
                  Eco-Friendly Solutions
                </h3>
                <p className="text-gray-600">
                  Sustainable materials and practices for environmentally
                  conscious roofing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#456F8C]/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#456F8C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-clock"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C3338] mb-2">
                  On-Time Delivery
                </h3>
                <p className="text-gray-600">
                  Projects completed on schedule with minimal disruption to your
                  daily life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3338] mb-4">
              Our Recent Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse our portfolio of completed roofing projects across London,
              showcasing our craftsmanship and attention to detail.
            </p>
          </div>

          <ProjectGallery />

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button
                variant="outline"
                className="border-[#456F8C] text-[#456F8C] hover:bg-[#456F8C] hover:text-white"
              >
                View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Calculator Section */}
      <section className="py-20 bg-[#456F8C] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get an Instant Quote
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Use our interactive calculator to get an estimate for your roofing
              project in seconds.
            </p>
          </div>

          <QuoteCalculator />

          <div className="text-center mt-8 text-white/80">
            <p>For a more detailed quote, please contact our team directly.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3338] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from our satisfied customers
              across London.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3338] mb-4">
              Our Service Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide roofing services across all London boroughs, from
              Central London to the outskirts.
            </p>
          </div>

          <ServiceAreaMap />

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Not sure if we cover your area?{" "}
              <Link href="/contact" className="text-[#456F8C] hover:underline">
                Contact us
              </Link>{" "}
              to find out.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#2C3338] mb-4">
              Trusted & Accredited
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're proud to be recognized by these industry-leading
              organizations.
            </p>
          </div>

          <TrustBadges />
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3338] mb-4">
              Roofing Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest roofing trends, tips, and industry
              news.
            </p>
          </div>

          <BlogPreview />

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button
                variant="outline"
                className="border-[#456F8C] text-[#456F8C] hover:bg-[#456F8C] hover:text-white"
              >
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2C3338] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Roof?
            </h2>
            <p className="text-xl mb-8">
              Contact us today for a free, no-obligation consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#C5A572] hover:bg-[#b39461] text-white px-8 py-6 text-lg">
                Request a Quote
              </Button>
              <Button
                variant="outline"
                className="border-white text-gray-400 hover:bg-white hover:text-[#2C3338] px-8 py-6 text-lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Button (Fixed Position) */}
      <EmergencyContact />
    </main>
  );
}
