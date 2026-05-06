export default function AdminDashboardSkeleton() {
    return (
        <div className="flex flex-col w-full rounded-lg overflow-hidden border border-border">
            <div className="w-full bg-secondary flex items-center gap-1 p-3 border-b border-border">
                <div className="h-2 w-2 bg-muted rounded-full" />
                <div className="h-2 w-2 bg-muted rounded-full" />
                <div className="h-2 w-2 bg-muted rounded-full" />
            </div>

            <div className="p-3 flex flex-col gap-3 bg-white">
                <div className="w-30 h-2 rounded-lg bg-secondary" />

                <div className="flex items-center gap-2 w-full">
                    <div className="flex-1 h-10 bg-secondary rounded-lg" />
                    <div className="flex-1 h-10 bg-secondary rounded-lg" />
                    <div className="flex-1 h-10 bg-secondary rounded-lg" />
                </div>

                <div className="w-full h-20 bg-secondary rounded-lg hidden md:block" />
            </div>
        </div>
    );
}