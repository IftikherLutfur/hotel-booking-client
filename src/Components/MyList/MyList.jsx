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

  const handleReview = e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const review = form.get("review")
    const dataForPost = { review, room_description, displayName, photoURL, email }
    console.log(dataForPost);

    fetch('https://hotel-booking-server-iftikher-lutfur-abdullahs-projects.vercel.app/feedback', {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(dataForPost)
    })
        .then(res => res.json())
        .then(data => { console.log(data) })

}
    const {user} = useContext(AuthContext)
    const data = useLoaderData()
    const { room_description, displayName, photoURL, email} = user;
// console.log(data);

const data2 = data.filter(dt=>dt.email === user.email)
console.log(data2);

const handleDelete = id =>{
  console.log(id);
  fetch(`https://hotel-booking-server-iftikher-lutfur-abdullahs-projects.vercel.app/post/${id}`,{
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
  // e.preventDefault()
  const form = new FormData(e.currentTarget)
  const date = form.get('date')
  console.log(date);
 fetch(`https://hotel-booking-server-iftikher-lutfur-abdullahs-projects.vercel.app/post/${data2.id}`,
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
            <TableCell align="right">Review</TableCell>
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



{/* update section */}

              <TableCell align="right">
                {/* The button to open modal */}
{/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="" onClick={()=>document.getElementById('my_modal_3').showModal()}><FaEdit></FaEdit></button> */}
{/* <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    {/* </form> */}
     {/* <form onSubmit={handleUpdate}>
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
 <button onClick={()=> handleUpdate(row._id)} >Update</button>
    </div>
   </form> */}
  {/* </div> */}
{/* </dialog> */}
</TableCell>



   


{/* review section */}
<TableCell align="right">

{/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="" onClick={()=>document.getElementById('my_modal_3').showModal()}> <small>Want to give review? </small> </button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
   
   <div className="">
				<div className="flex flex-col items-center w-full">
					<h2 className="text-3xl font-semibold text-center mb-3">How was your experience?</h2>
					<form onSubmit={handleReview}>
						<div className="flex px-3">
							<div>
								<input
									type="text"
									name="review"
									className="p-4 w-96 rounded-md border-2 resize-none dark:text-gray-800 dark:bg-gray-50" />
							</div>
							<div className="text-center ">
								<button className="p-4 font-semibold dark:text-gray-50 bg-pink-400 rounded-xl ">Send</button>
							</div>
						</div>
					</form>
				</div>
				<div className="flex items-center justify-center">
					<a rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-600">Maybe later</a>
				</div>
			</div>
  </div>
</dialog>



</TableCell>

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