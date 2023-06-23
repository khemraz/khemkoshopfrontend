import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../api/userAPI'

const AdminSidebar = ({category,product,order,users}) => {
    const {user}  = isAuthenticated()
  return (
    <div>
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      {/* <svg className="bi pe-none me-2" width="40" height="32"><use xlink:to="#bootstrap"/></svg> */}
      <i className='bi bi-speedometer'></i>
      <span className="fs-4">Admin Dashboard</span>
    </Link>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        { category ?
          <Link to="/admin/categories" className="nav-link active" aria-current="page">
          <i className='bi bi-grid'></i>
            
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#home"/></svg>
          Home */}
          Category
        </Link>
          :
          <Link to="/admin/categories" className="nav-link link-dark" aria-current="page">
          <i className='bi bi-grid'></i>
            
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#home"/></svg>
          Home */}
          Category
        </Link>
        }
        
      </li>
      <li>
        {
        product ?
          <Link to="/admin/products" className="nav-link active">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#speedometer2"/></svg> */}
          <i className='bi bi-grid'></i>
         Products
        </Link>
      :  
      <Link to="/admin/products" className="nav-link link-dark">
      {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#speedometer2"/></svg> */}
      <i className='bi bi-grid'></i>
     Products
    </Link>
      }
      
      </li>
      <li>
        {
          order ?
          <Link to="/admin/orders" className="nav-link active">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#table"/></svg> */}
          <i className='bi bi-table'></i>
          Orders
        </Link>
          :
          <Link to="/admin/orders" className="nav-link link-dark">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#table"/></svg> */}
          <i className='bi bi-table'></i>
          Orders
        </Link>
        }
        
      </li>
      <li>
        {
          users ?
          <Link to="/admin/users" className="nav-link active">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#grid"/></svg> */}
          <i className='bi bi-person'></i>
          Users
        </Link>
          :
          <Link to="/admin/users" className="nav-link link-dark">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#grid"/></svg> */}
          <i className='bi bi-person'></i>
          Users
        </Link>
        }
        
      </li>
      
    </ul>
    <hr/>
    <div className="dropdown">
      <Link to="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>
          {/* {user.username} */}
        </strong>
      </Link>
      <ul className="dropdown-menu text-small shadow">
        <li><Link className="dropdown-item" to="#">{user.email}</Link></li>
        {/* <li><Link className="dropdown-item" to="#">Settings</Link></li>
        <li><Link className="dropdown-item" to="#">Profile</Link></li> */}
        <li><hr className="dropdown-divider"/></li>
        <li><span className="dropdown-item" to="#">Sign out</span></li>
      </ul>
    </div>
  </div>

    </div>
  )
}

export default AdminSidebar