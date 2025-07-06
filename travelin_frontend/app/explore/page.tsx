import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, MapPin, Star, Users, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/feed" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">TC</span>
              </div>
              <span className="font-bold text-xl">TravelConnect</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/profile">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Search Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Explore Destinations</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input placeholder="Search destinations, cities, countries..." className="pl-10 h-12" />
            </div>
            <Button variant="outline" className="h-12 bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Popular Destinations */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Popular Destinations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Bali, Indonesia",
                travelers: 234,
                rating: 4.8,
                posts: 1247,
                tags: ["Beach", "Culture", "Digital Nomad"],
              },
              {
                name: "Tokyo, Japan",
                travelers: 189,
                rating: 4.9,
                posts: 892,
                tags: ["City", "Food", "Technology"],
              },
              {
                name: "Santorini, Greece",
                travelers: 156,
                rating: 4.7,
                posts: 743,
                tags: ["Island", "Romance", "Photography"],
              },
              {
                name: "Machu Picchu, Peru",
                travelers: 98,
                rating: 4.9,
                posts: 456,
                tags: ["Adventure", "History", "Hiking"],
              },
              {
                name: "Iceland",
                travelers: 87,
                rating: 4.8,
                posts: 623,
                tags: ["Nature", "Northern Lights", "Adventure"],
              },
              {
                name: "New Zealand",
                travelers: 134,
                rating: 4.9,
                posts: 789,
                tags: ["Adventure", "Nature", "Road Trip"],
              },
            ].map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <Image
                    src={`/placeholder.svg?height=200&width=300`}
                    alt={destination.name}
                    width={300}
                    height={200}
                    className="w-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-xs font-semibold">{destination.rating}</span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{destination.name}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Users className="h-4 w-4 mr-1" />
                    <span>
                      {destination.travelers} travelers • {destination.posts} posts
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {destination.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Travelers in Destinations */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Connect with Travelers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                destination: "Currently in Bali, Indonesia",
                travelers: [
                  { name: "Sarah Chen", avatar: "SC", expertise: "Local Food Expert" },
                  { name: "Mike Rodriguez", avatar: "MR", expertise: "Surfing Guide" },
                  { name: "Emma Thompson", avatar: "ET", expertise: "Digital Nomad" },
                ],
              },
              {
                destination: "Recently visited Tokyo, Japan",
                travelers: [
                  { name: "Yuki Tanaka", avatar: "YT", expertise: "Culture Guide" },
                  { name: "David Kim", avatar: "DK", expertise: "Food Enthusiast" },
                  { name: "Lisa Wang", avatar: "LW", expertise: "Photography" },
                ],
              },
            ].map((location, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    {location.destination}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {location.travelers.map((traveler, travelerIndex) => (
                      <div key={travelerIndex} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback>{traveler.avatar}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">{traveler.name}</h4>
                            <p className="text-sm text-gray-500">{traveler.expertise}</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Connect
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Travel Categories */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Browse by Interest</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Adventure", icon: "🏔️", count: 1234 },
              { name: "Beach", icon: "🏖️", count: 987 },
              { name: "Culture", icon: "🏛️", count: 756 },
              { name: "Food", icon: "🍜", count: 892 },
              { name: "Photography", icon: "📸", count: 654 },
              { name: "Digital Nomad", icon: "💻", count: 543 },
              { name: "Budget Travel", icon: "💰", count: 432 },
              { name: "Luxury", icon: "✨", count: 321 },
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="font-semibold">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} posts</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
