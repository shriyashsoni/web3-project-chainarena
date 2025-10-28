import Link from "next/link"
import Image from "next/image"
import { Swords, Zap, Shield, Trophy } from "lucide-react"

export function Footer() {
  return (
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
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/whitepaper" className="hover:text-white transition-colors">
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
  )
}
