import React, { useContext, useEffect } from 'react'
import { delete_api, get_Api, update_api } from '../../api/api'
import { delete_cart, get_cart, update_cart } from '../../constnt'
import axios from 'axios'
import { ProductContext } from '../../Context/ProductContext'

const Cart = () => {

    const { cart, setcart } = useContext(ProductContext)

    // get Cart Product
    let getCart = async () => {
        try {
            let res = await get_Api(get_cart)
            setcart(res.data)
        } catch (error) {
            console.log("Product Cart fetch Error", error);
        }
    }
    useEffect(() => {
        getCart()
    }, [])

    //quntity mins
    let mins = async (id) => {
        try {
            let item = cart.find(val => val.id === id);
            if (item && item.quantity > 1) {
                let updatedItem = { ...item, quantity: item.quantity - 1 };
                let res = await update_api(update_cart, updatedItem);
                setcart(cart.map(val => val.id === id ? res.data : val));
            }
        } catch (error) {
            console.error("Error updating quantity:", error);
        }
    }

    // Quantity plus
    let plus = async (id) => {
        try {
            let item = cart.find(val => val.id === id);
            if (item) {
                let updatedItem = { ...item, quantity: item.quantity + 1 };
                let res = await update_api(update_cart, updatedItem);
                setcart(cart.map(val => val.id === id ? res.data : val));
            }
        } catch (error) {
            console.error("Error updating quantity:", error);
        }
    }


    //remove to cart
    let remove = async (id) => {
        try {
            console.log(id);
            let res = await delete_api(`${delete_cart}/${id}`)
            console.log(res);
            setcart(cart.filter((val) => val.id != res.data.id))
        } catch (error) {
            console.log("cart Remove error", error);
        }
    }

    let total = () => {
        let totalAmount = 0;
        cart.forEach((item) => {
            totalAmount += item.price * item.quantity;
        });
        return totalAmount;
    }

    let quanti = () => {
        let count = 0
        cart.forEach((val) => {
            count += val.quantity;
        })
        return count;
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pro-table mx-auto mt-5 pt-5">
                            <table border="1px" cellPadding="10px" className='w-100 text-center mb-5'>
                                <thead>
                                    <tr>
                                        <th>delete</th>
                                        <th>image</th>
                                        <th>product</th>
                                        <th>price</th>
                                        <th>quntity</th>
                                        <th>total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        cart.map((val, index) => {
                                            return (
                                                <tr>
                                                    <td className='remove' onClick={() => remove(val.id)}><i class="fa-solid fa-trash"></i></td>
                                                    <td><img src={val.image} alt="product image" /></td>
                                                    <td>{val.name}</td>
                                                    <td>{val.price}</td>
                                                    <td><i class="fa-solid fa-square-minus pe-2 " onClick={() => mins(val.id)}></i>{val.quantity}<i class="fa-solid fa-square-plus ps-2" onClick={() => plus(val.id, index)}></i></td>
                                                    <td>{val.price * val.quantity}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            <div className="row">
                                <div className="col-lg-6"></div>
                                <div className="col-lg-6">
                                    <div className="total-amout">
                                        <div className="total-head">
                                            <h2>CART TOTALS</h2>
                                        </div>
                                        <div className="total-data d-flex justify-content-between">
                                            <p>Quantity</p>
                                            <h3>{quanti()}</h3>
                                        </div>
                                        <div className="total-data d-flex justify-content-between">
                                            <p>Total</p>
                                            <h3>{`£${total()}.00`}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
