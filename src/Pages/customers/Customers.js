import './Customers.css'
import Sidebar from '../../Components/sidebar/Sidebar'
import NavBar from '../../Components/navbar/NavBar'
import Datatable from '../../Components/datatable/Datatable'

const Customers = () => {
  return (
    <div className='customers'>
   <Sidebar/>
   <div className='customer_container'>
    <NavBar/>
    <Datatable/>

   </div>
    </div>
  )
}

export default Customers
