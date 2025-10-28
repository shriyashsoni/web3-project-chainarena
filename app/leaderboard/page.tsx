"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, TrendingUp, TrendingDown, Minus, Medal, Crown, Award, Wallet } from "lucide-react"
import { useState } from "react"
import { useWallet } from "@/lib/wallet-context"

interface LeaderboardPlayer {
  rank: number
  address: string
  wins: number
  losses: number
  winRate: number
  elo: number
  change: number
  nfts: number
}

// Mock leaderboard data
const mockLeaderboard: LeaderboardPlayer[] = [
  {
    rank: 1,
    address: "0x742d...3f4a",
    wins: 156,
    losses: 23,
    winRate: 87.2,
    elo: 2847,
    change: 12,
    nfts: 45,
  },
  {
    rank: 2,
    address: "0x8b3c...9d2e",
    wins: 142,
    losses: 31,
    winRate: 82.1,
    elo: 2734,
    change: -5,
    nfts: 38,
  },
  {
    rank: 3,
    address: "0x1a5f...7c8b",
    wins: 134,
    losses: 28,
    winRate: 82.7,
    elo: 2698,
    change: 8,
    nfts: 41,
  },
  {
    rank: 4,
    address: "0x9e2d...4b1c",
    wins: 128,
    losses: 35,
    winRate: 78.5,
    elo: 2621,
    change: 0,
    nfts: 35,
  },
  {
    rank: 5,
    address: "0x3c7a...6f9d",
    wins: 119,
    losses: 41,
    winRate: 74.4,
    elo: 2543,
    change: 15,
    nfts: 32,
  },
  {
    rank: 6,
    address: "0x5d8e...2a1f",
    wins: 112,
    losses: 38,
    winRate: 74.7,
    elo: 2489,
    change: -3,
    nfts: 29,
  },
  {
    rank: 7,
    address: "0x7f1b...9c4d",
    wins: 105,
    losses: 45,
    winRate: 70.0,
    elo: 2421,
    change: 7,
    nfts: 27,
  },
  {
    rank: 8,
    address: "0x2e9a...5b8c",
    wins: 98,
    losses: 42,
    winRate: 70.0,
    elo: 2387,
    change: -8,
    nfts: 24,
  },
  {
    rank: 9,
    address: "0x6c4f...3d7e",
    wins: 91,
    losses: 49,
    winRate: 65.0,
    elo: 2312,
    change: 4,
    nfts: 22,
  },
  {
    rank: 10,
    address: "0x4a2b...8e1f",
    wins: 87,
    losses: 53,
    winRate: 62.1,
    elo: 2276,
    change: -12,
    nfts: 19,
  },
]

export default function LeaderboardPage() {
  const [timeframe, setTimeframe] = useState<"daily" | "weekly" | "all-time">("all-time")
  const { isConnected } = useWallet()

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-chart-3" />
    if (rank === 2) return <Medal className="w-6 h-6 text-muted-foreground" />
    if (rank === 3) return <Award className="w-6 h-6 text-chart-4" />
    return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>
  }

  const getRankBadge = (rank: number) => {
    if (rank === 1) return <Badge className="bg-chart-3/10 text-chart-3 border-chart-3/20">Champion</Badge>
    if (rank === 2) return <Badge className="bg-muted/10 text-muted-foreground border-muted/20">Master</Badge>
    if (rank === 3) return <Badge className="bg-chart-4/10 text-chart-4 border-chart-4/20">Expert</Badge>
    if (rank <= 10) return <Badge variant="outline">Top 10</Badge>
    return null
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
              <p className="text-muted-foreground mb-8">
                Please connect your wallet to view the leaderboard and compete with other players.
              </p>
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
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground">Leaderboard</h1>
                <p className="text-muted-foreground">Top players ranked by ELO rating</p>
              </div>
            </div>

            {/* Timeframe Selector */}
            <div className="flex gap-2">
              <button
                onClick={() => setTimeframe("daily")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  timeframe === "daily"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                Daily
              </button>
              <button
                onClick={() => setTimeframe("weekly")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  timeframe === "weekly"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                Weekly
              </button>
              <button
                onClick={() => setTimeframe("all-time")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  timeframe === "all-time"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                All Time
              </button>
            </div>
          </div>

          {/* Top 3 Podium */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {/* 2nd Place */}
            <Card className="p-6 bg-card border-border order-2 md:order-1">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-muted/10 flex items-center justify-center mx-auto mb-3">
                  <Medal className="w-8 h-8 text-muted-foreground" />
                </div>
                <Badge className="mb-2 bg-muted/10 text-muted-foreground border-muted/20">2nd Place</Badge>
                <p className="font-mono text-sm text-muted-foreground mb-4">{mockLeaderboard[1].address}</p>
                <div className="space-y-2">
                  <div>
                    <div className="text-3xl font-bold text-card-foreground">{mockLeaderboard[1].elo}</div>
                    <div className="text-xs text-muted-foreground">ELO Rating</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {mockLeaderboard[1].wins}W - {mockLeaderboard[1].losses}L
                  </div>
                </div>
              </div>
            </Card>

            {/* 1st Place */}
            <Card className="p-6 bg-gradient-to-br from-chart-3/10 via-card to-card border-chart-3/20 order-1 md:order-2 md:scale-105">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-chart-3/10 flex items-center justify-center mx-auto mb-3">
                  <Crown className="w-10 h-10 text-chart-3" />
                </div>
                <Badge className="mb-2 bg-chart-3/10 text-chart-3 border-chart-3/20">Champion</Badge>
                <p className="font-mono text-sm text-muted-foreground mb-4">{mockLeaderboard[0].address}</p>
                <div className="space-y-2">
                  <div>
                    <div className="text-4xl font-bold text-chart-3">{mockLeaderboard[0].elo}</div>
                    <div className="text-xs text-muted-foreground">ELO Rating</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {mockLeaderboard[0].wins}W - {mockLeaderboard[0].losses}L
                  </div>
                </div>
              </div>
            </Card>

            {/* 3rd Place */}
            <Card className="p-6 bg-card border-border order-3">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-chart-4/10 flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-chart-4" />
                </div>
                <Badge className="mb-2 bg-chart-4/10 text-chart-4 border-chart-4/20">3rd Place</Badge>
                <p className="font-mono text-sm text-muted-foreground mb-4">{mockLeaderboard[2].address}</p>
                <div className="space-y-2">
                  <div>
                    <div className="text-3xl font-bold text-card-foreground">{mockLeaderboard[2].elo}</div>
                    <div className="text-xs text-muted-foreground">ELO Rating</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {mockLeaderboard[2].wins}W - {mockLeaderboard[2].losses}L
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Full Leaderboard Table */}
          <Card className="p-6 bg-card border-border">
            <h2 className="text-2xl font-bold mb-4 text-card-foreground">Rankings</h2>
            <div className="space-y-2">
              {mockLeaderboard.map((player) => (
                <div
                  key={player.rank}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 flex items-center justify-center">{getRankIcon(player.rank)}</div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono font-semibold text-card-foreground">{player.address}</span>
                      {getRankBadge(player.rank)}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>
                        {player.wins}W - {player.losses}L
                      </span>
                      <span>{player.winRate}% Win Rate</span>
                      <span>{player.nfts} NFTs</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-bold text-card-foreground">{player.elo}</div>
                    <div className="flex items-center justify-end gap-1 text-sm">
                      {player.change > 0 ? (
                        <>
                          <TrendingUp className="w-4 h-4 text-accent" />
                          <span className="text-accent">+{player.change}</span>
                        </>
                      ) : player.change < 0 ? (
                        <>
                          <TrendingDown className="w-4 h-4 text-destructive" />
                          <span className="text-destructive">{player.change}</span>
                        </>
                      ) : (
                        <>
                          <Minus className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">0</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
