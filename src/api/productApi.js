import { API } from "../config"

export const getAllProducts=()=>{
    return fetch(`${API}/getallproducts`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const getFilteredProducts=(filters)=>{
    return fetch(`${API}/getfilteredproducts`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(filters)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const getRelatedProducts=(id)=>{
    return fetch(`${API}/getrelatedproducts/${id}`)
    .then(res=>res.json())
    .catch(err=>console.log(err))

}

export const addNewProduct =(product,token)=>{
    return fetch(`${API}/addproduct`,{
        method:"POST",
        headers:{
            // "Content-Type":"application/json"
            Authorization:`Bearer ${token}`
        },
        body:product//forom data sending so not json stringifiy
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))   
}

export const getProductDetails=(id)=>{
    return fetch(`${API}/productdetails/${id}`)
    .then(res=>res.json())
    .catch(err=>console.log(err))   
}

export const updateProduct =(id,product,token)=>{
    return fetch(`${API}/updateproduct/${id}`,{
        method:"PUT",
        headers:{
            // "Content-Type":"application/json"
            Authorization:`Bearer ${token}`
        },
        body:product//forom data sending so not json stringifiy
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))   
}

export const deleteProduct =(id,token)=>{
    return fetch(`${API}/deleteproduct/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        }
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}