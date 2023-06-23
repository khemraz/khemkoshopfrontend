import React, { useEffect, useReducer, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAllCategories } from '../../api/categoryApi'
import { getProductDetails, updateProduct } from '../../api/productApi'
import { isAuthenticated } from '../../api/userAPI'
import AdminSidebar from '../../components/Layouts/AdminSidebar'
import { Navbar } from '../../components/Layouts/Navbar'
import { API } from '../../config'

const UpdateProduct = () => {
    const {token}=isAuthenticated()
    //reducer
    const productReducer=(state,event)=>{
        switch(event.target.name){
            case "product_image":
                state.formdata.set(event.target.name,event.target.files[0])
                return {...state}
            
            case "product":
                return event.target.payload    

            default:
                state.formdata.set(event.target.name,event.target.value)
                return {...state,[event.target.name]:event.target.value}
            }
        
    }

    
    const [product,setProduct]=useReducer(productReducer,{formdata:new FormData})
    const [error,setError]=useState('')
    const [success,setSuccess]=useState(false)

    
    const [categories,setCategories]=useState([])
    const category_ref=useRef()



    const {id}=useParams()

    useEffect(()=>{
        getAllCategories()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setCategories(data)
            }
        })

        getProductDetails(id)
            .then(data=>{
                if(data.error){
                    console.log(data.error)
                }
                else{
                    setProduct({target:{name:"product",payload:{...data,formdata:new FormData}}})
                    category_ref.current.value=data.category._id
                }
            })
        
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault()
        //addNewProduct(product.formdata,token)
        updateProduct(id,product.formdata,token)
        .then(data=>{
            if(data.error){
                
                setError(data.error)
            }
            else{
                setSuccess(true)
            }
        })
        }

        const{product_name,product_price,product_description,count_in_stock,product_image}=product

        const showError=()=>{
            if(error){
            return <div className='alert alert-danger'>{error}</div>
        }}

        const showSuccess=()=>{
            if(success){
            return <div className='alert alert-success'>Product Updated successfully<Link to='/admin/products'>Go Back</Link></div>
        }}

  return (
    <div>
        <Navbar/>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12 col-md-3'>
                    <AdminSidebar product/>
                </div>
                <div className='col-sm-12 col-md-9 p-5'>
                    <h3>Update Product</h3>
                    <form className='p-5 shadow-lg w-75'>
                        {showError()}
                        {showSuccess()}
                        <label htmlFor='product_name'>Product Name</label>
                        <input type={'text'} id='product_name' name='product_name' className='form-control' onChange={setProduct} value={product_name}/>

                        

                        <label htmlFor='product_price'>Product Price</label>
                        <input type={'number'} id='product_price' name='product_price' className='form-control' onChange={setProduct} value={product_price }/>

                        <label htmlFor='product_description'>Product Description</label>
                        <textarea rows={3} className='form-control' id='product_description' name='product_description' onChange={setProduct} value={product_description}></textarea>


                        <label htmlFor='count_in_stock'>Count In stock</label>
                        <input type={'number'} id='count_in_stock' name='count_in_stock' className='form-control' onChange={setProduct} value={count_in_stock}/>

                        <label htmlFor=''>Product Image</label>
                        <img src={`${API}/${product_image}`} alt={product_name} style={{height:"200px"}}/>
                        <input type={'file'} id='product_image' name='product_image' className='form-control' onChange={setProduct}/>

                        <label htmlFor='product_name'>Categories</label>
                        <select className='form-control' id='category' name='category' onChange={setProduct} ref={category_ref}>
                            <option>Select Category</option>
                            {
                                categories && categories.map(category=>{
                                    return <option key={category._id} value={category._id}>{category.category_name} </option>
                                })
                            }
                            
                        </select>
                        <button className='btn btn-warning mt-2 w-100' onClick={handleSubmit}>Update Product</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default UpdateProduct