export type MenuItem ={
    id: number,
    name: string,
    price: number,
    image: string
}

export type OrderItem = MenuItem & {
    quantity: number 
}