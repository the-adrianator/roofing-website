"use client";

import { useState } from "react";
import { Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EmergencyContact = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-40 transition-all duration-300",
        isExpanded
          ? "bg-white rounded-lg shadow-lg p-4"
          : "bg-red-600 rounded-full shadow-lg"
      )}
    >
      {isExpanded ? (
        <div className="flex flex-col items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-2 h-6 w-6 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          >
            <X className="h-4 w-4" />
          </Button>

          <h3 className="font-bold text-lg text-[#2C3338] mb-2">
            Emergency Roof Repairs
          </h3>
          <p className="text-gray-600 text-sm text-center mb-4">
            24/7 emergency service for urgent roofing issues
          </p>

          <div className="bg-gray-100 rounded-lg p-3 mb-4 w-full text-center">
            <p className="text-sm text-gray-500 mb-1">Call us now</p>
            <a
              href="tel:07551 139005"
              className="text-xl font-bold text-[#2C3338] flex items-center justify-center"
            >
              <Phone className="h-4 w-4 mr-2 text-red-600" />
              07551 139005
            </a>
          </div>

          <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
            Request Emergency Service
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => setIsExpanded(true)}
          className="bg-red-600 hover:bg-red-700 text-white rounded-full h-16 w-16 flex items-center justify-center"
        >
          <Phone className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default EmergencyContact;
