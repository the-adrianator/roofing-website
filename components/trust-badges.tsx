import Image from "next/image"

const badges = [
  {
    id: 1,
    name: "NFRC",
    description: "National Federation of Roofing Contractors",
    image: "/images/badge-nfrc.png",
  },
  {
    id: 2,
    name: "Checkatrade",
    description: "Vetted, Monitored, Reviewed",
    image: "/images/badge-checkatrade.png",
  },
  {
    id: 3,
    name: "TrustMark",
    description: "Government Endorsed Quality",
    image: "/images/badge-trustmark.png",
  },
  {
    id: 4,
    name: "Which? Trusted Trader",
    description: "Endorsed Service",
    image: "/images/badge-which.png",
  },
  {
    id: 5,
    name: "25 Year Warranty",
    description: "Extended Warranty Protection",
    image: "/images/badge-warranty.png",
  },
  {
    id: 6,
    name: "SafeContractor",
    description: "Health & Safety Accredited",
    image: "/images/badge-safecontractor.png",
  },
]

const TrustBadges = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
      {badges.map((badge) => (
        <div key={badge.id} className="flex flex-col items-center text-center">
          <div className="relative h-20 w-20 mb-3">
            <Image
              src={badge.image || "/placeholder.svg?height=100&width=100&query=certification badge"}
              alt={badge.name}
              fill
              className="object-contain"
            />
          </div>
          <h4 className="font-bold text-sm text-[#2C3338]">{badge.name}</h4>
          <p className="text-xs text-gray-500">{badge.description}</p>
        </div>
      ))}
    </div>
  )
}

export default TrustBadges
