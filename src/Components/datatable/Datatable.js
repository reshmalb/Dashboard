import './Datatable.css'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userRows,userColumns } from '../../datatableSource';


const Datatable = () => {

 const [data,setData]=React.useState(userRows);

  const actionColumn=[
                {
                  field:"action",
                  headerName:"Action",
                  width:200,
                  renderCell:(params)=>{
                    return(
                      <div className='cellAction'>
                          <div className='viewButton'>View

                          </div>
                          <div className='deleteButton'>Delete

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
        <span className='link'>   Add New</span>
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
