import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
    return (
        <div>
            <div className="space-y-3 mt-10">
                {order.map(item => (
                    <div
                        key={item.id}
                        className="rounded-sm shadow-md flex justify-between items-center border border-gray-300 py-5 px-5 last-of-type:border-b "
                    >
                        <div>
                            <p className="text-lg ">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-semibold">
                                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>

                        <button
                            className=" "
                            onClick={() => removeItem(item.id)}
                        >
                            <img className="w-8 img-fluid" src={`src/img/borrar.png`} alt="icono" /> 
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
} 