import React, { useEffect, useState } from 'react'
import { Link, Box, Grid, Container, Typography, List, ListItem, FormGroup, FormControlLabel, Checkbox, Radio } from '@mui/material'
import { CheckBox, Favorite, FavoriteBorderOutlined } from '@mui/icons-material'
import { getAllCategories } from '../api/categoryApi'

const CategoryCheckbox = ({handleCategory}) => {
  const [categories,setCategories]=useState([])
  const [checked,setChecked]=useState([])
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
  },[])

  const handleChange=(id)=>e=>{
    let new_checked=[...checked]
    let new_selected = new_checked.findIndex(item=>item===id)
    if(new_selected===-1){
      new_checked.push(id)
    }
    else{
      new_checked.splice(new_selected,1)
    }
    setChecked(new_checked)
   handleCategory(new_checked,"category")

  }
  return (
    <>
     <Typography variant='h4' color={'success.main'} fontWeight={'bold'} sx={{ textDecoration: 'underline' }}>Departments</Typography>
          <FormGroup>
            {
              categories && categories.map(category=>{
                return <FormControlLabel control={<Checkbox size='large' color='success' icon={<FavoriteBorderOutlined />}checkedIcon={<Favorite/>} onChange={handleChange(category._id)} />}  label={category.category_name} />
              })
            }
            
            
          </FormGroup>
    </>
  )
}

export default CategoryCheckbox