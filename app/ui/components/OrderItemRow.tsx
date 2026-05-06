export default function OrderItemRow({ order }: { order: any }) {
    return (
        <div key={order.id} className="flex flex-col border-b border-border p-4">
            <div className="flex items-center justify-between mb-2">
                <p className="font-medium">{order.id}</p>
                <div className="px-2 py-px bg-secondary rounded-xl text-sm text-secondary-foreground font-medium">{order.status}</div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-6 bg-muted rounded-full" />
                    <p className="text-secondary-foreground">{order.buyerName}</p>
                </div>
                <p className="font-medium">Rp{order.price}</p>
            </div>
        </div>
    );
}