"use client"

import { Card } from "@/components/ui/card"
import { Trophy, Target, Award, Coins } from "lucide-react"

interface UserStatsProps {
  wins: number
  losses: number
  rank: number
  nftsOwned: number
}

export function UserStats({ wins, losses, rank, nftsOwned }: UserStatsProps) {
  const winRate = wins + losses > 0 ? ((wins / (wins + losses)) * 100).toFixed(1) : "0.0"

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Trophy className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-2xl font-bold text-card-foreground">{wins}</div>
            <div className="text-sm text-muted-foreground">Wins</div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
            <Target className="w-5 h-5 text-destructive" />
          </div>
          <div>
            <div className="text-2xl font-bold text-card-foreground">{losses}</div>
            <div className="text-sm text-muted-foreground">Losses</div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <Award className="w-5 h-5 text-accent" />
          </div>
          <div>
            <div className="text-2xl font-bold text-card-foreground">#{rank}</div>
            <div className="text-sm text-muted-foreground">Global Rank</div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-chart-3/10 flex items-center justify-center">
            <Coins className="w-5 h-5 text-chart-3" />
          </div>
          <div>
            <div className="text-2xl font-bold text-card-foreground">{nftsOwned}</div>
            <div className="text-sm text-muted-foreground">NFTs Owned</div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card border-border col-span-2 lg:col-span-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Win Rate</div>
            <div className="text-3xl font-bold text-card-foreground">{winRate}%</div>
          </div>
          <div className="w-32 h-32 rounded-full border-8 border-primary/20 flex items-center justify-center relative">
            <div
              className="absolute inset-0 rounded-full border-8 border-primary"
              style={{
                clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.sin((Number.parseFloat(winRate) / 100) * 2 * Math.PI)}% ${50 - 50 * Math.cos((Number.parseFloat(winRate) / 100) * 2 * Math.PI)}%, 100% 100%, 0% 100%)`,
              }}
            />
            <span className="text-2xl font-bold text-primary z-10">{winRate}%</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
