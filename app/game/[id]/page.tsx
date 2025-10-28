"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useWallet } from "@/lib/wallet-context"
import { Wallet, Users, Clock, Trophy, Loader2 } from "lucide-react"
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"

export default function GameWaitingPage() {
  const { address, isConnected } = useWallet()
  const params = useParams()
  const router = useRouter()
  const matchId = params.id as string

  const [isWaiting, setIsWaiting] = useState(true)
  const [countdown, setCountdown] = useState(5)
  const [opponent, setOpponent] = useState<string | null>(null)

  // Simulate opponent joining after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpponent("0x8b3c...9d2e")
      setIsWaiting(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Countdown before game starts
  useEffect(() => {
    if (!isWaiting && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)

      return () => clearTimeout(timer)
    } else if (!isWaiting && countdown === 0) {
      router.push(`/arena/${matchId}`)
    }
  }, [isWaiting, countdown, matchId, router])

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
              <p className="text-muted-foreground mb-8">Please connect your wallet to join this match.</p>
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
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 bg-card border-border">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Match #{matchId}</Badge>
              <h1 className="text-4xl font-bold mb-2 text-card-foreground">
                {isWaiting ? "Waiting for Opponent" : "Match Starting Soon"}
              </h1>
              <p className="text-muted-foreground">
                {isWaiting
                  ? "Please wait while we find you an opponent..."
                  : "Get ready! The match will begin shortly."}
              </p>
            </div>

            {isWaiting ? (
              <div className="flex flex-col items-center gap-6 py-8">
                <Loader2 className="w-16 h-16 text-primary animate-spin" />
                <div className="text-center">
                  <p className="text-lg font-semibold text-card-foreground mb-2">Searching for opponent...</p>
                  <p className="text-sm text-muted-foreground">This usually takes less than 30 seconds</p>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Countdown */}
                <div className="flex justify-center">
                  <div className="w-32 h-32 rounded-full border-8 border-primary/20 flex items-center justify-center relative">
                    <div
                      className="absolute inset-0 rounded-full border-8 border-primary transition-all duration-1000"
                      style={{
                        clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.sin((countdown / 5) * 2 * Math.PI)}% ${50 - 50 * Math.cos((countdown / 5) * 2 * Math.PI)}%, 100% 100%, 0% 100%)`,
                      }}
                    />
                    <span className="text-5xl font-bold text-primary z-10">{countdown}</span>
                  </div>
                </div>

                {/* Players */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-secondary/50 border-border">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-card-foreground mb-1">You</h3>
                      <p className="text-sm font-mono text-muted-foreground">
                        {address?.slice(0, 10)}...{address?.slice(-8)}
                      </p>
                      <Badge className="mt-3 bg-primary/10 text-primary border-primary/20">Ready</Badge>
                    </div>
                  </Card>

                  <Card className="p-6 bg-secondary/50 border-border">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-card-foreground mb-1">Opponent</h3>
                      <p className="text-sm font-mono text-muted-foreground">{opponent}</p>
                      <Badge className="mt-3 bg-accent/10 text-accent border-accent/20">Ready</Badge>
                    </div>
                  </Card>
                </div>

                {/* Match Info */}
                <Card className="p-6 bg-secondary/50 border-border">
                  <h3 className="font-semibold text-card-foreground mb-4 text-center">Match Details</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">0.01</div>
                      <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                        <Trophy className="w-4 h-4" />
                        ETH Wager
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent mb-1">1v1</div>
                      <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                        <Users className="w-4 h-4" />
                        Game Mode
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-chart-3 mb-1">5:00</div>
                      <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                        <Clock className="w-4 h-4" />
                        Time Limit
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            <div className="mt-8 text-center">
              <Button variant="outline" onClick={() => router.push("/lobby")}>
                Back to Lobby
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
