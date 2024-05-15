import { Link, useLoaderData } from "react-router-dom";

const Book = () => {

    const loader = useLoaderData()
    // console.log(loader);

    const handleDetails = id =>{
        console.log(id);
        fetch(`https://hotel-booking-server-beta.vercel.app/room/${id}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    return (
        <div className="grid grid-cols-3 space-x-3 space-y-3 mx-4 my-5" >
            {
                loader.map(ld=><div key={ld._id} className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 w-[500px] h-[290px]">
    <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{ld.room_description}</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400"></p>
    </div>
    <img className="object-cover w-full h-48 mt-2" src={ld.image} alt="NIKE AIR"/>

    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">{"$"+ld.price_per_night}</h1>
        <Link to={`/room/${ld._id}`} key={ld._id}><button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none" onClick={()=>handleDetails(ld._id)} >View Details</button>
            </Link>
    </div>
</div>

            )
            }
        </div>
    );
};

export default Book;