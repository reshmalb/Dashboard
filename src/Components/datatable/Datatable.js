import './Datatable.css'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userRows,userColumns } from '../../datatableSource';
import { Link } from 'react-router-dom';


const Datatable = () => {

 const [data,setData]=React.useState(userRows);
 const handleDelete=(id)=>{
  setData(data.filter((item)=>item.id !== id))
 }

  const actionColumn=[
                {
                  field:"action",
                  headerName:"Action",
                  width:200,
                  renderCell:(params)=>{
                    return(
                      <div className='cellAction'>
                        <Link to='/customers/customerId' style={{textDecoration:"none"}}> 
                       
                          <div className='viewButton'>View
                        
                          </div>
                          </Link>
                          <div className='deleteButton' onClick={()=>handleDelete(params.row.id)}>Delete

                          </div>

                      </div>
                    )
                  }

                }
  ]


  return (
    <div className='datatable'>
      <div className='datatable_title'>
        <span>   Add New User</span>
        <Link to='/customers/customerId/new' style={{textDecoration:"none"}}>
        <span className='link'>   Add New</span>
        </Link>
        </div>
      
   <DataGrid 
   className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}       
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    
  )
}

export default Datatable
