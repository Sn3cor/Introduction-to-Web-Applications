import { useState } from "react"

const Update = () => {
    const [product, setProduct] = useState({
        name: "Tomato",
        price: 50
    })

    return (
        <div>
            <h2>Update</h2>
            <p>Currently {product.name} costs {product.price}</p>
            <button onClick={() => {
                setProduct({
                    ...product,
                    price: 100
                })
            }}>
                Change Price
            </button>
        </div>
    )

}

export default Update