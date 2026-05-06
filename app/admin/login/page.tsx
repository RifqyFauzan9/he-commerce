import AdminDashboardSkeleton from "@/app/ui/components/AdminDashboardSkeleton";
import LoginForm from "@/app/ui/components/LoginForm";
import { ShoppingCart } from "lucide-react";

export default function Page() {
    return (
        <main className="min-h-screen w-full flex flex-col">
            <section className="flex flex-col py-8 px-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="rounded-lg p-2 bg-primary">
                        <ShoppingCart size={18} className="text-primary-foreground" />
                    </div>
                    <h1 className="font-bold text-lg">Admin Store</h1>
                </div>

                <AdminDashboardSkeleton />
            </section>

            <section className="flex-1 bg-background rounded-t-xl border-t border-border p-5">
                <h1 className="text-xl text-center font-bold mb-1">Admin Login</h1>
                <p className="text-center text-sm text-muted-foreground mb-6">Masuk ke panel kontrol e-commerce Anda.</p>

                <LoginForm />
            </section>
        </main>
    )
}