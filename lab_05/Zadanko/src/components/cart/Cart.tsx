import Product from "./Product"

const Cart = () => {
    let products: string[] = ["Apple", "Pear", "Banana", "Strawberries", "Peach"]

    return (
        <div className="cart">
            <h2>Cart</h2>
            {products.map((product: any) => {
                return <Product name={product} />
            })}
        </div>
    )
}

export default Cart