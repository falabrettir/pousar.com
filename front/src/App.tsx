import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plane, Hotel, Car, Search } from "lucide-react"

export default function TravelLandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Header */}
      <header className="w-full py-6 shadow-sm bg-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-blue-600">Pousar.com</h1>
          <nav className="space-x-6 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-blue-600">Flights</a>
            <a href="#" className="hover:text-blue-600">Hotels</a>
            <a href="#" className="hover:text-blue-600">Cars</a>
            <a href="#" className="hover:text-blue-600">Deals</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign In</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Your journey, simplified.
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          Book flights, hotels, and cars with ease. Compare hundreds of airlines and bundle your trip for the best experience.
        </p>

        <Card className="w-full max-w-3xl shadow-lg">
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input placeholder="From" />
              <Input placeholder="To" />
              <Input type="date" />
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Search className="w-4 h-4 mr-2" /> Search
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          <FeatureCard
            icon={<Plane className="w-10 h-10 text-blue-600" />}
            title="Flights"
            text="Effortlessly compare prices from hundreds of airlines."
          />
          <FeatureCard
            icon={<Hotel className="w-10 h-10 text-blue-600" />}
            title="Hotels"
            text="Find the perfect place to stay at unbeatable rates."
          />
          <FeatureCard
            icon={<Car className="w-10 h-10 text-blue-600" />}
            title="Car Rentals"
            text="Get around with ease — rent from top providers worldwide."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center py-16 px-4">
        <h3 className="text-3xl font-semibold mb-4">
          Ready to start your next adventure?
        </h3>
        <p className="text-lg mb-8">
          Simplify your travel planning — all in one place.
        </p>
        <Button variant="secondary" className="text-blue-600 bg-white hover:bg-gray-100">
          Explore Deals
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Pousar.com. All rights reserved.
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, text }) {
  return (
    <Card className="text-center p-6 shadow-md">
      <CardContent className="flex flex-col items-center space-y-4">
        {icon}
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-gray-600">{text}</p>
      </CardContent>
    </Card>
  )
}
