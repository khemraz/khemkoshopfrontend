import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from '../components/Layouts/Navbar'
import { Delete, DeleteForever } from '@mui/icons-material';
import { Container,TableContainer,Table,TableHead,TableRow,TableCell,TableBody,Paper, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom';
import { API } from '../config';
import { saveShippingInfo } from '../components/reducers/cartAction';

const Shipping = () => {
    const cart_items=useSelector(state=>state.cart.cart_items)

    

    let cart_items_number=cart_items.length>0?cart_items.map(item=>item.quantity):0
    cart_items_number=cart_items.length>0?cart_items_number.reduce((a,c)=>a+c):0
  
    let order_total=cart_items.length>0?cart_items.map(item=>item.quantity*item.product_price):0
    order_total = cart_items.length>0?order_total.reduce((a,c)=>a*c):0

    localStorage.setItem('cart_count',cart_items_number)
    localStorage.setItem('total_amount',order_total)

    const shippingInfoReducer=(state,event)=>{
        return {...state,[event.target.name]:event.target.value}
    }
    const [shipping_info,setShippingInfo]=useReducer(shippingInfoReducer,
      localStorage.getItem('shipping_info')?JSON.parse(localStorage.getItem('shipping_info')):{shipping_address:""})
   
    const {contact_person,shipping_address,alternate_shipping_address,city,country,zipcode,phone}=shipping_info

    const dispatch=useDispatch()
    const saveShipping=(e)=>{
      e.preventDefault()
      dispatch(saveShippingInfo(shipping_info))
    }
      return (
    <div>
        <Navbar/>
        <div className='container'>
        <div>
                <h3>Cart Summary</h3>
                <div className='container'>
  <div className='row'>
    <div className='col-md-8'>
      {
        cart_items.length>0 ?
        <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.No.</TableCell>
            <TableCell align="center">Product_Image</TableCell>
            <TableCell align="center">Product_Name</TableCell>
            
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Total Price</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {cart_items.map((row,i) => (
            <TableRow
              key={i}
              sx={{ '&:hover': { backgroundColor:'skyblue' } }}
            >
              <TableCell component="th" scope="row">
                {i+1}
              </TableCell>
              <TableCell align="center">
                <img src={`${API}/${row.product_image}`} style={{height:'120px'}} alt={row.product_name}></img></TableCell>
              <TableCell align="center">
                <Typography variant='h6'>{row.product_name}</Typography>
                

                </TableCell>
                
              <TableCell align="center">
                 <div className='btn-group'>
                  
                  <input type={'text'} value={row.quantity} style={{border:0,textAlign:'center',padding:'0 10px', width:'30px'}} disabled/>
                 
                  </div> 
                </TableCell>
              <TableCell align="right">{row.quantity*row.product_price}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    :
    <div className='alert alert-danger'>No items in cart.</div>
      }
    
    </div>

            <div className='col-md-4'>Order summary
            <h4>Order Items : {cart_items_number} items</h4>
            <h4>Order Total : Rs.{order_total}</h4>
            
            

            </div>

  </div>
        
    </div>
            </div>
            <form>
                <h3>Shipping Information</h3>
                
                <label htmlFor='name'>Contact Person</label>
                <input type={'text'} id='name' className='form-control mb-2' name='contact_person' onChange={setShippingInfo} value={contact_person}/>
                <label htmlFor='name'>Shipping Address</label>
                <input type={'text'} id='name' className='form-control mb-2' name='shipping_address' onChange={setShippingInfo} value={shipping_address}/>

                 
                <label htmlFor='name'>Alternate Shipping Address</label>
                <input type={'text'} id='name' className='form-control mb-2' name='alternate_shipping_address'onChange={setShippingInfo} value={alternate_shipping_address}/>

                
                <label htmlFor='name'>City</label>
                <input type={'text'} id='name' className='form-control mb-2' name='city' onChange={setShippingInfo} value={city}/>

                
                <label htmlFor='name'>ZipCode</label>
                <input type={'text'} id='name' className='form-control mb-2' name='zipcode' onChange={setShippingInfo} value={zipcode}/>

                <label htmlFor='name'>Country</label>
                <input type={'text'} id='name' className='form-control mb-2' name='country' onChange={setShippingInfo} value={country}/>

                
                

                <label htmlFor='name'>Phone</label>
                <input type={'number'} id='name' className='form-control mb-2'onChange={setShippingInfo}value={phone}/>

                <button className='btn btn-warning mb-3 w-50' onClick={saveShipping}>Update Shipping Information</button>
                <Link to='/payment' className='btn btn-success  mb-3 w-50'>Proceed To Payment</Link>

            </form>
           
        </div>
    </div>
  )
}

export default Shipping