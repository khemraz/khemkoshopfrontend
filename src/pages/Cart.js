import { Delete, DeleteForever } from '@mui/icons-material';
import { Container,TableContainer,Table,TableHead,TableRow,TableCell,TableBody,Paper, Typography, Button } from '@mui/material'
import { width } from '@mui/system';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Navbar } from '../components/Layouts/Navbar'
import { addItemsToCart, removeItemFromCart } from '../components/reducers/cartAction';
import { API } from '../config';

const Cart = () => {
  let cart_items = useSelector(store=>store.cart.cart_items)
  let cart_items_number=cart_items.length>0?cart_items.map(item=>item.quantity):0
  cart_items_number=cart_items.length>0?cart_items_number.reduce((a,c)=>a+c):0

  let order_total=cart_items.length>0?cart_items.map(item=>item.quantity*item.product_price):0
  order_total = cart_items.length>0?order_total.reduce((a,c)=>a*c):0

  localStorage.setItem('cart_count',cart_items_number)
  localStorage.setItem('total_amount',order_total)

    // function createData(name,image,price,quantity) {
    //     return { name,image,price,quantity };
    //   }
      
    //   const rows = [
    //     createData('Samsung Galaxy',"https://static-01.daraz.com.np/p/41d43bc8c31de6d900494b91074ba468.jpg",'Rs.13,499',4),
    //     createData('realmenote 11',"https://static-01.daraz.com.np/p/4e025f373b46c23387c6e9b60ff7eb0e.jpg","50,000",3),
    //     createData('Oppo f7',"https://static-01.daraz.com.np/p/1880dffde5a5d6ab0d305e84a560ea4b.jpg","34234234",5)
        
    //   ];
    const dispatch=useDispatch()
    const increase_quantity=(id,quantity,stock)=>e=>{
      e.preventDefault()
      quantity++
      if(quantity>stock){
        Swal.fire('Warning','Quantity Of Stock','warning')
      }
      else{
        dispatch(addItemsToCart(id,quantity))
      }
    }
    const decrease_quantity=(id,quantity)=>e=>{
      e.preventDefault()
      quantity--
      if(quantity<=0){
        Swal.fire(
          {title:'Warning',
          html:'Do you want to remove this item?',
          showCancelButton:true,
          icon:'Warning'
        })
        .then(result=>{
          if(result.isConfirmed){
            dispatch(removeItemFromCart(id))
          }

        })
      }
      else{
        dispatch(addItemsToCart(id,quantity))
      }
    }
    const remove_item=(id)=>e=>{
      e.preventDefault()
      dispatch(removeItemFromCart(id))
    }
  return (
    <div>
        <Navbar/>
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
            <TableCell align="center">Unit Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Total Price</TableCell>
            
            <TableCell align="center">Remove</TableCell>
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
                <Typography variant='h6'>{row.product_price}</Typography>
                </TableCell>
              <TableCell align="center">
                 <div className='btn-group'>
                  <button className='btn btn-warning'  onClick={decrease_quantity(row.product,row.quantity)}>-</button>
                  <input type={'text'} value={row.quantity} style={{border:0,textAlign:'center',padding:'0 10px', width:'30px'}} disabled/>
                  <button className='btn btn-success' onClick={increase_quantity(row.product,row.quantity,row.count_in_stock)}>+</button>
                  </div> 
                </TableCell>
              <TableCell align="right">{row.quantity*row.product_price}</TableCell>
              <TableCell align="right">
                <Button variant='contained' color='error' onClick={remove_item(row.product)} >Delete<DeleteForever/></Button>
                    </TableCell>
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
            {
              cart_items.length>0 ?
              <Link to='/shipping' className='btn btn-warning'> Proceed to Payment</Link>
              :
              <button className='btn btn-warning' disabled> Proceed to Shipping</button>
            }
            

            </div>

  </div>
        
    </div>
    </div>
  )
}

export default Cart