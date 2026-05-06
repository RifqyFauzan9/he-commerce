import AdminDashboardSkeleton from "@/app/ui/components/AdminDashboardSkeleton";
import LoginForm from "@/app/ui/components/LoginForm";
import { ShoppingCart } from "lucide-react";

export default function Page() {
    return (
        <main className="min-h-screen w-full flex flex-col md:flex-row-reverse">
            <section className="md:flex-1 lg:flex-[1.3] flex flex-col md:justify-center py-8 px-10 md:px-12 lg:px-16 xl:px-48">
                <div className="flex items-center justify-center gap-3 mb-6 md:hidden">
                    <div className="rounded-lg p-2 bg-primary">
                        <ShoppingCart size={18} className="text-primary-foreground" />
                    </div>
                    <h1 className="font-bold text-lg">Admin Store</h1>
                </div>

                <AdminDashboardSkeleton />
            </section>

            <section className="flex-1 flex flex-col md:justify-center bg-white rounded-t-xl border-t border-border p-5 md:p-12 lg:p-16">
                <div className="md:flex md:items-center gap-3 mb-8 hidden">
                    <div className="rounded-lg p-2 bg-primary">
                        <ShoppingCart size={18} className="text-primary-foreground" />
                    </div>
                    <h1 className="font-bold text-lg">Admin Store</h1>
                </div>
                <h1 className="text-xl text-center font-bold mb-1 md:text-left">Admin Login</h1>
                <p className="text-center text-sm text-muted-foreground mb-6 md:text-left">Masuk ke panel kontrol e-commerce Anda.</p>

                <LoginForm />
            </section>
        </main>
    )
}