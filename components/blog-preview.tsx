import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right Roofing Material for Your London Home",
    excerpt:
      "Discover the pros and cons of different roofing materials suitable for London's climate and architectural styles.",
    image: "/images/blog-1.jpg",
    date: "May 15, 2023",
    category: "Residential",
    slug: "choose-right-roofing-material",
  },
  {
    id: 2,
    title: "The Benefits of Green Roofing for Commercial Properties",
    excerpt:
      "Learn how green roofs can improve energy efficiency, reduce urban heat island effect, and enhance biodiversity in London.",
    image: "/images/blog-2.jpg",
    date: "April 22, 2023",
    category: "Commercial",
    slug: "benefits-green-roofing-commercial",
  },
  {
    id: 3,
    title: "Essential Roof Maintenance Tips for London's Weather Conditions",
    excerpt:
      "Practical advice on how to maintain your roof throughout London's varied weather conditions to prevent damage and extend its lifespan.",
    image: "/images/blog-3.jpg",
    date: "March 10, 2023",
    category: "Maintenance",
    slug: "roof-maintenance-london-weather",
  },
]

const BlogPreview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all group">
          <div className="relative h-48 w-full">
            <Image
              src={post.image || "/placeholder.svg?height=300&width=400&query=roofing blog"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <CardContent className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span className="text-[#456F8C]">{post.category}</span>
            </div>
            <h3 className="text-xl font-bold text-[#2C3338] mb-2 line-clamp-2">{post.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>
              <Button variant="link" className="p-0 text-[#456F8C] hover:text-[#2C3338]">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default BlogPreview
