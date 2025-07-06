import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, Users, Camera, Star, Globe, Heart, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProfilePage() {
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
            <Button variant="outline">Edit Profile</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Profile Header */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback className="text-2xl">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="text-3xl font-bold">John Doe</h1>
                <p className="text-gray-600 text-lg">Digital Nomad & Travel Photographer</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Currently in Bali, Indonesia
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Joined March 2023
                  </div>
                </div>
                <p className="mt-3 text-gray-700 max-w-2xl">
                  Passionate traveler exploring the world one destination at a time. Love sharing hidden gems, local
                  experiences, and photography tips. Always happy to connect with fellow adventurers! 🌍
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <Button>Message</Button>
                <Button variant="outline">Connect</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold">23</div>
              <div className="text-sm text-gray-500">Countries Visited</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Camera className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">47</div>
              <div className="text-sm text-gray-500">Travel Posts</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold">156</div>
              <div className="text-sm text-gray-500">Connections</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Star className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
              <div className="text-2xl font-bold">4.8</div>
              <div className="text-sm text-gray-500">Travel Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="posts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="posts">Travel Posts</TabsTrigger>
            <TabsTrigger value="destinations">Destinations</TabsTrigger>
            <TabsTrigger value="connections">Connections</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-3 w-3 mr-1" />
                      Ubud, Bali • 3 days ago
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Incredible sunrise at Mount Batur! The 2AM wake-up call was worth every second. The view from the
                  summit overlooking Lake Batur is absolutely breathtaking. Pro tip: Bring warm clothes - it gets cold
                  at 1,717m altitude! 🌋
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Mount Batur sunrise"
                  width={500}
                  height={300}
                  className="rounded-lg w-full object-cover mb-4"
                />
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4 mr-1" />
                    32
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="h-4 w-4 mr-1" />8
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-3 w-3 mr-1" />
                      Canggu, Bali • 1 week ago
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Found the perfect co-working spot in Canggu! Deus Ex Machina has amazing coffee, fast wifi, and you
                  can watch surfers while you work. The digital nomad dream is real here! Anyone else working remotely
                  from Bali? 💻
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=250"
                    alt="Coworking space"
                    width={250}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <Image
                    src="/placeholder.svg?height=200&width=250"
                    alt="Canggu beach"
                    width={250}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4 mr-1" />
                    28
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    12
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="destinations">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Bali, Indonesia", visits: 3, rating: 5 },
                { name: "Tokyo, Japan", visits: 2, rating: 5 },
                { name: "Santorini, Greece", visits: 1, rating: 4 },
                { name: "Machu Picchu, Peru", visits: 1, rating: 5 },
                { name: "Iceland", visits: 1, rating: 4 },
                { name: "New Zealand", visits: 2, rating: 5 },
              ].map((destination, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <Image
                      src={`/placeholder.svg?height=150&width=200`}
                      alt={destination.name}
                      width={200}
                      height={150}
                      className="rounded-lg w-full object-cover mb-3"
                    />
                    <h3 className="font-semibold">{destination.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-gray-500">{destination.visits} visits</span>
                      <div className="flex items-center">
                        {[...Array(destination.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="connections">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Sarah Miller", location: "Santorini, Greece", avatar: "SM" },
                { name: "Mike Johnson", location: "Tokyo, Japan", avatar: "MJ" },
                { name: "Anna Lopez", location: "Machu Picchu, Peru", avatar: "AL" },
                { name: "David Chen", location: "Singapore", avatar: "DC" },
                { name: "Emma Wilson", location: "London, UK", avatar: "EW" },
                { name: "Carlos Rodriguez", location: "Barcelona, Spain", avatar: "CR" },
              ].map((connection, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>{connection.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold">{connection.name}</h3>
                        <p className="text-sm text-gray-500">{connection.location}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="space-y-4">
              {[
                {
                  place: "Ubud Monkey Forest Sanctuary",
                  rating: 4,
                  review:
                    "Amazing experience with the monkeys! Just be careful with your belongings - they're quite mischievous!",
                },
                {
                  place: "Tanah Lot Temple",
                  rating: 5,
                  review:
                    "Stunning sunset views! Best visited during low tide. The temple on the rock formation is iconic.",
                },
                {
                  place: "Sekumpul Waterfall",
                  rating: 5,
                  review:
                    "Hidden gem in North Bali! The trek down is challenging but the waterfall is absolutely spectacular.",
                },
              ].map((review, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{review.place}</h3>
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.review}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
