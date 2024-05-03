import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>
    tip: number
}

export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-semibold text-lg">Propina: </h3>
            <form>
                <div className="flex gap-3 justify-between px-10">
                    {tipOptions.map(tipOptions => (

                        <div key={tipOptions.id} className="flex gap-2 border rounded-lg border-gray-300  py-3 px-5">
                            <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
                            <input
                                id={tipOptions.id}
                                type="radio"
                                name="tip"
                                value={tipOptions.value}
                                onChange={e => setTip(+e.target.value)}
                                checked={tipOptions.value === tip}
                            />
                        </div>
                    ))}
                </div>
            </form>
        </div>

    )
}
