import { Menu, Leaf, BellDot, CircleUser } from "lucide-react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
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

            <div className="p-4">
                {children}
            </div>
        </main>
    )
}