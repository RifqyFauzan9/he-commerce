import { orders } from "@/app/lib/placeholder-data"
import OrderItemRow from "@/app/ui/components/OrderItemRow"
import { Download, TrendingUp, DollarSign, ShoppingBag, Users, Minus } from "lucide-react"
import Link from "next/link"

export default function Page() {
    return (
        <main className="flex flex-col px-4 py-25">
            <h1 className="text-2xl font-bold">Halo, Admin!</h1>
            <p className="text-muted-foreground mb-3">Ringkasan penjualan hari ini.</p>
            <button type="button" className="bg-primary py-3 rounded-lg text-primary-foreground font-semibold flex justify-center items-center gap-2 mb-6">
                <Download size={18} /> Unduh penjualan
            </button>

            <div className="border border-border rounded-3xl p-4 bg-white mb-4">
                <div className="flex items-center justify-between mb-3">
                    <p className="text-muted-foreground font-semibold">Total Penjualan</p>
                    <DollarSign size={16} className="text-muted-foreground" />
                </div>

                <p className="text-2xl font-bold mb-1">Rp12.500.000</p>
                <p className="text-sm text-secondary-foreground flex items-center gap-2">
                    <TrendingUp size={14} /> +15.2% dibanding kemarin
                </p>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 border border-border rounded-3xl p-4 bg-white">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-muted-foreground font-semibold">Pesanan</p>
                        <ShoppingBag size={16} className="text-muted-foreground" />
                    </div>

                    <p className="text-2xl font-bold mb-1">45</p>
                    <p className="text-sm text-secondary-foreground flex items-center gap-1">
                        <TrendingUp size={14} /> +5.4%
                    </p>
                </div>
                <div className="flex-1 border border-border rounded-3xl p-4 bg-white">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-muted-foreground font-semibold">Pengunjung</p>
                        <Users size={18} className="text-muted-foreground" />
                    </div>

                    <p className="text-2xl font-bold mb-1">1,240</p>
                    <p className="text-sm text-secondary-foreground flex items-center gap-1">
                        <Minus size={14} /> Sama
                    </p>
                </div>
            </div>

            <div className="rounded-3xl border border-border overflow-hidden bg-white">
                <div className="p-4 border-b border-border flex items-center justify-between">
                    <p className="text-xl font-bold">Pesanan Terbaru</p>
                    <Link href="" className="text-primary font-medium">Lihat Semua</Link>
                </div>

                {orders.map(o => (
                    <OrderItemRow order={o} />
                ))}
            </div>
        </main>
    );
}