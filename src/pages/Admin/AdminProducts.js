import { Restaurant } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deleteProduct, getAllProducts } from '../../api/productApi'
import { isAuthenticated } from '../../api/userAPI'
import AdminSidebar from '../../components/Layouts/AdminSidebar'
import { Navbar } from '../../components/Layouts/Navbar'
import { API } from '../../config'

const AdminProducts = () => {
    const [products, setProducts] = useState([])
    const {token}=isAuthenticated()
    const [success,setSuccess]=useState('')


    useEffect(() => {
        getAllProducts()
            .then(data => {
                if (data.error) {
                    console.log(data.error)

                }
                else {
                    setProducts(data)
                }
            })
            .catch(err => console.log(err))
    }, [success])

    const handleDelete = id =>e=>{
        e.preventDefault()
        Swal.fire({
            title:"Confirm Delete",
            html:"Are you sure,you want to delete this product?",
            icon:"question",
            showCancelButton: true,
            confirmButtonText:"Confirm",
            confirmButtonColor:"dc3545"
            }).then(result=>{
                if(result.isConfirmed){
                    deleteProduct(id,token)
                    .then(data=>{
                        if(data.error){
                            Swal.fire("Error",data.error,"error")
                        }
                        else{
                            Swal.fire("Success","Product Deleted","info")
                            setSuccess(true)
                        }
                    })
                }
            })
            .catch(()=>{
                Swal.fire("cancel","Delete cancelled","info")
            })
    }
    return (
        <div>
            <Navbar />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12 col-md-3'>
                        <AdminSidebar product />
                    </div>
                    <div className='col-sm-12 col-md-9 p-5'>
                        <div className='d-flex justify-content-between'>
                            <h3>Products</h3>
                            <Link to='/admin/products/add' className='btn btn-warning'>Add New Product</Link>

                        </div>

                        <table className='table table-bordered text-center table-hover table-striped'>
                            <thead className='table-dark'>
                                <tr>
                                    <td>S.No.</td>
                                    <td>Product Image</td>
                                    <td>Product Name</td>
                                    <td>Unit Price</td>
                                    <td>Count in Stock</td>
                                    <td>Rating</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products && products.map((product, i) => {
                                        return <tr key={product._id}>
                                            <td>{i + 1}</td>
                                            <td><img src={`${API}/${product.product_image}`} alt={product.product_name} style={{ height: '150px' }} /></td>
                                            <td>{product.product_name}</td>
                                            <td>{product.product_price}</td>
                                            <td>{product.count_in_stock}</td>
                                            <td>{product.rating}</td>
                                            <td>
                                                <div className='btn-group'>
                                                    <Link to={`/admin/products/update/${product._id}`} className='btn btn-warning' >Update <i className='bi bi-pencil-square'></i></Link>
                                                    <button className='btn btn-danger' onClick={handleDelete(product._id)}>Delete
                                                        <i className='bi bi-trash'></i></button>
                                                </div>
                                            </td>


                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProducts