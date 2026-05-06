export default function AdminDashboardSkeleton() {
    return (
        <div className="flex flex-col w-full rounded-lg overflow-hidden border border-border">
            <div className="w-full bg-muted flex items-center gap-2 p-3 border-b border-border">
                <div className="h-2 w-2 bg-border rounded-full" />
                <div className="h-2 w-2 bg-border rounded-full" />
                <div className="h-2 w-2 bg-border rounded-full" />
            </div>

            <div className="p-3 flex flex-col gap-3 bg-white">
                <div className="w-30 h-2 md:h-4 rounded-md bg-muted" />

                <div className="flex items-center gap-2 w-full">
                    <div className="flex-1 h-10 md:h-20 bg-muted rounded-md" />
                    <div className="flex-1 h-10 md:h-20 bg-muted rounded-md" />
                    <div className="flex-1 h-10 md:h-20 bg-muted rounded-md" />
                </div>

                <div className="w-full h-30 bg-muted rounded-md hidden md:block" />
            </div>
        </div>
    );
}