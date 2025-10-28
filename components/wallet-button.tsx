"use client"

import { Button } from "@/components/ui/button"
import { Wallet, LogOut } from "lucide-react"
import { useWallet } from "@/lib/wallet-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { WalletSelectModal } from "./wallet-select-modal"
import { useState } from "react"

export function WalletButton() {
  const { address, isConnected, isConnecting, connect, disconnect, balance } = useWallet()
  const [showWalletModal, setShowWalletModal] = useState(false)

  if (!isConnected) {
    return (
      <>
        <Button onClick={() => setShowWalletModal(true)} disabled={isConnecting} className="gap-2">
          <Wallet className="w-4 h-4" />
          {isConnecting ? "Connecting..." : "Connect Wallet"}
        </Button>
        <WalletSelectModal
          open={showWalletModal}
          onOpenChange={setShowWalletModal}
          onSelectWallet={(walletId) => connect(walletId)}
        />
      </>
    )
  }

  const shortAddress = `${address?.slice(0, 6)}...${address?.slice(-4)}`

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2 bg-transparent">
          <Wallet className="w-4 h-4" />
          {shortAddress}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Wallet</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="px-2 py-2 text-sm">
          <div className="text-muted-foreground">Balance</div>
          <div className="font-mono font-semibold">{balance} ETH</div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={disconnect} className="text-destructive gap-2">
          <LogOut className="w-4 h-4" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
