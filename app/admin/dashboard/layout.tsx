import { Menu, Leaf, BellDot, LayoutDashboard, Box, ShoppingCart, Cog } from "lucide-react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header className="flex items-center justify-between bg-white p-5 border-b border-border">
                <div className="flex items-center gap-4">
                    <Menu size={26} strokeWidth={2} />
                    <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-primary">
                            <Leaf size={18} className="text-primary-foreground" strokeWidth={2} />
                        </div>
                        <h1 className="font-semibold text-xl">HeniMart</h1>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <BellDot />
                    <div className="h-10 w-10 rounded-full bg-muted border border-border" />
                </div>
            </header>

            {children}

            <footer className="fixed right-0 left-0 bottom-0 h-20 bg-white border-t border-border flex items-stretch">
                <div className="flex-1 flex flex-col gap-1 items-center justify-center text-primary">
                    <LayoutDashboard />
                    <p className="text-sm font-medium">Dashboard</p>
                </div>
                <div className="flex-1 flex flex-col gap-1 items-center justify-center text-muted-foreground">
                    <Box />
                    <p className="text-sm font-medium">Produk</p>
                </div>
                <div className="flex-1 flex flex-col gap-1 items-center justify-center text-muted-foreground">
                    <ShoppingCart />
                    <p className="text-sm font-medium">Pesanan</p>
                </div>
                <div className="flex-1 flex flex-col gap-1 items-center justify-center text-muted-foreground">
                    <Cog />
                    <p className="text-sm font-medium">Settings</p>
                </div>
            </footer>
        </div>
    )
}