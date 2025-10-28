"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useWallet } from "@/lib/wallet-context"
import { Wallet, Trophy, Award, Medal, Sparkles, ExternalLink, Calendar } from "lucide-react"
import { useState } from "react"

interface NFT {
  id: string
  name: string
  description: string
  image: string
  rarity: "common" | "rare" | "epic" | "legendary"
  earnedDate: string
  matchId: string
}

// Mock NFT data
const mockNFTs: NFT[] = [
  {
    id: "1",
    name: "Victory Badge #147",
    description: "Earned by winning a competitive match",
    image: "/golden-trophy-badge.jpg",
    rarity: "common",
    earnedDate: "2024-01-15",
    matchId: "147",
  },
  {
    id: "2",
    name: "Champion Trophy #89",
    description: "Awarded for a 10-win streak",
    image: "/champion-trophy-with-stars.jpg",
    rarity: "rare",
    earnedDate: "2024-01-14",
    matchId: "89",
  },
  {
    id: "3",
    name: "Legendary Warrior",
    description: "Exclusive NFT for reaching top 100",
    image: "/legendary-warrior-shield.jpg",
    rarity: "epic",
    earnedDate: "2024-01-12",
    matchId: "76",
  },
  {
    id: "4",
    name: "Perfect Victory",
    description: "Won without taking damage",
    image: "/perfect-victory-crown.jpg",
    rarity: "legendary",
    earnedDate: "2024-01-10",
    matchId: "65",
  },
  {
    id: "5",
    name: "Victory Badge #132",
    description: "Earned by winning a competitive match",
    image: "/silver-trophy-badge.jpg",
    rarity: "common",
    earnedDate: "2024-01-09",
    matchId: "132",
  },
  {
    id: "6",
    name: "Speed Demon",
    description: "Won in under 2 minutes",
    image: "/speed-lightning-bolt.jpg",
    rarity: "rare",
    earnedDate: "2024-01-08",
    matchId: "121",
  },
]

export default function NFTGalleryPage() {
  const { address, isConnected } = useWallet()
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null)
  const [filter, setFilter] = useState<"all" | "common" | "rare" | "epic" | "legendary">("all")

  const filteredNFTs = filter === "all" ? mockNFTs : mockNFTs.filter((nft) => nft.rarity === filter)

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-muted/10 text-muted-foreground border-muted/20"
      case "rare":
        return "bg-primary/10 text-primary border-primary/20"
      case "epic":
        return "bg-accent/10 text-accent border-accent/20"
      case "legendary":
        return "bg-chart-3/10 text-chart-3 border-chart-3/20"
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20"
    }
  }

  const getRarityIcon = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return <Trophy className="w-4 h-4" />
      case "epic":
        return <Award className="w-4 h-4" />
      case "rare":
        return <Medal className="w-4 h-4" />
      default:
        return <Sparkles className="w-4 h-4" />
    }
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <Card className="p-12 text-center bg-card border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Wallet className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mb-4 text-card-foreground">Connect Your Wallet</h1>
              <p className="text-muted-foreground mb-8">Please connect your wallet to view your NFT collection.</p>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold mb-2 text-foreground">NFT Gallery</h1>
                <p className="text-muted-foreground">Your collection of earned achievements</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">{mockNFTs.length}</div>
                <div className="text-sm text-muted-foreground">Total NFTs</div>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                All ({mockNFTs.length})
              </button>
              <button
                onClick={() => setFilter("common")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === "common"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                Common ({mockNFTs.filter((n) => n.rarity === "common").length})
              </button>
              <button
                onClick={() => setFilter("rare")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === "rare"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                Rare ({mockNFTs.filter((n) => n.rarity === "rare").length})
              </button>
              <button
                onClick={() => setFilter("epic")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === "epic"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                Epic ({mockNFTs.filter((n) => n.rarity === "epic").length})
              </button>
              <button
                onClick={() => setFilter("legendary")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === "legendary"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                Legendary ({mockNFTs.filter((n) => n.rarity === "legendary").length})
              </button>
            </div>
          </div>

          {/* NFT Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNFTs.map((nft) => (
              <Card
                key={nft.id}
                className="p-0 bg-card border-border hover:border-primary/50 transition-all cursor-pointer overflow-hidden group"
                onClick={() => setSelectedNFT(nft)}
              >
                <div className="aspect-square bg-secondary/50 overflow-hidden">
                  <img
                    src={nft.image || "/placeholder.svg"}
                    alt={nft.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-card-foreground">{nft.name}</h3>
                    <Badge className={getRarityColor(nft.rarity)}>
                      <span className="flex items-center gap-1">
                        {getRarityIcon(nft.rarity)}
                        <span className="capitalize">{nft.rarity}</span>
                      </span>
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{nft.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {nft.earnedDate}
                    </span>
                    <span>Match #{nft.matchId}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredNFTs.length === 0 && (
            <Card className="p-12 text-center bg-card border-border">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">No NFTs found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or play more matches to earn NFTs!</p>
            </Card>
          )}
        </div>
      </div>

      {/* NFT Detail Modal */}
      {selectedNFT && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedNFT(null)}
        >
          <Card
            className="w-full max-w-2xl p-0 bg-card border-border overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              <div className="aspect-square bg-secondary/50">
                <img
                  src={selectedNFT.image || "/placeholder.svg"}
                  alt={selectedNFT.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-bold text-card-foreground">{selectedNFT.name}</h2>
                  <Badge className={getRarityColor(selectedNFT.rarity)}>
                    <span className="flex items-center gap-1">
                      {getRarityIcon(selectedNFT.rarity)}
                      <span className="capitalize">{selectedNFT.rarity}</span>
                    </span>
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6">{selectedNFT.description}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">Token ID</span>
                    <span className="font-mono text-sm text-card-foreground">#{selectedNFT.id}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">Match ID</span>
                    <span className="font-mono text-sm text-card-foreground">#{selectedNFT.matchId}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">Earned Date</span>
                    <span className="text-sm text-card-foreground">{selectedNFT.earnedDate}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">Owner</span>
                    <span className="font-mono text-sm text-card-foreground">
                      {address?.slice(0, 6)}...{address?.slice(-4)}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setSelectedNFT(null)}>
                    Close
                  </Button>
                  <Button className="flex-1 gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View on Explorer
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
