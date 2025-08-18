import { X } from "lucide-react";
import { type CartItem } from "./data";

interface CartDrawerProps {
    cart: CartItem[];
    onClose: () => void;
    onRemoveFromCart: (productId: string) => void;
}

export function CartDrawer({
    cart,
    onClose,
    onRemoveFromCart,
}: CartDrawerProps) {
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <>
            <div
                className="fixed inset-0 bg-black opacity-50 transition-opacity duration-300"
                onClick={onClose}
            />
            <div
                className="fixed right-0 z-50 top-0 h-full w-full sm:w-[400px] bg-white dark:bg-zinc-900 shadow-xl transform transition-transform duration-300"
                style={{ transform: 'translateX(0)' }}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
                        <h2 className="text-lg font-medium">Shopping Cart</h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex gap-4 p-3 bg-white/30 dark:bg-zinc-800/50 rounded-lg"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-base font-medium truncate">
                                            {item.name}
                                        </h3>
                                        <button
                                            onClick={() =>
                                                onRemoveFromCart(item.id)
                                            }
                                            className="p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full ml-2"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                                        Qty: {item.quantity}
                                    </p>
                                    <p className="text-base font-medium mt-1">
                                        ${item.price * item.quantity}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
                        <div className="flex justify-between mb-4">
                            <span className="text-base">Total</span>
                            <span className="text-base font-medium">${total}</span>
                        </div>
                        <button className="w-full py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-base font-medium rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
