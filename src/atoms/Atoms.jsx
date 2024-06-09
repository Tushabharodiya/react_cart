import { Link } from "react-router-dom"
import { Adminnav, Usernav } from "./Data"
import React, { useContext, useEffect, useState } from "react"
import { get_Api } from "../api/api"
import { get_cart } from "../constnt"
import { ProductContext } from "../Context/ProductContext"
let Navbar = (props) => {

    const [data, setdata] = useState(props.element == "admin" ? Adminnav : Usernav)
    const { cart, setcart } = useContext(ProductContext)

    //get Cart items
    let getcart = async () => {
        try {
            let res = await get_Api(get_cart)
            setcart(res.data)
        } catch (error) {
            console.log("Product Feacth error", error);
        }
    }
    useEffect(() => {
        getcart()
    }, [])


    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="https://htmldemo.net/reid/reid/assets/img/logo/logo.png" alt="logo image" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="head-data d-flex justify-content-between flex-grow-1 align-items-center">
                            <div className="head-info flex-grow-1">
                                <ul className="navbar-nav flex-grow-1 justify-content-center">
                                    {
                                        data.map((val, index) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <li lass="nav-item">
                                                        <Link to={`${val.path}`} className="nav-link p-0" href="#">{val.name}</Link>
                                                    </li>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="head-list d-flex">
                                <p className="mb-0">Call Free Support: <a href="javascript:vod(0)"> 01234567890</a> </p>
                                <Link to={"/cart"} href="javascript:void(0)" ><i className="fa-solid fa-cart-shopping  ms-2 "></i><span>{cart.length}</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

let Button = ({ style }) => (
    <button className={style}>discover Now</button>
)

let Paragrap = ({ content, style }) => (
    <p className={style}>{content}</p>
)

let Price = ({ contant, style }) => (
    <span className={style}>{contant}</span>
)

let Productbtn = ({ contant, style }) => (
    <button className={style}>{contant}</button>
)

let Blogdata = ({ content, style }) => (
    <h2><a href="javascript:void(0)" className={style} >{content}</a></h2>
)

export { Navbar, Button, Paragrap, Price, Productbtn, Blogdata }