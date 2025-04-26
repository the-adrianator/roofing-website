"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner, Kensington",
    image: "/images/testimonial-1.png",
    content:
      "London Building & Roofing transformed our Victorian home with a beautiful slate roof that perfectly complements the period features. Their attention to detail and craftsmanship is exceptional.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Williams",
    role: "Property Manager, Canary Wharf",
    image: "/images/testimonial-2.png",
    content:
      "We've worked with London Building & Roofing on multiple commercial projects. Their team is professional, efficient, and delivers high-quality results every time. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Architect, Chelsea",
    image: "/images/testimonial-3.png",
    content:
      "As an architect, I appreciate their technical expertise and innovative approach to sustainable roofing solutions. They've been an excellent partner on several high-end residential projects.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Business Owner, Shoreditch",
    image: "/images/testimonial-4.png",
    content:
      "After storm damage to our office roof, London Building & Roofing responded quickly and efficiently. Their emergency repair service was excellent, and they minimized disruption to our business.",
    rating: 5,
  },
  {
    id: 5,
    name: "Olivia Parker",
    role: "Homeowner, Richmond",
    image: "/images/testimonial-5.png",
    content:
      "The team installed solar panels on our roof and the quality of work was outstanding. They were knowledgeable about the best sustainable options for our home and the installation was flawless.",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState<
    typeof testimonials
  >([]);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const endIndex = currentIndex + itemsPerView;
    let items = [];

    if (endIndex > testimonials.length) {
      // Wrap around to the beginning
      items = [
        ...testimonials.slice(currentIndex),
        ...testimonials.slice(0, endIndex - testimonials.length),
      ];
    } else {
      items = testimonials.slice(currentIndex, endIndex);
    }

    setVisibleTestimonials(items);
  }, [currentIndex, itemsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <div className="flex gap-6 transition-transform duration-500 w-full">
          {visibleTestimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="flex-1 min-w-0 border-none shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                    <Image
                      src={
                        testimonial.image ||
                        "/placeholder.svg?height=100&width=100&query=person"
                      }
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2C3338]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full border-[#456F8C] text-[#456F8C] hover:bg-[#456F8C] hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full border-[#456F8C] text-[#456F8C] hover:bg-[#456F8C] hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
