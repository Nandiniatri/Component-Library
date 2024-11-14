import { createContext, useEffect, useState } from "react";

export const CartCreateContect = createContext();

const CartContextApi = ({children}) =>{
    const [product , setProduct] = useState([]);

    useEffect(() =>{
        const fetchData = async() =>{
            try{
                const response = await fetch('https://dummyjson.com/products');
                // console.log(response);

                if(!response.ok){
                    throw new Error('Failed to fetch products');
                }
                const result = await response.json();
                // console.log(result.products);
                setProduct(result.products);
            }catch(error){
                console.log('Error');
            }
        }

        fetchData();
        
    },[])

    return (
        <CartCreateContect.Provider value={
            {
                product
            }
        }>
            {children}
        </CartCreateContect.Provider>
    )
}

export default CartContextApi;