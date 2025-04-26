import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Home, Building, AlertTriangle, Search, Leaf, Landmark } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  imageSrc: string
}

const ServiceCard = ({ title, description, icon, imageSrc }: ServiceCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "home":
        return <Home className="h-5 w-5 text-[#C5A572]" />
      case "building":
        return <Building className="h-5 w-5 text-[#C5A572]" />
      case "alert-triangle":
        return <AlertTriangle className="h-5 w-5 text-[#C5A572]" />
      case "search":
        return <Search className="h-5 w-5 text-[#C5A572]" />
      case "leaf":
        return <Leaf className="h-5 w-5 text-[#C5A572]" />
      case "landmark":
        return <Landmark className="h-5 w-5 text-[#C5A572]" />
      default:
        return <Home className="h-5 w-5 text-[#C5A572]" />
    }
  }

  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all group">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc || "/placeholder.svg?height=300&width=400&query=roofing"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      <CardContent className="relative -mt-16 bg-white rounded-t-xl pt-6">
        <div className="absolute -top-8 left-6 bg-[#456F8C] p-3 rounded-lg shadow-md">{getIcon()}</div>
        <h3 className="text-xl font-bold text-[#2C3338] mb-2 mt-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}>
          <Button variant="link" className="p-0 text-[#456F8C] hover:text-[#2C3338]">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export default ServiceCard
