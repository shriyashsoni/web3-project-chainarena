"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, X, Clock } from "lucide-react"

interface Match {
  id: string
  opponent: string
  result: "win" | "loss"
  timestamp: string
  duration: string
  nftReward?: string
}

interface MatchHistoryProps {
  matches: Match[]
}

export function MatchHistory({ matches }: MatchHistoryProps) {
  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="text-xl font-bold mb-4 text-card-foreground">Recent Matches</h3>
      <div className="space-y-3">
        {matches.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <p>No matches played yet</p>
            <p className="text-sm mt-2">Start playing to see your match history</p>
          </div>
        ) : (
          matches.map((match) => (
            <div
              key={match.id}
              className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    match.result === "win" ? "bg-primary/10" : "bg-destructive/10"
                  }`}
                >
                  {match.result === "win" ? (
                    <Trophy className="w-5 h-5 text-primary" />
                  ) : (
                    <X className="w-5 h-5 text-destructive" />
                  )}
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">vs {match.opponent}</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    {match.timestamp} • {match.duration}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {match.nftReward && (
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                    NFT Reward
                  </Badge>
                )}
                <Badge variant={match.result === "win" ? "default" : "destructive"}>
                  {match.result === "win" ? "Victory" : "Defeat"}
                </Badge>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  )
}
