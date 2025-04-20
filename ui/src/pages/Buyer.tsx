import { useState } from "react";
import { Logo } from "@/components/ui/logo";
import {
  Wallet,
  Plus,
  Home,
  Gift,
  ScanQrCode,
  BarChart2,
} from "lucide-react";
import {
  useConnectWallet,
  useCurrentAccount,
  useWallets,
} from "@mysten/dapp-kit";

const Buyer = () => {
  const [popup, setPopup] = useState<null | "popup1" | "popup2" | "popup3">(null);

  const { mutate: connectWallet, isPending } = useConnectWallet();
  const currentAccount = useCurrentAccount();
  const wallets = useWallets();

  const closePopup = () => setPopup(null);
  const goHome = () => {
    window.location.href = "/";
  };

  const handleConnect = () => {
    if (wallets.length > 0) {
      connectWallet({ wallet: wallets[0] });
    } else {
      alert("No wallets found. Please install a Sui wallet.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
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

      {/* Balance Section */}
      <div className="flex-1 p-4 space-y-6">
        <div className="neon-box p-6">
          <h2 className="text-xl mb-2">Balance</h2>
          <p className="text-3xl font-bold">0.00 SUI</p>
        </div>

        <button className="neon-button w-full flex items-center justify-center gap-2">
          <Plus size={18} />
          <span>Reload</span>
        </button>
      </div>

      {/* Popups */}
      {popup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#0f0f0f] border border-cyan-400 rounded-xl p-6 max-w-sm text-white">
            {popup === "popup1" && <p>📋 This is Popup 1 (e.g. Buyer action 1)</p>}
            {popup === "popup2" && <p>🔍 This is Popup 2 (e.g. View item details)</p>}
            {popup === "popup3" && <p>📈 This is Popup 3 (e.g. Purchase summary)</p>}
            <button onClick={closePopup} className="mt-4 neon-button px-4 py-2">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="flex justify-around items-center p-4 border-t border-cyan-700 bg-black">
        <button onClick={() => setPopup("popup1")}><Gift size={24} /></button>
        <button onClick={() => setPopup("popup2")}><ScanQrCode size={24} /></button>
        <button onClick={() => setPopup("popup3")}><BarChart2 size={24} /></button>
        <button onClick={goHome}><Home size={24} /></button>
      </div>
    </div>
  );
};

export default Buyer;
