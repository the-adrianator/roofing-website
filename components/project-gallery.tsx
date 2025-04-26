"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

const projects = {
  residential: [
    {
      id: 1,
      title: "Victorian Home Restoration",
      location: "Kensington, London",
      description: "Complete slate roof restoration for a Grade II listed Victorian property.",
      beforeImage: "/images/residential-before-1.jpg",
      afterImage: "/images/residential-after-1.jpg",
    },
    {
      id: 2,
      title: "Modern Flat Roof Installation",
      location: "Islington, London",
      description: "High-performance EPDM flat roof with integrated skylights for a contemporary home.",
      beforeImage: "/images/residential-before-2.jpg",
      afterImage: "/images/residential-after-2.jpg",
    },
    {
      id: 3,
      title: "Eco-Friendly Roof Conversion",
      location: "Richmond, London",
      description: "Conversion to a green roof system with solar panel integration for maximum energy efficiency.",
      beforeImage: "/images/residential-before-3.jpg",
      afterImage: "/images/residential-after-3.jpg",
    },
  ],
  commercial: [
    {
      id: 1,
      title: "Office Building Renovation",
      location: "Canary Wharf, London",
      description: "Complete roof replacement for a 10-story office building with minimal business disruption.",
      beforeImage: "/images/commercial-before-1.jpg",
      afterImage: "/images/commercial-after-1.jpg",
    },
    {
      id: 2,
      title: "Retail Complex Waterproofing",
      location: "Stratford, London",
      description: "Advanced waterproofing system for a large retail complex with 25-year guarantee.",
      beforeImage: "/images/commercial-before-2.jpg",
      afterImage: "/images/commercial-after-2.jpg",
    },
    {
      id: 3,
      title: "Hotel Roof Terrace",
      location: "Westminster, London",
      description: "Custom roof terrace installation with integrated drainage and entertainment areas.",
      beforeImage: "/images/commercial-before-3.jpg",
      afterImage: "/images/commercial-after-3.jpg",
    },
  ],
  historic: [
    {
      id: 1,
      title: "Church Spire Restoration",
      location: "Greenwich, London",
      description: "Meticulous restoration of a 19th century church spire using traditional materials and techniques.",
      beforeImage: "/images/historic-before-1.jpg",
      afterImage: "/images/historic-after-1.jpg",
    },
    {
      id: 2,
      title: "Museum Roof Repair",
      location: "Bloomsbury, London",
      description: "Sensitive repair and conservation of a listed museum building roof with original features.",
      beforeImage: "/images/historic-before-2.jpg",
      afterImage: "/images/historic-after-2.jpg",
    },
    {
      id: 3,
      title: "Heritage Building Conservation",
      location: "City of London",
      description: "Comprehensive roof conservation project for a Grade I listed heritage building.",
      beforeImage: "/images/historic-before-3.jpg",
      afterImage: "/images/historic-after-3.jpg",
    },
  ],
}

const ProjectGallery = () => {
  const [currentCategory, setCurrentCategory] = useState("residential")
  const [showBefore, setShowBefore] = useState<Record<string, boolean>>({})

  const toggleBeforeAfter = (id: number) => {
    setShowBefore((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <Tabs defaultValue="residential" onValueChange={setCurrentCategory}>
      <div className="flex justify-center mb-8">
        <TabsList className="bg-gray-100">
          <TabsTrigger value="residential" className="data-[state=active]:bg-[#456F8C] data-[state=active]:text-white">
            Residential
          </TabsTrigger>
          <TabsTrigger value="commercial" className="data-[state=active]:bg-[#456F8C] data-[state=active]:text-white">
            Commercial
          </TabsTrigger>
          <TabsTrigger value="historic" className="data-[state=active]:bg-[#456F8C] data-[state=active]:text-white">
            Historic
          </TabsTrigger>
        </TabsList>
      </div>

      {Object.entries(projects).map(([category, projectList]) => (
        <TabsContent key={category} value={category} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList.map((project) => (
              <div key={project.id} className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative h-64 w-full">
                  <Image
                    src={
                      showBefore[project.id]
                        ? project.beforeImage || "/placeholder.svg?height=300&width=400&query=roofing project before"
                        : project.afterImage || "/placeholder.svg?height=300&width=400&query=roofing project after"
                    }
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                  <div className="absolute top-4 right-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleBeforeAfter(project.id)}
                      className="bg-white/80 hover:bg-white text-[#2C3338] border-none"
                    >
                      {showBefore[project.id] ? "View After" : "View Before"}
                    </Button>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-white/80 text-sm mb-2">{project.location}</p>
                    <p className="text-white/90 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default ProjectGallery
