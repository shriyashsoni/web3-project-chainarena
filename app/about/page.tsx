"use client"

import { motion } from "framer-motion"
import { Target, Zap, Shield, Globe, Users, Rocket } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
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

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every line of code is audited. Player assets are protected by battle-tested smart contracts.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-second transactions on Linera microchains. No more waiting for blockchain confirmations.",
    },
    {
      icon: Globe,
      title: "Truly Decentralized",
      description: "No central servers. No single point of failure. Players own their data and assets.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Governance by players, for players. Your voice shapes the future of ChainArena.",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
          <motion.div
            className="container mx-auto px-4 relative z-10"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div className="text-center max-w-4xl mx-auto" variants={fadeInUp}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Building the Future of Gaming
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                ChainArena is revolutionizing competitive gaming by combining the thrill of real-time PvP battles with
                the transparency and ownership of blockchain technology.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-4xl font-bold mb-6 text-white">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  We believe gaming should be fair, transparent, and rewarding. Traditional gaming platforms take 30-50%
                  of player earnings and control all in-game assets. We're changing that.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  ChainArena leverages Linera's revolutionary microchain architecture to deliver instant, gas-free
                  gameplay while ensuring players truly own their achievements, items, and earnings.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our vision is a world where skill is rewarded instantly, assets are portable across games, and players
                  have a real voice in game development.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="relative">
                <Card className="bg-gradient-to-br from-purple-900/40 to-violet-900/40 border-purple-500/30 p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Target className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Player Ownership</h3>
                        <p className="text-gray-300">
                          Every NFT, token, and achievement is yours forever. Trade, sell, or keep them across games.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Rocket className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Instant Rewards</h3>
                        <p className="text-gray-300">
                          Win a match, earn instantly. No waiting days for payouts or dealing with payment processors.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-violet-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Provably Fair</h3>
                        <p className="text-gray-300">
                          Every match is recorded on-chain. No cheating, no manipulation, just pure skill.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Our Core Values</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                These principles guide every decision we make and every line of code we write.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {values.map((value, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-black/60 border-purple-500/30 p-6 h-full hover:border-purple-500/60 transition-all hover:scale-105">
                    <value.icon className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="bg-gradient-to-r from-purple-900/40 via-violet-900/40 to-cyan-900/40 rounded-2xl p-12 text-center border border-purple-500/30"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Join the Revolution</h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Be part of the future of gaming. Connect your wallet and start earning today.
              </p>
              <div className="flex gap-4 justify-center">
                <motion.a
                  href="/lobby"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-violet-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enter Arena
                </motion.a>
                <motion.a
                  href="/whitepaper"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-purple-500/30 hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Whitepaper
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
