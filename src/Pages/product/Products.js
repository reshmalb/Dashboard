import React from 'react'
import './Product.css'
import Sidebar from '../../Components/sidebar/Sidebar'
import NavBar from '../../Components/navbar/NavBar'
import Producttable from '../../Components/productTable/Producttable'


const Products = () => {
  return (
    <div className='products'>
     <Sidebar/>
     <div className='product_container'>
      <NavBar/>
      <div className='productList'>
        <div className='datatable_title'>
        <span>   Add New Product</span>
        <span className='link'>   Add New
        </span>
        </div>
        <Producttable/>
      </div>
     </div>
    </div>
  )
}

export default Products
