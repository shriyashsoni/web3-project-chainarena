import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Swords, Zap, Trophy, Shield, Coins, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Battle3DScene } from "@/components/battle-3d-scene"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Section - Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-purple-950/50 to-blue-950/50 border border-purple-500/30 text-purple-300 text-sm font-medium shadow-lg backdrop-blur-sm">
                <Image src="/linera-logo.png" alt="Linera" width={20} height={20} className="w-5 h-5" />
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Built on Linera Microchains
                </span>
                <div className="h-4 w-px bg-purple-500/30" />
                <span className="text-xs text-purple-400">Sub-50ms Finality</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight text-white">
                Real-Time PvP Gaming
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                  On-Chain
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-xl text-balance leading-relaxed">
                Experience instant blockchain gaming with deterministic gameplay, atomic NFT rewards, and zero gas fees
                on Linera microchains.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/lobby">
                    <Swords className="w-5 h-5" />
                    Enter Arena
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-2 border-purple-500/50 hover:border-purple-400 hover:bg-purple-950/30 transition-all duration-300 bg-transparent text-white"
                  asChild
                >
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Right Section - 3D Battle Scene */}
            <div className="relative h-[500px] lg:h-[600px] animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 to-blue-950/50 rounded-3xl shadow-2xl overflow-hidden border border-purple-500/20">
                <Battle3DScene />
              </div>
              {/* Decorative glow effects */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
              <div
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Why ChainArena?</h2>
            <p className="text-gray-400 text-lg">Built for competitive gamers who demand speed and fairness</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-colors backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Instant Gameplay</h3>
              <p className="text-gray-400 leading-relaxed">
                Sub-second block finality on Linera microchains means your moves execute instantly without waiting for
                confirmations.
              </p>
            </Card>

            <Card className="p-6 bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-colors backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Provably Fair</h3>
              <p className="text-gray-400 leading-relaxed">
                Deterministic state machines ensure every match outcome is verifiable and tamper-proof on the
                blockchain.
              </p>
            </Card>

            <Card className="p-6 bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-colors backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-chart-3" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">NFT Rewards</h3>
              <p className="text-gray-400 leading-relaxed">
                Win exclusive NFTs and achievements that are minted atomically at the end of each victorious match.
              </p>
            </Card>

            <Card className="p-6 bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-colors backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                <Coins className="w-6 h-6 text-chart-4" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Zero Gas Fees</h3>
              <p className="text-gray-400 leading-relaxed">
                Play without worrying about transaction costs. Linera microchains eliminate gas fees for seamless
                gaming.
              </p>
            </Card>

            <Card className="p-6 bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-colors backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-chart-5" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Competitive Ranks</h3>
              <p className="text-gray-400 leading-relaxed">
                Climb the leaderboard with our ELO-based ranking system and compete for seasonal championship rewards.
              </p>
            </Card>

            <Card className="p-6 bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-colors backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                <Swords className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Real-Time Battles</h3>
              <p className="text-gray-400 leading-relaxed">
                Experience true real-time gameplay with WebSocket subscriptions for live match updates and opponent
                moves.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 bg-gradient-to-br from-purple-950/50 via-gray-900/50 to-blue-950/50 border-purple-500/30 text-center backdrop-blur-sm">
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to Compete?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of players in the ultimate blockchain gaming experience. Connect your wallet and start
              earning NFT rewards today.
            </p>
            <Button size="lg" className="gap-2">
              <Swords className="w-5 h-5" />
              Start Playing Now
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 bg-gray-950/50 backdrop-blur-sm py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Swords className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold text-white">ChainArena</span>
              </div>
              <p className="text-sm text-gray-400">Real-time blockchain gaming on Linera microchains.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-white">Game</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/lobby" className="hover:text-white transition-colors">
                    Game Lobby
                  </Link>
                </li>
                <li>
                  <Link href="/leaderboard" className="hover:text-white transition-colors">
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link href="/nft-gallery" className="hover:text-white transition-colors">
                    NFT Gallery
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-white">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Whitepaper
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-white">Community</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-purple-500/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Image src="/linera-logo.png" alt="Linera" width={24} height={24} className="w-6 h-6" />
                <span>
                  Built for Linera Buildathon 2025 •{" "}
                  <span className="text-purple-400 font-medium">Powered by Linera Microchains</span>
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-purple-400" />
                  Instant Finality
                </span>
                <span className="flex items-center gap-1">
                  <Shield className="w-3 h-3 text-cyan-400" />
                  Zero Gas Fees
                </span>
                <span className="flex items-center gap-1">
                  <Trophy className="w-3 h-3 text-green-400" />
                  On-Chain Gaming
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
