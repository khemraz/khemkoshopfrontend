import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Layouts/Navbar'

import { Link, Box, Grid, Container, Typography, List, ListItem, FormGroup, FormControlLabel, Checkbox, Radio } from '@mui/material'
import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material'
import Cards from '../components/Card'
import { getAllProducts, getFilteredProducts } from '../api/productApi'

import PricesRadio from '../components/PricesRadio'
import CategoryCheckbox from '../components/CategoryCheck'

const Deals = () => {
  const [products,setProduct]=useState([])
  const [myFilter,setMyFilter]=useState({
    filters:{category:[],product_price:[]}
  })

  useEffect(()=>{
    getFilteredProducts(myFilter)
      .then(data=>{
        if(data.error){
            console.log(data.error)
        }
        else{
            setProduct(data)
        }
      })
  },[myFilter])

  const handleFilter=(filters,filterBy)=>{
    let new_filter={...myFilter}
    new_filter.filters[filterBy]=filters
    setMyFilter(new_filter)
  }

  return (
    <div>
    
      <Navbar />
      <Grid container>
      <Grid item xs={3}>
        <Box p={5}>
          <Typography variant='h4' color={'success.main'} fontWeight={'bold'} sx={{ textDecoration: 'underline' }}>Deals</Typography>
          <List>
            <ListItem>
              <Link href="#" sx={{ textDecoration: 'none' }}>
                <Typography variant='button' color='secondary' fontSize={20}>Most Popular</Typography>

              </Link>
            </ListItem>
            <ListItem>
              <Link href="" sx={{ textDecoration: 'none' }}>
                <Typography variant='button' color='warning' fontSize={20}>Flash Sales</Typography>

              </Link>
            </ListItem>
            <ListItem>
              <Link href="" sx={{ textDecoration: 'none' }}>
                <Typography variant='button' color='error' fontSize={20}>Deals of the day</Typography>

              </Link>
            </ListItem>
          </List>
        <CategoryCheckbox handleCategory={handleFilter}/> 
         <PricesRadio handlePrice={handleFilter}  />
        </Box>
        </Grid>
        <Grid item xs={9} padding={5}>
          <Grid container spacing={3}>
            {
              products && products.map(item=>{
                return <Grid item xs={4} key={item._id}>
                <Cards item={item} />
              </Grid>
                  
              })
            }
            
            
          </Grid>
        </Grid>
      
      </Grid>
    </div>
  )
}

export default Deals