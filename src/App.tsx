import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()

  return (
    <>
      <header className="bg-blue-950 py-5">
        <h1 className="text-center text-5xl font-semiblack text-neutral-300 ">Order Calculator</h1>
      </header>

      <main className="bg-blue-50">
        <div className="  max-w-7xl mx-auto py-5 grid md:grid-cols-2 ">
          <div className="p-5">
            <h2 className="text-3xl font-semibold text-blue-950">Menu</h2>
            <div className="space-y-3 mt-10">
              {menuItems.map(item => (
                <MenuItem
                  key={item.id}
                  item={item}
                  addItem={addItem}
                />
              ))}
            </div>


          </div>
          <div className="p-5 space-y-10">
            <h2 className='font-semibold text-3xl text-blue-950 '> Orden</h2>
            {order.length ? (
              <>

                <OrderContents
                  order={order}
                  removeItem={removeItem}
                />

                <h3 className="font-semibold text-blue-950 text-2xl">Totales y Propinas:</h3>
                <TipPercentageForm
                  setTip={setTip}
                  tip={tip}
                />

                <OrderTotals
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                />
              </>
            ) : (
              <p className="text-center">La order esta vacia</p>
            )}



          </div>

        </div>
      </main>

    </>
  )
}

export default App
