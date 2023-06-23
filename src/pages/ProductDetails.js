import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails, getRelatedProducts } from '../api/productApi'
import Cards from '../components/Card'
import { Navbar } from '../components/Layouts/Navbar'
import { addItemsToCart } from '../components/reducers/cartAction'
import { API } from '../config'

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [relatedProducts, setrelated] = useState([])
    const dispatch=useDispatch()
    useEffect(() => {
        getProductDetails(id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setProduct(data)
                }
            })
        getRelatedProducts(id)
            .then(data => setrelated(data))
    }, [id])

    const add_to_cart=(e)=>{
        e.preventDefault()
        dispatch(addItemsToCart(id,1))
    }
    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row align-items-center shadow-lg my-5'>
                    <div className='col-md-6 p-5'>
                        <img src={`${API}/${product.product_image}`} alt={product.product_name} className='w-100' />
                    </div>
                    <div className='col-md-6 p-5'>
                        <h3>{product.product_name}</h3>
                        <h3>Price: {product.product_price}</h3>
                        <h4 className='text wrap'>Product Description: {product.product_description}</h4>
                        <h3>{product.count_in_stock}</h3>
                        <button className='btn btn-warning mt-2' onClick={add_to_cart}>Add to cart</button>

                    </div>
                </div>
                <hr />
                <div className='row'>
                        {
                            relatedProducts.slice(0,4).map(prod=>{
                                return <div className='col-md-3'>
                                    <Cards item={prod} key={prod._id}/>
                                    </div>
                            })
                        }
                    </div>
            </div>
        </div>
    )
}

export default ProductDetails