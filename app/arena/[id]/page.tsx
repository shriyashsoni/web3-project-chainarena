"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useWallet } from "@/lib/wallet-context"
import { Trophy, Zap, Shield, Swords, Clock, Heart, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"

type GameState = "playing" | "victory" | "defeat"
type Move = "attack" | "defend" | "special"

interface Player {
  address: string
  health: number
  energy: number
  lastMove: Move | null
}

export default function ArenaPage() {
  const { address, isConnected } = useWallet()
  const params = useParams()
  const router = useRouter()
  const matchId = params.id as string

  const [gameState, setGameState] = useState<GameState>("playing")
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes
  const [round, setRound] = useState(1)
  const [selectedMove, setSelectedMove] = useState<Move | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const [player, setPlayer] = useState<Player>({
    address: address || "",
    health: 100,
    energy: 100,
    lastMove: null,
  })

  const [opponent, setOpponent] = useState<Player>({
    address: "0x8b3c...9d2e",
    health: 100,
    energy: 100,
    lastMove: null,
  })

  // Game timer
  useEffect(() => {
    if (gameState === "playing" && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && gameState === "playing") {
      // Time's up - determine winner by health
      if (player.health > opponent.health) {
        setGameState("victory")
      } else {
        setGameState("defeat")
      }
    }
  }, [timeLeft, gameState, player.health, opponent.health])

  const executeMove = (move: Move) => {
    if (isProcessing || gameState !== "playing") return

    setSelectedMove(move)
    setIsProcessing(true)

    // Simulate opponent move
    const opponentMoves: Move[] = ["attack", "defend", "special"]
    const opponentMove = opponentMoves[Math.floor(Math.random() * opponentMoves.length)]

    setTimeout(() => {
      // Calculate damage based on moves
      let playerDamage = 0
      let opponentDamage = 0

      // Player's move effect
      if (move === "attack") {
        if (opponentMove === "defend") {
          opponentDamage = 10 // Reduced damage
        } else {
          opponentDamage = 20
        }
      } else if (move === "special") {
        if (player.energy >= 30) {
          opponentDamage = 35
          setPlayer((p) => ({ ...p, energy: p.energy - 30 }))
        }
      }

      // Opponent's move effect
      if (opponentMove === "attack") {
        if (move === "defend") {
          playerDamage = 10
        } else {
          playerDamage = 20
        }
      } else if (opponentMove === "special") {
        if (opponent.energy >= 30) {
          playerDamage = 35
          setOpponent((o) => ({ ...o, energy: o.energy - 30 }))
        }
      }

      // Apply damage
      const newPlayerHealth = Math.max(0, player.health - playerDamage)
      const newOpponentHealth = Math.max(0, opponent.health - opponentDamage)

      setPlayer((p) => ({ ...p, health: newPlayerHealth, lastMove: move, energy: Math.min(100, p.energy + 10) }))
      setOpponent((o) => ({
        ...o,
        health: newOpponentHealth,
        lastMove: opponentMove,
        energy: Math.min(100, o.energy + 10),
      }))

      // Check for winner
      if (newPlayerHealth <= 0) {
        setGameState("defeat")
      } else if (newOpponentHealth <= 0) {
        setGameState("victory")
      }

      setRound(round + 1)
      setSelectedMove(null)
      setIsProcessing(false)
    }, 1500)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
      </div>
    )
  }

  if (gameState === "victory" || gameState === "defeat") {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <Card className="p-12 text-center bg-card border-border">
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  gameState === "victory" ? "bg-primary/10" : "bg-destructive/10"
                }`}
              >
                {gameState === "victory" ? (
                  <Trophy className="w-12 h-12 text-primary" />
                ) : (
                  <Swords className="w-12 h-12 text-destructive" />
                )}
              </div>

              <h1 className="text-5xl font-bold mb-4 text-card-foreground">
                {gameState === "victory" ? "Victory!" : "Defeat"}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {gameState === "victory"
                  ? "Congratulations! You've won the match and earned rewards."
                  : "Better luck next time. Keep practicing to improve your skills."}
              </p>

              {gameState === "victory" && (
                <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-card-foreground">NFT Reward Unlocked!</h3>
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-4">You've earned a Victory Badge NFT</p>
                  <Badge className="bg-primary/10 text-primary border-primary/20">Victory Badge #{matchId}</Badge>
                </Card>
              )}

              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card className="p-4 bg-secondary/50 border-border">
                  <div className="text-sm text-muted-foreground mb-1">Your Score</div>
                  <div className="text-3xl font-bold text-card-foreground">{player.health}</div>
                </Card>
                <Card className="p-4 bg-secondary/50 border-border">
                  <div className="text-sm text-muted-foreground mb-1">Opponent Score</div>
                  <div className="text-3xl font-bold text-card-foreground">{opponent.health}</div>
                </Card>
                <Card className="p-4 bg-secondary/50 border-border">
                  <div className="text-sm text-muted-foreground mb-1">Rounds Played</div>
                  <div className="text-3xl font-bold text-card-foreground">{round - 1}</div>
                </Card>
                <Card className="p-4 bg-secondary/50 border-border">
                  <div className="text-sm text-muted-foreground mb-1">Time Elapsed</div>
                  <div className="text-3xl font-bold text-card-foreground">{formatTime(300 - timeLeft)}</div>
                </Card>
              </div>

              <div className="flex gap-4 justify-center">
                <Button size="lg" variant="outline" onClick={() => router.push("/dashboard")}>
                  View Dashboard
                </Button>
                <Button size="lg" onClick={() => router.push("/lobby")} className="gap-2">
                  <Swords className="w-5 h-5" />
                  Play Again
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Game Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">Match #{matchId}</Badge>
              <Badge variant="outline">Round {round}</Badge>
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold text-foreground">
              <Clock className="w-6 h-6" />
              {formatTime(timeLeft)}
            </div>
          </div>

          {/* Battle Arena */}
          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            {/* Player Stats */}
            <Card className="p-6 bg-card border-border">
              <div className="text-center mb-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-2">You</Badge>
                <p className="text-sm font-mono text-muted-foreground">
                  {address?.slice(0, 10)}...{address?.slice(-8)}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      Health
                    </span>
                    <span className="text-sm font-bold text-card-foreground">{player.health}/100</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${player.health}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      Energy
                    </span>
                    <span className="text-sm font-bold text-card-foreground">{player.energy}/100</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-500"
                      style={{ width: `${player.energy}%` }}
                    />
                  </div>
                </div>

                {player.lastMove && (
                  <div className="pt-4 border-t border-border">
                    <div className="text-xs text-muted-foreground mb-1">Last Move</div>
                    <Badge variant="outline" className="capitalize">
                      {player.lastMove}
                    </Badge>
                  </div>
                )}
              </div>
            </Card>

            {/* Battle Field */}
            <Card className="p-6 bg-card border-border flex flex-col items-center justify-center">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-card-foreground mb-2">Battle Arena</h2>
                <p className="text-muted-foreground">Choose your move wisely</p>
              </div>

              <div className="w-32 h-32 rounded-full border-4 border-primary/20 flex items-center justify-center mb-6 relative">
                <Swords className="w-16 h-16 text-primary" />
                {isProcessing && <div className="absolute inset-0 rounded-full border-4 border-primary animate-ping" />}
              </div>

              {isProcessing && (
                <Badge className="bg-accent/10 text-accent border-accent/20 animate-pulse">Processing moves...</Badge>
              )}
            </Card>

            {/* Opponent Stats */}
            <Card className="p-6 bg-card border-border">
              <div className="text-center mb-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 mb-2">Opponent</Badge>
                <p className="text-sm font-mono text-muted-foreground">{opponent.address}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      Health
                    </span>
                    <span className="text-sm font-bold text-card-foreground">{opponent.health}/100</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-destructive transition-all duration-500"
                      style={{ width: `${opponent.health}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      Energy
                    </span>
                    <span className="text-sm font-bold text-card-foreground">{opponent.energy}/100</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-500"
                      style={{ width: `${opponent.energy}%` }}
                    />
                  </div>
                </div>

                {opponent.lastMove && (
                  <div className="pt-4 border-t border-border">
                    <div className="text-xs text-muted-foreground mb-1">Last Move</div>
                    <Badge variant="outline" className="capitalize">
                      {opponent.lastMove}
                    </Badge>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-3 gap-4">
            <Button
              size="lg"
              onClick={() => executeMove("attack")}
              disabled={isProcessing}
              className="h-24 flex-col gap-2 bg-primary hover:bg-primary/90"
            >
              <Swords className="w-8 h-8" />
              <div>
                <div className="font-bold">Attack</div>
                <div className="text-xs opacity-80">Deal 20 damage</div>
              </div>
            </Button>

            <Button
              size="lg"
              onClick={() => executeMove("defend")}
              disabled={isProcessing}
              variant="outline"
              className="h-24 flex-col gap-2 bg-transparent"
            >
              <Shield className="w-8 h-8" />
              <div>
                <div className="font-bold">Defend</div>
                <div className="text-xs opacity-80">Reduce incoming damage by 50%</div>
              </div>
            </Button>

            <Button
              size="lg"
              onClick={() => executeMove("special")}
              disabled={isProcessing || player.energy < 30}
              className="h-24 flex-col gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Zap className="w-8 h-8" />
              <div>
                <div className="font-bold">Special Attack</div>
                <div className="text-xs opacity-80">35 damage • Costs 30 energy</div>
              </div>
            </Button>
          </div>

          {/* Game Info */}
          <Card className="mt-6 p-4 bg-secondary/50 border-border">
            <div className="text-sm text-muted-foreground text-center">
              <strong className="text-foreground">How to Play:</strong> Choose your move each round. Attack deals
              damage, Defend reduces incoming damage, and Special Attack deals massive damage but costs energy. First
              player to reach 0 health loses!
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
