"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"

const QuoteCalculator = () => {
  const [roofType, setRoofType] = useState("pitched")
  const [roofSize, setRoofSize] = useState(100)
  const [roofMaterial, setRoofMaterial] = useState("asphalt")
  const [propertyType, setPropertyType] = useState("residential")
  const [quoteResult, setQuoteResult] = useState<number | null>(null)

  const calculateQuote = () => {
    // Base rates per square meter
    const baseRates = {
      asphalt: 80,
      slate: 150,
      tile: 120,
      metal: 140,
      epdm: 90,
      green: 180,
    }

    // Multipliers
    const roofTypeMultiplier = roofType === "pitched" ? 1.2 : 1
    const propertyTypeMultiplier = propertyType === "commercial" ? 1.3 : 1

    // Calculate estimate
    const baseRate = baseRates[roofMaterial as keyof typeof baseRates]
    const estimate = baseRate * roofSize * roofTypeMultiplier * propertyTypeMultiplier

    // Add 20% contingency
    const totalEstimate = Math.round(estimate * 1.2)

    setQuoteResult(totalEstimate)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="space-y-6">
            <div>
              <Label className="text-white mb-2 block">Property Type</Label>
              <RadioGroup value={propertyType} onValueChange={setPropertyType} className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="residential" id="residential" className="border-white" />
                  <Label htmlFor="residential" className="text-white">
                    Residential
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="commercial" id="commercial" className="border-white" />
                  <Label htmlFor="commercial" className="text-white">
                    Commercial
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="text-white mb-2 block">Roof Type</Label>
              <RadioGroup value={roofType} onValueChange={setRoofType} className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pitched" id="pitched" className="border-white" />
                  <Label htmlFor="pitched" className="text-white">
                    Pitched
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="flat" id="flat" className="border-white" />
                  <Label htmlFor="flat" className="text-white">
                    Flat
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="text-white mb-2 block">Roof Material</Label>
              <Select value={roofMaterial} onValueChange={setRoofMaterial}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select material" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asphalt">Asphalt Shingles</SelectItem>
                  <SelectItem value="slate">Slate</SelectItem>
                  <SelectItem value="tile">Clay/Concrete Tiles</SelectItem>
                  <SelectItem value="metal">Metal Roofing</SelectItem>
                  <SelectItem value="epdm">EPDM Rubber</SelectItem>
                  <SelectItem value="green">Green Roof</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <Label className="text-white">Roof Size (m²): {roofSize}</Label>
              </div>
              <Slider
                value={[roofSize]}
                min={20}
                max={500}
                step={10}
                onValueChange={(value) => setRoofSize(value[0])}
                className="py-4"
              />
              <div className="flex justify-between text-sm text-white/70">
                <span>20 m²</span>
                <span>500 m²</span>
              </div>
            </div>

            <Button onClick={calculateQuote} className="w-full bg-[#C5A572] hover:bg-[#b39461] text-white">
              Calculate Estimate
            </Button>
          </div>
        </div>

        <div>
          {quoteResult ? (
            <Card className="bg-white/10 border-white/20 text-white h-full flex flex-col justify-center">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Your Estimated Quote</h3>
                <div className="text-4xl font-bold text-[#C5A572] mb-4">£{quoteResult.toLocaleString()}</div>
                <p className="mb-6 text-white/80">
                  This is an approximate estimate based on the information provided. For a detailed quote, please
                  contact our team.
                </p>
                <Button className="bg-white text-[#456F8C] hover:bg-gray-100">Request Detailed Quote</Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white/10 border-white/20 text-white h-full flex flex-col justify-center">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Your Estimate</h3>
                <p className="mb-6 text-white/80">
                  Fill in the details on the left to get an instant estimate for your roofing project.
                </p>
                <div className="text-white/60 italic">
                  Please note that this calculator provides a rough estimate. For accurate pricing, we recommend a
                  professional inspection.
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuoteCalculator
