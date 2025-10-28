"use client"

import Link from "next/link"
import { Swords } from "lucide-react"
import { WalletButton } from "@/components/wallet-button"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-purple-500/20 bg-black/95 backdrop-blur-lg shadow-lg shadow-purple-500/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Swords className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              ChainArena
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/lobby" className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors">
              Game Lobby
            </Link>
            <Link
              href="/leaderboard"
              className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
            >
              Leaderboard
            </Link>
            <Link
              href="/nft-gallery"
              className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
            >
              NFT Gallery
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
            >
              Dashboard
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors">
              About Us
            </Link>
            <Link
              href="/whitepaper"
              className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
            >
              Whitepaper
            </Link>
          </div>

          <WalletButton />
        </div>
      </div>
    </nav>
  )
}
