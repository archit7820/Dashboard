import React from 'react'
import "./dataTable.scss"
import { DataGrid ,GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';



const DataTable = (props) => {
  const handleDelete = (id) => {  //delete the item
  
    console.log(id + "is has been deleted")
  };
  const actionColum = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

   

  return (
    <div className='dataTable'> 
             <DataGrid
            className='datagrid'
        rows={props.rows}
        columns={[...props.columns  ,actionColum]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            }  ,},
        }} 
          slots = {{toolbar:GridToolbar}}
            slotProps={{
                toolbar : {
                    showQuickFilter : true ,
                    quickFilterProps : {debounceMs:500} ,
                },
            }
            }
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />

    </div>
  )
}

export default DataTable
