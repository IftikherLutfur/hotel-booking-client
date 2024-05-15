import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeBook = () => {

    const [rooms, setRoom] = useState([]);

    useEffect(()=>{
        fetch('https://hotel-booking-server-iftikher-lutfur-abdullahs-projects.vercel.app/room')
        .then(res=>res.json())
        .then(data=>{
            setRoom(data)
        })
    },[])

    const handleDetails = id =>{
        console.log(id);
        fetch(`https://hotel-booking-server-iftikher-lutfur-abdullahs-projects.vercel.app/room/${id}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    return (
        <div className="grid grid-cols-3 space-x-3 space-y-3 mx-4 my-5" >
        {
            rooms.slice(0,6).map(room=>
            <div key={room._id} className="p-4">
            <img  className='w-full  border-2 rounded-xl border-pink-400 h-[300px]' src={room.image} alt="" />
            <h2 className=" relative bottom-72 w-20 rounded-2xl px-2 left-4 bg-pink-200 text-center font-semibold"></h2>
        <Link to={`/room/${room._id}`}><button className="btn w-full" onClick={()=>handleDetails(room._id)}>Book Now</button></Link>
        </div>
        )
        }
    </div>
    );
};

export default HomeBook;