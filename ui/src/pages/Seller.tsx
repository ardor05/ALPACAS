import { useState } from "react";
import { Wallet, Home, Upload, PackageSearch, Settings } from "lucide-react";
import { useConnectWallet, useCurrentAccount, useWallets } from "@mysten/dapp-kit";
import { Logo } from "@/components/ui/logo";

const Seller = () => {
  const [popup, setPopup] = useState<null | "list" | "orders" | "settings">(null);

  const { mutate: connectWallet, isPending } = useConnectWallet();
  const currentAccount = useCurrentAccount();
  const wallets = useWallets();

  const handleConnect = () => {
    if (wallets.length > 0) {
      connectWallet({ wallet: wallets[0] });
    } else {
      alert("No wallets found. Please install a Sui wallet.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-white bg-black">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <Logo className="text-2xl" />
        <button
          className="neon-button flex items-center gap-2"
          onClick={handleConnect}
          disabled={isPending}
        >
          <Wallet size={18} />
          <span>{currentAccount ? "Wallet Connected" : "Connect Wallet"}</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 space-y-6">
        <div className="neon-box p-6">
          <h2 className="text-xl mb-2">Your Listings</h2>
          <p className="text-base text-gray-300">You currently have no active items.</p>
        </div>

        <button
          className="neon-button w-full flex items-center justify-center gap-2"
          onClick={() => setPopup("list")}
        >
          <Upload size={18} />
          <span>List New Item</span>
        </button>
      </div>

      {/* Popups */}
      {popup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#0f0f0f] border border-cyan-400 rounded-xl p-6 max-w-sm text-white">
            {popup === "list" && <p>📤 Item listing form goes here</p>}
            {popup === "orders" && <p>📦 View and manage your orders</p>}
            {popup === "settings" && <p>⚙️ Seller settings panel</p>}
            <button onClick={() => setPopup(null)} className="mt-4 neon-button px-4 py-2">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="flex justify-around items-center p-4 border-t border-cyan-700 bg-black">
        <button onClick={() => setPopup("list")}><Upload size={24} /></button>
        <button onClick={() => setPopup("orders")}><PackageSearch size={24} /></button>
        <button onClick={() => setPopup("settings")}><Settings size={24} /></button>
        <button onClick={() => (window.location.href = "/")}><Home size={24} /></button>
      </div>
    </div>
  );
};

export default Seller;
