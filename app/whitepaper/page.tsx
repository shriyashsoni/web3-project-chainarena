"use client"

import { motion } from "framer-motion"
import { Download, FileText, Zap, Shield, Coins, Users, TrendingUp, Lock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function WhitepaperPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const sections = [
    {
      icon: FileText,
      title: "Executive Summary",
      content:
        "ChainArena is a next-generation blockchain gaming platform built on Linera microchains, enabling instant, gas-free PvP battles with true asset ownership and provably fair gameplay.",
    },
    {
      icon: Zap,
      title: "Technical Architecture",
      content:
        "Leveraging Linera's revolutionary microchain technology, each match runs on its own dedicated chain, ensuring sub-second finality, zero gas fees, and infinite scalability.",
    },
    {
      icon: Shield,
      title: "Security Model",
      content:
        "Multi-layer security with audited smart contracts, deterministic game logic, and cryptographic proof of fairness. All match outcomes are verifiable on-chain.",
    },
    {
      icon: Coins,
      title: "Tokenomics",
      content:
        "Dual-token economy with ARENA governance token and in-game currency. Staking rewards, tournament prizes, and NFT marketplace fees create sustainable value.",
    },
  ]

  const technicalSpecs = [
    { label: "Transaction Finality", value: "<500ms" },
    { label: "Gas Fees", value: "$0.00" },
    { label: "Throughput", value: "100k+ TPS" },
    { label: "Smart Contract Language", value: "Rust" },
    { label: "Consensus Mechanism", value: "Linera BFT" },
    { label: "Network Type", value: "Microchains" },
  ]

  const roadmap = [
    {
      quarter: "Q2 2025",
      title: "Testnet Launch",
      items: ["Core game mechanics", "Wallet integration", "Basic NFT rewards", "Community testing"],
    },
    {
      quarter: "Q3 2025",
      title: "Mainnet Beta",
      items: ["Token launch", "Staking system", "Tournament mode", "Marketplace v1"],
    },
    {
      quarter: "Q4 2025",
      title: "Full Launch",
      items: ["Mobile apps", "Advanced game modes", "DAO governance", "Cross-chain bridges"],
    },
    {
      quarter: "Q1 2026",
      title: "Expansion",
      items: ["New game types", "Esports integration", "SDK for developers", "Global tournaments"],
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-20">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
          <motion.div
            className="container mx-auto px-4 relative z-10"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div className="text-center max-w-4xl mx-auto" variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
                <FileText className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">Version 1.0 - March 2025</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                ChainArena Whitepaper
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                A comprehensive technical overview of the world's first real-time PvP gaming platform on Linera
                microchains.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white"
              >
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {sections.map((section, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 border-purple-500/30 p-8 h-full hover:border-purple-500/60 transition-all">
                    <section.icon className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{section.content}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Technical Specifications</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Built on cutting-edge blockchain technology for unparalleled performance.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {technicalSpecs.map((spec, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-black/60 border-purple-500/30 p-6 text-center hover:border-purple-500/60 transition-all">
                    <p className="text-gray-400 text-sm mb-2">{spec.label}</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {spec.value}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-8 text-white">Architecture Overview</h2>
              <Card className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 border-purple-500/30 p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                      <Zap className="w-6 h-6 text-purple-400" />
                      Linera Microchains
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Each game match runs on its own dedicated microchain, providing isolated execution environments
                      with instant finality. This architecture eliminates network congestion and ensures consistent
                      performance regardless of global network load.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                      <Lock className="w-6 h-6 text-cyan-400" />
                      Smart Contract Layer
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Game logic is implemented in Rust using the Linera SDK, compiled to WebAssembly for deterministic
                      execution. All game state transitions are cryptographically verified and permanently recorded
                      on-chain.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                      <Users className="w-6 h-6 text-violet-400" />
                      Player State Management
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Player profiles, NFT ownership, and match history are stored across distributed microchains with
                      cross-chain messaging for seamless data synchronization. Players maintain full custody of their
                      assets at all times.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-8 text-white">Token Economics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 border-purple-500/30 p-8">
                  <Coins className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">ARENA Token</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Governance rights for protocol decisions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Staking rewards up to 15% APY</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Tournament entry and prize pools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>NFT marketplace fee discounts</span>
                    </li>
                  </ul>
                </Card>
                <Card className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-500/30 p-8">
                  <TrendingUp className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Value Accrual</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>3% marketplace transaction fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Tournament rake distributed to stakers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>NFT royalties on secondary sales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Token burns from in-game purchases</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Development Roadmap</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Our path to becoming the leading blockchain gaming platform.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {roadmap.map((phase, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 border-purple-500/30 p-6 h-full hover:border-purple-500/60 transition-all">
                    <div className="text-purple-400 font-bold mb-2">{phase.quarter}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-purple-400 mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="bg-gradient-to-r from-purple-900/40 via-violet-900/40 to-cyan-900/40 rounded-2xl p-12 text-center border border-purple-500/30"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Ready to Build the Future?</h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join our community of developers, gamers, and blockchain enthusiasts shaping the next generation of
                gaming.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Full Whitepaper
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500/30 text-white hover:bg-white/10 bg-transparent"
                >
                  Join Discord
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500/30 text-white hover:bg-white/10 bg-transparent"
                >
                  View GitHub
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
