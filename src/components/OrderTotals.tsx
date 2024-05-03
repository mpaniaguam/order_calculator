import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}
export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])

    return (
        <>
            <div className="space-y-3"> 
                <p>
                    Subtotal: {''} <span className="font-semibold">{formatCurrency(subtotalAmount)}</span>
                </p>
                <p>
                    Propina: {''} <span className="font-semibold">{formatCurrency(tipAmount)}</span>
                </p>
                <p className="text-xl">
                    Total: {''} <span className="font-semibold ">{formatCurrency(totalAmount)}</span>
                </p>

                <button
                    className="w-full bg-blue-950 p-3 uppercase rounded-lg text-white font-semibold mt-10 disabled:opacity-15"
                    disabled={totalAmount === 0}
                    onClick={placeOrder}
                >
                    Guardar Orden
                </button>
            </div>

        </>
    )
}