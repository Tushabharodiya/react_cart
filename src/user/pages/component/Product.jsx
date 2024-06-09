import { Price, Productbtn } from '../../../atoms/Atoms'

const Product = ({ image, name, price, discount, offer, data }) => {
    return (
        <div>
            <div className="product-card position-relative">
                <div className="product-img">
                    <img src={image} alt="product image" />
                </div>
                <div className="product-data">
                    <h3 className='mb-0'><a href="javascript:void(0)">{name}</a></h3>
                    <span><Price contant={price} style="price" /><p className='mb-0 d-inline'>{discount}</p></span>
                </div>
                <Productbtn contant={offer} style="productbtn  position-absolute" />
            </div>
        </div>
    )
}

export default Product
