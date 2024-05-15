// import { useContext } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import { AuthContext } from "../../Authentication/AuthProvider";
// import axios from "axios";


// const ConfirmBook = () => {

//     const{user} = useContext(AuthContext)

//     const dataReceive = useLoaderData()
//      const {id} = useParams();
//     console.log(dataReceive);

//     const data = dataReceive.find(dt=>dt._id===id)
//     console.log(data);


//     const handleRegister = e => {
//         console.log(e);
//         e.preventDefault()
//         const form = new FormData(e.currentTarget)
//         const item = form.get('item')
//         const date = form.get('date')
//         const name = form.get('name')
//         const email = form.get('email')
//         const order = {item, date, name, email}
//         console.log(order);

//         fetch('https://hotel-booking-server-iftikher-lutfur-abdullahs-projects.vercel.app/post',{
//    method:"POST",
//    headers:{"content-type":"application/json"},
//    body:JSON.stringify(order)
//         })
//        .then(res=>res.json())
//        .then(data=>{
//         console.log(data);
//        })

//     }



//     const showAMessage = async (id, prevStatus, availability) =>{
//         const {data} = await axios.patch(`https://hotel-booking-server-iftikher-lutfur-abdullahs-projects.vercel.app/rooms/${id}`,
//           {availability}
//       )
//       console.log(data);        
//           if(data.modifiedCount>0){
//            alert("updated")
//           }
//           }

//     return (


//         <div className="flex my-4">

//             <div className=" flex-1 h-[450px] ">
//                 <div className="hidden lg:block ">
//                     <img className="w-full h-[350px] " src={data.image} alt="" />
//                     <div className="flex bg-pink-500">
//                         <div>
//                             <h2 className="text-2xl font-bold text-white sm:text-3xl">{data.room_description}</h2>

//                             <p className="max-w-xl mt-3 text-white font-bold">
//                                 {data.price_per_night}
//                             </p>
//                             <p className="max-w-xl mt-3 text-white font-bold">
//                                 {data.room_size}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex-1 hero-content w-full h-[500px] flex-col">

//                 <div className="card shrink-0 w-full shadow-2xl bg-base-100">
//                     <form onSubmit={handleRegister} className="card-body">

//                         <h1 className="text-4xl font-bold text-center my-5 text-black">Fill up the form </h1>

//                         <p className="text-center font-bol text-xl">And Confirm Your Order</p>

//                         <div className="grid grid-cols-2 w-full gap-3 mb-3">

//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Name</span>
//                                 </label>

//                                 <input
//                                     type="text"
//                                     name="item"
//                                     defaultValue={data.room_description}
//                                     placeholder="Enter your email"
//                                     className="input input-bordered" required />
//                             </div>


//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Date</span>
//                                 </label>

//                                 <input
//                                     type="date"
//                                     name="date"
                                  
//                                     className="input input-bordered" required />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Name</span>
//                                 </label>

//                                 <input
//                                     type="text"
//                                     name="name"
//                                     defaultValue={user.displayName}
//                                     className="input input-bordered" required />
//                             </div>

//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Your Email</span>
//                                 </label>

//                                 <input
//                                     type="email"
//                                     name="email"
//                                    defaultValue={user.email}
//                                     className="input input-bordered" required />
//                             </div>





//                         </div>


//                         <div className="form-control mt-6">
//                             <button onClick={()=>showAMessage(data._id,data.availability, "unavailable")} className="btn bg-pink-400">Login</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default ConfirmBook;