import React, { useEffect, useRef, useState } from 'react'
import { add_Api, delete_api, get_Api, update_api } from '../../api/api'
import { add_product, delete_product, get_product, update_product } from '../../constnt'
import { Switch } from "@mui/material";
import axios from 'axios';
import Swal from 'sweetalert2';

const Manage = () => {

  const [product, setproduct] = useState([]);

  let image = useRef();
  let name = useRef();
  let price = useRef()
  let discount = useRef()
  let offer = useRef()
  let avilable = useRef()
  const [view, setview] = useState({})
  const [model, setmodel] = useState("none")

  //get product
  let getProduct = async () => {
    try {
      let res = await get_Api(get_product)
      setproduct(res.data)
    } catch (error) {
      console.log("Product Featch error", error);
    }
  }

  useEffect(() => {
    getProduct()
  }, [])


  //add product

  let dublicateProduct = (name) => {
    let result = product.filter((val) => val.name == name)
    return result;
  }
  let addProduct = async () => {
    try {
      let user = {
        image: image.current.value,
        name: name.current.value,
        price: price.current.value,
        discount: discount.current.value,
        offer: offer.current.value,
        avilable: true,
      }

      if (!user.image || !user.name || !user.price) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Plz ! Enter your Product",
        });
        return;
      }

      let result = dublicateProduct(user.name)
      if (result.length != 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "duplicate Found!",
        });
      }
      else {
        let res = await add_Api(add_product, user)
        if (res.status == 201) {
          setproduct([...product, res.data])
          Swal.fire({
            title: "Done!",
            text: "Product Add Sucessfully !",
            icon: "success"
          });
        }
        image.current.value = " ";
        name.current.value = " ";
        price.current.value = " ";
        discount.current.value = " ";
        offer.current.value = " ";

      }
    } catch (error) {
      console.log("product add Error", error);
    }
  }

  //toggle btn is avilable
  let stoke = async (id, avilable, index) => {
    console.log(avilable,"aaaa");
    let data = product[index]
    await update_api(update_product, { ...data, avilable })
    setproduct(product.map((val) => val.id == id ? { ...data, avilable } : val))
  }

  //delete product
  let remove = async (id) => {
    try {
      let res = await delete_api(`${delete_product}/${id}`)
      setproduct(product.filter((val) => val.id != res.data.id))
      Swal.fire({
        title: "Are you sure?",
        text: "remove this product!",
        icon: "warning",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
    } catch (error) {
      console.log("Product Delete Error", error);
    }
  }

  let update = (val) => {
    setmodel("block")
    setview(val)
  }

  let handle = (e) => {
    setview({ ...view, [e.target.name]: e.target.value })
  }

  let save = async () => {
    try {
      let res = await update_api(update_product, view)
      setproduct(product.map((val) => val.id == res.data.id ? { ...view } : val))
      setmodel("none")
      Swal.fire({
        text: "your Update sucessfully!",
        icon: "success"
      });
    } catch (error) {
      console.log("data Save Error", error);
    }
  }

  let closeModal = () => {
    setmodel("none")
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="product-name d-flex justify-content-center">
              <div className="product-deltais">
                <label>Product image : <input type="text" name='image' ref={image} /></label>
                <label>Product Name : <input type="text" name='name' ref={name} /></label>
                <label>Price : <input type="number" name='price' ref={price} /></label>
                <label>discount : <input type="number" name='discount' ref={discount} /></label>
                <label>Offer : <input type="text" name='offer' ref={offer} /></label>
                <label><input type="hidden" ref={avilable} /></label>
                <button className='text-center' onClick={addProduct}>Add Product</button>
              </div>
            </div>

            <div className="model" style={{ display: `${model}` }}>
              <span className='mb-3' onClick={closeModal}><i class="fa-regular fa-circle-xmark"></i></span>
              <label>Product image : <input type="text" name='image' value={view.image} onChange={handle} /></label>
              <label>name :  <input type="text" name='name' onChange={handle} value={view.name} /></label>
              <label> price : <input type="text" name='price' onChange={handle} value={view.price} /></label>
              <label>discount :  <input type="text" name='discount' onChange={handle} value={view.discount} /></label>
              <label> offer : <input type="text" name='offer' onChange={handle} value={view.offer} /></label>
              <label> avilable : <input type="text" name='avilable' onChange={handle} value={view.avilable} /></label>
              <button onClick={save}>save</button>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="pro-table mx-auto">
              <table border="1px" cellPadding="10px" className='w-100 text-center mb-5'>
                <thead>
                  <tr>
                    <th>image</th>
                    <th>name</th>
                    <th>price</th>
                    <th>discount</th>
                    <th>offer</th>
                    <th>avilable</th>
                    <th>delete</th>
                    <th>update</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    product.map((val, index) => {
                      console.log(val);
                      return (
                        <tr>
                          <td><img src={val.image} alt="product image" /></td>
                          <td>{val.name}</td>
                          <td>{val.price}</td>
                          <td>{val.discount}</td>
                          <td>{val.offer}</td>
                          <td>  <Switch  checked={val.avilable} onChange={(e) =>
                            stoke(val.id, e.target.checked, index)} />
                          </td>
                          <td className='remove' onClick={() => remove(val.id)}><i className="fa-solid fa-trash"></i></td>
                          <td><button className='update' onClick={() => update(val)}>update</button></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Manage

