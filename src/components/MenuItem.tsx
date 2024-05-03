import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
  addItem: (item: MenuItem) => void
}

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="border-2 border-gray-300  hover:bg-gray-200 w-full p-3 flex justify-between rounded-lg items-center shadow-md"
      onClick={() => addItem(item)}
    >
      <div className="flex items-center gap-3">
        <img className="w-8 img-fluid" src={`src/img/${item.image}.png`} alt="icono" />
        <p className="text-left">{item.name}</p>
      </div>  
      <p className="font-semibold text-blue-950">${item.price}</p>
    </button>
  )
}
