import React, { useContext, useEffect, useState } from 'react'
import { Paragrap } from '../../../atoms/Atoms'
import Product from './Product'
import { add_Api, get_Api } from '../../../api/api'
import { add_cart, get_product } from '../../../constnt'
import { ProductContext } from '../../../Context/ProductContext'

const Collection = () => {

    const [data, setdata] = useState([])
    const { cart, setcart } = useContext(ProductContext)

    // get Product
    let getProduct = async () => {
        try {
            let res = await get_Api(get_product)
            let product = res.data.filter((val) => val.avilable == true)
            if (product.length > 0) {
                setdata(product)
            }
        } catch (error) {
            console.log("product faching error", error);
        }
    }
    useEffect(() => {
        getProduct()
    }, [])

    // //  add items to Cart
    let addcart = async (val) => {
        if (!cart.some(item => item.id === val.id)) {
            try {
                let Addquantity = { ...val, quantity: 1 };
                let res = await add_Api(add_cart, Addquantity);
                setcart([...cart, res.data]);
            } catch (error) {
                console.log("Add to cart error", error);
            }
        } else {
            alert("Product is already in the cart");
        }
    }

    return (
        <>
            <div className="collection-data">
                <ul className='d-flex justify-content-center'>
                    <li><a href="javascript:void(0)"><Paragrap content="Clothing" style="paragrapp active mb-0" /></a></li>
                    <li><a href="javascript:void(0)"><Paragrap content="Handbag" style="paragrapp mb-0" /></a></li>
                    <li><a href="javascript:void(0)"><Paragrap content="Shoes" style="paragrapp mb-0" /></a></li>
                    <li><a href="javascript:void(0)"><Paragrap content="Accessories" style="paragrapp mb-0" /></a></li>
                </ul>
                <div className="row">
                    {
                        data.map((val, index) => {
                            return (
                                <React.Fragment key={index} >
                                    <div className="col-lg-4">
                                        <div className="product-cart position-relative">
                                            <Product image={val.image} name={val.name} price={val.price} discount={val.discount} offer={val.offer} />
                                            <div className="pro-cart">
                                                <button onClick={() => addcart(val)} className='position-absolute'><i class="fa-solid fa-basket-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Collection
