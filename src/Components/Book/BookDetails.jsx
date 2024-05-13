import axios from "axios";
import {useLoaderData, useParams } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";

const BookDetails = () => {
    
    const {user} = useContext(AuthContext);
    const loaders = useLoaderData();
    console.log(loaders);
    const { id } = useParams();
    const card = loaders.find(loader => loader._id === id)
    console.log(card);
    const {price_per_night} = card;


    const showAMessage = async (id, prevStatus, availability) =>{
        if(card.availability){
            const {data} = await axios.patch(`http://localhost:5000/rooms/${id}`,
              {availability}
          )
          console.log(data);        
              if(data.modifiedCount>0){
               alert("updated")
              }
              }
              else{
                alert("already booked")
              }

        }

       
        const handleConfirm = e => {
            console.log(e);
            e.preventDefault()
            const form = new FormData(e.currentTarget)
            const item = form.get('item')
            const date = form.get('date')
            const name = form.get('name')
            const email = form.get('email')
            const order = {item, date, name, email,price_per_night}
            console.log(order);
             fetch('http://localhost:5000/post',{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(order)
                     })
                    .then(res=>res.json())
                    .then(data=>{
                     console.log(data);
                    })
           
    
        }



    return (
        <div className="mx-10  overflow-hidden rounded-lg shadow-lg bg-sky-700 my-5">


    
       
            <div className="flex">
                <div className="flex-1">
                    <img className="w-full h-full" src={card.image} alt="" />
                </div>           
      <div className=" flex-1 w-2/3 p-4 md:p-4">

        <h1 className="text-xl text-center font-bold text-gray-800 dark:text-white">{card.room_description}</h1>

         <p className="mt-4 text-sm  text-white">
        {card.description}</p> 

        <p>{card.availability}</p>

                 <div className="flex mt-2 item-center ml-60">
            <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
        </div>

        <div className=" mt-3 item-center">
            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">Price: {"$"+ card.price_per_night}</h1>
            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">Room Sze: {card.room_size}</h1>



<label htmlFor="my_modal_6" className={card.availability==='unavailable'? 'hidden' : "btn w-full bg-pink-400"}>Order</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />

<div className="modal" role="dialog">
  <div className="modal-box">
    <div className="modal-action">
    <label htmlFor="my_modal_6" className="btn absolute"><MdCancel></MdCancel></label>


        <form onSubmit={handleConfirm} method="dialog">
      <h1 className="text-4xl font-bold text-center my-5 text-black">Fill up the form </h1>

<p className="text-center font-bol text-xl">And Confirm Your Order</p>

<div className="grid grid-cols-2 w-full gap-3 mb-3">

    <div className="form-control">
        <label className="label">
            <span className="label-text">Name</span>
        </label>

        <input
            type="text"
            name="item"
            defaultValue={card.room_description}
            placeholder="Enter your email"
            className="input input-bordered" required />
    </div>


    <div className="form-control">
        <label className="label">
            <span className="label-text">Date</span>
        </label>

        <input
            type="date"
            name="date"
          
            className="input input-bordered" required />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Name</span>
        </label>

        <input
            type="text"
            name="name"
           defaultValue={user.displayName}
            className="input input-bordered" required />
    </div>

    <div className="form-control">
        <label className="label">
            <span className="label-text">Your Email</span>
        </label>

        <input
            type="email"
            name="email"
            defaultValue={user.email}
            className="input input-bordered" required />
    </div>
      
     <button onClick={()=> showAMessage(card._id, card.availability, "Unavailable")} className="btn bg-pink-400 w-full" >Confirm</button>

</div>
{/* <button className="btn">Close</button> */}
      </form>



    </div>
  </div>
</div>

        </div>
    </div> 
    
            </div>





        </div>


    );
};

export default BookDetails;