"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const boroughs = [
  {
    id: "barking",
    name: "Barking and Dagenham",
    position: { top: "45%", left: "80%" },
  },
  { id: "barnet", name: "Barnet", position: { top: "20%", left: "45%" } },
  { id: "bexley", name: "Bexley", position: { top: "50%", left: "85%" } },
  { id: "brent", name: "Brent", position: { top: "25%", left: "35%" } },
  { id: "bromley", name: "Bromley", position: { top: "65%", left: "75%" } },
  { id: "camden", name: "Camden", position: { top: "30%", left: "40%" } },
  { id: "city", name: "City of London", position: { top: "40%", left: "50%" } },
  { id: "croydon", name: "Croydon", position: { top: "70%", left: "60%" } },
  { id: "ealing", name: "Ealing", position: { top: "35%", left: "25%" } },
  { id: "enfield", name: "Enfield", position: { top: "15%", left: "55%" } },
  { id: "greenwich", name: "Greenwich", position: { top: "55%", left: "70%" } },
  { id: "hackney", name: "Hackney", position: { top: "35%", left: "55%" } },
  {
    id: "hammersmith",
    name: "Hammersmith and Fulham",
    position: { top: "40%", left: "30%" },
  },
  { id: "haringey", name: "Haringey", position: { top: "25%", left: "50%" } },
  { id: "harrow", name: "Harrow", position: { top: "20%", left: "25%" } },
  { id: "havering", name: "Havering", position: { top: "40%", left: "90%" } },
  {
    id: "hillingdon",
    name: "Hillingdon",
    position: { top: "30%", left: "15%" },
  },
  { id: "hounslow", name: "Hounslow", position: { top: "45%", left: "20%" } },
  { id: "islington", name: "Islington", position: { top: "35%", left: "45%" } },
  {
    id: "kensington",
    name: "Kensington and Chelsea",
    position: { top: "40%", left: "35%" },
  },
  {
    id: "kingston",
    name: "Kingston upon Thames",
    position: { top: "60%", left: "30%" },
  },
  { id: "lambeth", name: "Lambeth", position: { top: "45%", left: "45%" } },
  { id: "lewisham", name: "Lewisham", position: { top: "55%", left: "60%" } },
  { id: "merton", name: "Merton", position: { top: "55%", left: "40%" } },
  { id: "newham", name: "Newham", position: { top: "40%", left: "65%" } },
  { id: "redbridge", name: "Redbridge", position: { top: "35%", left: "75%" } },
  {
    id: "richmond",
    name: "Richmond upon Thames",
    position: { top: "50%", left: "25%" },
  },
  { id: "southwark", name: "Southwark", position: { top: "45%", left: "55%" } },
  { id: "sutton", name: "Sutton", position: { top: "65%", left: "45%" } },
  { id: "tower", name: "Tower Hamlets", position: { top: "40%", left: "55%" } },
  {
    id: "waltham",
    name: "Waltham Forest",
    position: { top: "30%", left: "65%" },
  },
  {
    id: "wandsworth",
    name: "Wandsworth",
    position: { top: "45%", left: "35%" },
  },
  {
    id: "westminster",
    name: "Westminster",
    position: { top: "40%", left: "40%" },
  },
];

const ServiceAreaMap = () => {
  const [hoveredBorough, setHoveredBorough] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <div className="relative h-[500px] w-full border rounded-lg overflow-hidden">
          <Image
            src="/images/london-map.png"
            alt="Map of London Boroughs"
            fill
            className="object-contain"
          />

          {/* {boroughs.map((borough) => (
            <div
              key={borough.id}
              className="absolute w-3 h-3 bg-[#C5A572] rounded-full cursor-pointer transform hover:scale-150 transition-transform"
              style={{ top: borough.position.top, left: borough.position.left }}
              onMouseEnter={() => setHoveredBorough(borough.id)}
              onMouseLeave={() => setHoveredBorough(null)}
            />
          ))} */}

          {/* {hoveredBorough && (
            <div className="absolute pointer-events-none">
              {boroughs.map(
                (borough) =>
                  borough.id === hoveredBorough && (
                    <Card
                      key={borough.id}
                      className="absolute bg-white shadow-lg z-10"
                      style={{
                        top: `calc(${borough.position.top} - 20px)`,
                        left: `calc(${borough.position.left} + 15px)`,
                      }}
                    >
                      <CardContent className="p-2 text-sm">
                        {borough.name}
                      </CardContent>
                    </Card>
                  )
              )}
            </div>
          )} */}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {boroughs.map((borough) => (
          <div key={borough.id} className="flex items-center">
            <div className="w-2 h-2 bg-[#C5A572] rounded-full mr-2" />
            <span className="text-sm">{borough.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAreaMap;
