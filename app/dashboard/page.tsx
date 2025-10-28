"use client"

import { Navigation } from "@/components/navigation"
import { UserStats } from "@/components/user-stats"
import { MatchHistory } from "@/components/match-history"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useWallet } from "@/lib/wallet-context"
import { Wallet, ImageIcon, Swords } from "lucide-react"
import Link from "next/link"

// Mock data - in production, this would come from the blockchain
const mockUserData = {
  wins: 23,
  losses: 12,
  rank: 147,
  nftsOwned: 8,
}

const mockMatches = [
  {
    id: "1",
    opponent: "0x742d...3f4a",
    result: "win" as const,
    timestamp: "2 hours ago",
    duration: "4:32",
    nftReward: "Victory Badge #147",
  },
  {
    id: "2",
    opponent: "0x8b3c...9d2e",
    result: "win" as const,
    timestamp: "5 hours ago",
    duration: "6:15",
  },
  {
    id: "3",
    opponent: "0x1a5f...7c8b",
    result: "loss" as const,
    timestamp: "1 day ago",
    duration: "3:48",
  },
  {
    id: "4",
    opponent: "0x9e2d...4b1c",
    result: "win" as const,
    timestamp: "1 day ago",
    duration: "5:22",
    nftReward: "Champion Trophy #89",
  },
  {
    id: "5",
    opponent: "0x3c7a...6f9d",
    result: "loss" as const,
    timestamp: "2 days ago",
    duration: "4:05",
  },
]

export default function DashboardPage() {
  const { address, isConnected } = useWallet()

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
              <p className="text-muted-foreground mb-8">
                Please connect your wallet to view your dashboard and access your gaming stats.
              </p>
              <Button size="lg" className="gap-2" onClick={() => {}}>
                <Wallet className="w-5 h-5" />
                Connect Wallet
              </Button>
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
            <h1 className="text-4xl font-bold mb-2 text-foreground">Player Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back,{" "}
              <span className="font-mono text-foreground">
                {address?.slice(0, 10)}...{address?.slice(-8)}
              </span>
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mb-8">
            <UserStats
              wins={mockUserData.wins}
              losses={mockUserData.losses}
              rank={mockUserData.rank}
              nftsOwned={mockUserData.nftsOwned}
            />
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Swords className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-card-foreground">Play Now</h3>
                  <p className="text-sm text-muted-foreground">Join the game lobby</p>
                </div>
                <Button asChild>
                  <Link href="/lobby">Play</Link>
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-card-foreground">NFT Gallery</h3>
                  <p className="text-sm text-muted-foreground">View your collection</p>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/nft-gallery">View</Link>
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-chart-3/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-chart-3" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-card-foreground">Leaderboard</h3>
                  <p className="text-sm text-muted-foreground">Check your ranking</p>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/leaderboard">View</Link>
                </Button>
              </div>
            </Card>
          </div>

          {/* Match History */}
          <MatchHistory matches={mockMatches} />
        </div>
      </div>
    </div>
  )
}
