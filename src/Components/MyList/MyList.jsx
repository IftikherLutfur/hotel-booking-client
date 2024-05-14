import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';


const MyList = () => {


    const {user} = useContext(AuthContext)
    const data = useLoaderData()
console.log(data);

const data2 = data.filter(dt=>dt.email === user.email)
console.log(data2);

const handleDelete = id =>{
  console.log(id);
  fetch(`http://localhost:5000/post/${id}`,{
    method:"DELETE"
  })
  .then(res=>res.json())
  .then(data=>{console.log(data)
    if(data.deletedCount>0){
      toast.success('Successfully Deleted!')
    }

  })
}

const handleUpdate = e =>{
  e.preventDefault()
  const form = new FormData(e.currentTarget)
  const date = form.get('date')
  console.log(date);
 fetch(`http://localhost:5000/post/${data2._id}`,
  {
    method:"PUT",
    headers:{'content-type': "application/json"},
    body: JSON.stringify(data)
  }
 )
 .then(res=>res.json())
 .then(data=>{console.log(data)})
}


    return (

             <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Room</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Update</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data2.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.item}
              </TableCell>
              <TableCell align="right">{'$' + row.price_per_night}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">
                {/* The button to open modal */}
<button><a href="#my_modal_8" ><FaEdit></FaEdit></a></button>
{/* Put this part before </body> tag */}
<div className="modal" role="dialog" id="my_modal_8">
  <div className="modal-box">
   <form onSubmit={handleUpdate}>
   <div className="form-control">
          <label className="label">
    <span>update date</span>
          </label>

          <input 
          type="date" 
          name="date"
          className="input input-bordered" required />
        </div>
    <div className="modal-action">
 <button>Update</button>
    </div>
   </form>
  </div>
</div></TableCell>
              <TableCell align="right">
              <div>
              <button onClick={()=>handleDelete(row._id)}><MdDeleteForever></MdDeleteForever></button>
              </div></TableCell>
              
              <Toaster />
       
            </TableRow>
             
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MyList;