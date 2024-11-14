import { useContext } from "react";
import Card from "./Components/Cart"
import { CartCreateContect } from "./ContextApi/contextApi";

const CartFile = () => {
    const { product } = useContext(CartCreateContect);

    return (
        <>
            {product.slice(0,10).map((item) =>{
                return(
                    <div key={item.id}>
                        <img src={item.images[0]} width={'200px'} />
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                    </div>
                )
            })}
            <Card
                title="Nandini Atri"
                content="This is the content of the card"
            />
        </>
    )
}

export default CartFile;