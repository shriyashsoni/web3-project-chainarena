import Link from "next/link"
import { Swords } from "lucide-react"

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

        <div className="mt-12 pt-8 border-t border-purple-500/20 text-center text-sm text-gray-400">
          <p>Built for Linera Buildathon 2025. Powered by Linera Microchains.</p>
        </div>
      </div>
    </footer>
  )
}
