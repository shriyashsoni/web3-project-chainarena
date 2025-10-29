# ⚔️ ChainArena - Real-Time PvP Gaming On-Chain

<div align="center">

![ChainArena Banner](https://img.shields.io/badge/ChainArena-Blockchain_Gaming-8B5CF6?style=for-the-badge&logo=ethereum&logoColor=white)

**Experience instant blockchain gaming with deterministic gameplay, atomic NFT rewards, and zero gas fees on Linera microchains.**

[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Linera](https://img.shields.io/badge/Linera-Microchains-FF4500?style=for-the-badge)](https://linera.io/)

[🎮 Live Demo](https://chainarena.vercel.app) • [📖 Documentation](https://docs.chainarena.io) • [💬 Discord](https://discord.gg/chainarena) • [🐦 Twitter](https://twitter.com/chainarena)

</div>

---

## 🌟 Overview

**ChainArena** is a next-generation blockchain gaming platform **built on Linera microchains**, delivering real-time PvP battles with instant finality, deterministic gameplay, and seamless NFT rewards. Experience the future of on-chain gaming with zero gas fees and sub-50ms latency.

### ⚡ Why Linera?

ChainArena leverages **Linera's revolutionary microchain architecture** to deliver:

- 🚀 **Sub-50ms Block Finality** - Instant transaction confirmation for real-time gameplay
- 💸 **Zero Gas Fees** - Play without worrying about transaction costs
- 🔗 **Elastic Scaling** - Dedicated microchains per match for unlimited scalability
- 🔒 **Deterministic State Machines** - Provably fair gameplay with verifiable outcomes
- ⚡ **WebAssembly Smart Contracts** - High-performance game logic execution
- 🌐 **Cross-Chain Interoperability** - Seamless asset transfers across chains

### ✨ Key Features

- ⚡ **Instant Gameplay** - Real-time PvP battles with <50ms latency powered by Linera
- 🎮 **Turn-Based Combat** - Strategic gameplay with attack, defend, and special moves
- 🏆 **NFT Rewards** - Earn unique NFTs for victories and achievements
- 💰 **Wager System** - Stake tokens and compete for rewards
- 🔗 **Multi-Wallet Support** - Connect with MetaMask, WalletConnect, Coinbase Wallet, or Linera Wallet
- 📊 **Leaderboards** - Compete globally with ELO rankings
- 🎨 **3D Visuals** - Immersive battle scenes with React Three Fiber
- 🌐 **Zero Gas Fees** - Powered by Linera microchains
- 🔒 **Deterministic State** - Provably fair gameplay on-chain
- 📱 **Responsive Design** - Seamless experience across all devices

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 16 (App Router) ![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat&logo=next.js)
- **Language:** TypeScript ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
- **Styling:** Tailwind CSS v4 ![Tailwind](https://img.shields.io/badge/-Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
- **UI Components:** shadcn/ui ![shadcn](https://img.shields.io/badge/-shadcn/ui-000000?style=flat)
- **3D Graphics:** React Three Fiber + Three.js ![Three.js](https://img.shields.io/badge/-Three.js-000000?style=flat&logo=three.js)
- **Animations:** Framer Motion ![Framer](https://img.shields.io/badge/-Framer_Motion-0055FF?style=flat&logo=framer)
- **State Management:** React Context + SWR ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black)

### Blockchain - Built on Linera
- **Platform:** Linera Microchains ![Linera](https://img.shields.io/badge/-Linera-FF4500?style=flat)
- **Smart Contracts:** Rust + Linera SDK ![Rust](https://img.shields.io/badge/-Rust-000000?style=flat&logo=rust)
- **Wallet Integration:** Web3.js / Ethers.js ![Web3](https://img.shields.io/badge/-Web3.js-F16822?style=flat&logo=web3.js)
- **NFT Standard:** ERC-721 compatible on Linera
- **Architecture:** Microchain per match for elastic scaling
- **Consensus:** Byzantine Fault Tolerant (BFT)

### Backend (Optional)
- **API:** GraphQL / REST ![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=flat&logo=graphql)
- **Database:** PostgreSQL ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white)
- **Indexer:** Event stream processing for Linera events
- **Caching:** Redis ![Redis](https://img.shields.io/badge/-Redis-DC382D?style=flat&logo=redis&logoColor=white)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git
- A Web3 wallet (MetaMask, Coinbase Wallet, or Linera Wallet)
- Linera CLI (for smart contract deployment)

### Installation

1. **Clone the repository**
\`\`\`bash
git clone https://github.com/yourusername/chainarena.git
cd chainarena
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. **Set up environment variables**
\`\`\`bash
cp .env.example .env.local
\`\`\`

Edit `.env.local` with your configuration:
\`\`\`env
# Linera Configuration
NEXT_PUBLIC_LINERA_RPC_URL=https://rpc.linera.io
NEXT_PUBLIC_LINERA_CHAIN_ID=your_chain_id
NEXT_PUBLIC_LINERA_NETWORK=testnet

# Wallet Configuration
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id

# Optional: Backend Services
DATABASE_URL=postgresql://user:password@localhost:5432/chainarena
REDIS_URL=redis://localhost:6379
\`\`\`

4. **Run the development server**
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🔗 Linera Integration

ChainArena is **built entirely on Linera microchains**, leveraging the following technologies:

### Smart Contract Architecture
\`\`\`
contracts/
├── game_contract/          # Main game logic on Linera
│   ├── src/
│   │   ├── lib.rs         # Game state machine
│   │   ├── state.rs       # Match state management
│   │   └── operations.rs  # Move validation & execution
│   └── Cargo.toml
├── nft_app/               # NFT minting on Linera
│   ├── src/
│   │   ├── lib.rs         # NFT contract
│   │   └── metadata.rs    # NFT metadata handling
│   └── Cargo.toml
└── token_app/             # Token transfers on Linera
    └── src/
        └── lib.rs         # Wager & reward distribution
\`\`\`

### Linera Features Used
- ⚡ **Microchain per Match** - Each game creates a temporary microchain for isolated state
- 🔄 **Cross-Chain Messages** - NFT rewards sent to player's main chain
- 📊 **GraphQL Subscriptions** - Real-time game state updates
- 🔐 **Deterministic Execution** - Guaranteed fair gameplay
- 💾 **Persistent Storage** - Match history and player stats

### Deployment to Linera
\`\`\`bash
# Build smart contracts
cd contracts/game_contract
cargo build --release --target wasm32-unknown-unknown

# Deploy to Linera testnet
linera project publish --chain-id $CHAIN_ID

# Initialize game application
linera application create --chain-id $CHAIN_ID --bytecode game_contract.wasm
\`\`\`

---

## 📁 Project Structure

\`\`\`
chainarena/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Landing page
│   ├── dashboard/           # User dashboard
│   ├── lobby/               # Game lobby
│   ├── arena/               # Battle arena
│   ├── leaderboard/         # Rankings
│   ├── nft-gallery/         # NFT collection
│   ├── about/               # About page
│   ├── whitepaper/          # Whitepaper
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── navigation.tsx       # Header navigation
│   ├── footer.tsx           # Footer
│   ├── wallet-button.tsx    # Wallet connection
│   ├── wallet-select-modal.tsx  # Wallet selection
│   ├── battle-3d-scene.tsx  # 3D battle visualization
│   ├── user-stats.tsx       # User statistics
│   ├── match-history.tsx    # Match history
│   └── ui/                  # shadcn/ui components
├── lib/                     # Utilities and contexts
│   ├── wallet-context.tsx   # Wallet state management
│   └── utils.ts             # Helper functions
├── public/                  # Static assets
│   ├── images/              # Images and icons
│   └── models/              # 3D models
├── contracts/               # Smart contracts (Rust)
│   ├── game_contract/       # Game logic
│   └── nft_app/             # NFT minting
└── scripts/                 # Deployment scripts
\`\`\`

---

## 🎮 How to Play

### 1. Connect Your Wallet
Click "Connect Wallet" and select your preferred wallet provider.

### 2. Enter the Lobby
Navigate to the game lobby to see available matches or create your own.

### 3. Create or Join a Match
- **Create Match:** Set your wager amount and wait for an opponent
- **Join Match:** Browse available matches and join one that suits you

### 4. Battle!
Once matched, you'll enter the arena. Take turns to:
- **Attack** - Deal damage to your opponent (costs 2 energy)
- **Defend** - Reduce incoming damage (costs 1 energy)
- **Special Move** - Powerful attack (costs 3 energy)

### 5. Win & Earn
Victory grants you:
- 💰 The wagered tokens
- 🏆 ELO rating increase
- 🎨 Unique NFT rewards (for special achievements)

---

## 🔧 Available Scripts

\`\`\`bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:e2e     # Run end-to-end tests

# Deployment
npm run deploy       # Deploy to Vercel
\`\`\`

---

## 🌐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_LINERA_RPC_URL` | Linera RPC endpoint | ✅ |
| `NEXT_PUBLIC_LINERA_CHAIN_ID` | Linera chain ID | ✅ |
| `NEXT_PUBLIC_LINERA_NETWORK` | Linera network (e.g., testnet) | ✅ |
| `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` | WalletConnect project ID | ✅ |
| `DATABASE_URL` | PostgreSQL connection string | ❌ |
| `REDIS_URL` | Redis connection string | ❌ |

---

## 🎨 Design System

### Color Palette
- **Background:** `#000000` (Pure Black)
- **Primary:** `#8B5CF6` (Purple)
- **Secondary:** `#06B6D4` (Cyan)
- **Accent:** `#A855F7` (Violet)
- **Text:** `#FFFFFF` / `#E5E7EB` (White/Gray)

### Typography
- **Headings:** Geist Sans
- **Body:** Geist Sans
- **Monospace:** Geist Mono

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Links

- **Website:** [https://chainarena.io](https://chainarenalinera.vercel.app/)
- **Documentation:** [https://docs.chainarena.io](- **Documentation:** (https://chainarenalinera.vercel.app/whitepaper)


---

## 👥 Team

Built with ❤️ by the ChainArena team

- **Core Contributors:** [View Team](https://chainarena.io/team)
- **Community:** Join our [Discord](https://discord.gg/chainarena)

---

## 🙏 Acknowledgments

- **[Linera](https://linera.io)** ![Linera](https://img.shields.io/badge/-Linera-FF4500?style=flat) - For the revolutionary microchain technology that powers ChainArena
- [Vercel](https://vercel.com) - For hosting and deployment
- [shadcn/ui](https://ui.shadcn.com) - For beautiful UI components
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - For 3D graphics
- **Linera Community** - For support and feedback during development

---

## 📚 Learn More About Linera

- **Official Website:** [https://linera.io](https://linera.io)
- **Documentation:** [https://docs.linera.io](https://docs.linera.io)
- **GitHub:** [https://github.com/linera-io](https://github.com/linera-io)
- **Discord:** [https://discord.gg/linera](https://discord.gg/linera)
- **Buildathon:** [https://linera.io/buildathon](https://linera.io/buildathon)

---

<div align="center">

**⚔️ Ready to dominate the arena? [Start Playing Now](https://chainarena.io) ⚔️**

Made with 💜 by the ChainArena Team

</div>
