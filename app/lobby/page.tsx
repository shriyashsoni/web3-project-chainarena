"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useWallet } from "@/lib/wallet-context"
import { Wallet, Users, Clock, Trophy, Plus, Swords, Zap } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface GameMatch {
  id: string
  host: string
  status: "waiting" | "in-progress"
  players: number
  maxPlayers: number
  wager: string
  createdAt: string
}

// Mock data - in production, this would come from the blockchain
const mockMatches: GameMatch[] = [
  {
    id: "1",
    host: "0x742d...3f4a",
    status: "waiting",
    players: 1,
    maxPlayers: 2,
    wager: "0.01",
    createdAt: "2 min ago",
  },
  {
    id: "2",
    host: "0x8b3c...9d2e",
    status: "waiting",
    players: 1,
    maxPlayers: 2,
    wager: "0.05",
    createdAt: "5 min ago",
  },
  {
    id: "3",
    host: "0x1a5f...7c8b",
    status: "in-progress",
    players: 2,
    maxPlayers: 2,
    wager: "0.02",
    createdAt: "8 min ago",
  },
]

export default function LobbyPage() {
  const { address, isConnected } = useWallet()
  const [matches, setMatches] = useState<GameMatch[]>(mockMatches)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [wagerAmount, setWagerAmount] = useState("0.01")

  const handleCreateMatch = () => {
    const newMatch: GameMatch = {
      id: String(matches.length + 1),
      host: address || "0x0000...0000",
      status: "waiting",
      players: 1,
      maxPlayers: 2,
      wager: wagerAmount,
      createdAt: "Just now",
    }
    setMatches([newMatch, ...matches])
    setShowCreateModal(false)
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
                Please connect your wallet to access the game lobby and start playing.
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
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-foreground">Game Lobby</h1>
              <p className="text-muted-foreground">Join an existing match or create your own</p>
            </div>
            <Button size="lg" onClick={() => setShowCreateModal(true)} className="gap-2">
              <Plus className="w-5 h-5" />
              Create Match
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <Card className="p-4 bg-card border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-card-foreground">247</div>
                  <div className="text-sm text-muted-foreground">Players Online</div>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Swords className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-card-foreground">
                    {matches.filter((m) => m.status === "waiting").length}
                  </div>
                  <div className="text-sm text-muted-foreground">Open Matches</div>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-chart-3/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-chart-3" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-card-foreground">
                    {matches.filter((m) => m.status === "in-progress").length}
                  </div>
                  <div className="text-sm text-muted-foreground">Active Games</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Matches List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Available Matches</h2>
            {matches.length === 0 ? (
              <Card className="p-12 text-center bg-card border-border">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Swords className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">No matches available</h3>
                <p className="text-muted-foreground mb-6">Be the first to create a match!</p>
                <Button onClick={() => setShowCreateModal(true)} className="gap-2">
                  <Plus className="w-5 h-5" />
                  Create Match
                </Button>
              </Card>
            ) : (
              matches.map((match) => (
                <Card key={match.id} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Swords className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-card-foreground">Match #{match.id}</h3>
                          <Badge
                            variant={match.status === "waiting" ? "default" : "secondary"}
                            className={match.status === "waiting" ? "bg-accent/10 text-accent border-accent/20" : ""}
                          >
                            {match.status === "waiting" ? "Waiting" : "In Progress"}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {match.players}/{match.maxPlayers} Players
                          </span>
                          <span className="flex items-center gap-1">
                            <Trophy className="w-4 h-4" />
                            {match.wager} ETH Wager
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {match.createdAt}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Host: <span className="font-mono">{match.host}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      {match.status === "waiting" && match.host !== address ? (
                        <Button size="lg" asChild>
                          <Link href={`/game/${match.id}`}>Join Match</Link>
                        </Button>
                      ) : match.status === "waiting" && match.host === address ? (
                        <Button size="lg" variant="outline" disabled>
                          Waiting for Opponent
                        </Button>
                      ) : (
                        <Button size="lg" variant="outline" disabled>
                          In Progress
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Create Match Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md p-6 bg-card border-border">
            <h2 className="text-2xl font-bold mb-4 text-card-foreground">Create New Match</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">Wager Amount (ETH)</label>
                <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  value={wagerAmount}
                  onChange={(e) => setWagerAmount(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="0.01"
                />
                <p className="text-xs text-muted-foreground mt-1">Winner takes all. Minimum wager is 0.01 ETH.</p>
              </div>

              <div className="bg-secondary/50 p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-card-foreground mb-2">Match Details</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Game Mode: 1v1 PvP</li>
                  <li>• Max Players: 2</li>
                  <li>• Platform Fee: 2.5%</li>
                  <li>• Instant blockchain settlement</li>
                </ul>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setShowCreateModal(false)}>
                  Cancel
                </Button>
                <Button className="flex-1 gap-2" onClick={handleCreateMatch}>
                  <Plus className="w-4 h-4" />
                  Create Match
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
