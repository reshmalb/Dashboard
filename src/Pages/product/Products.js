import React from 'react'
import './Product.css'
import Sidebar from '../../Components/sidebar/Sidebar'
import NavBar from '../../Components/navbar/NavBar'
import Producttable from '../../Components/productTable/Producttable'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className='products'>
     <Sidebar/>
     <div className='product_container'>
      <NavBar/>
      <div className='productList'>
        <div className='datatable_title'>
        <span>   Add New Product</span>
        <Link to='/products/productId/new'>
        <span className='link'>   Add New
        </span>
        </Link>
        
        </div>
        <Producttable/>
      </div>
     </div>
    </div>
  )
}

export default Products
