import { Link, useLoaderData } from "react-router-dom";

const Book = () => {

    const loader = useLoaderData()
    // console.log(loader);

    const handleDetails = id =>{
        console.log(id);
        fetch(`http://localhost:5000/room/${id}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    return (
        <div className="grid grid-cols-3 space-x-3 space-y-3 mx-4 my-5" >
            {
                loader.map(ld=> <Link to={`/room/${ld._id}`} key={ld._id}><button onClick={()=>handleDetails(ld._id)} key={ld._id}>
                <div className="p-4">
                <img  className='w-full  border-2 rounded-xl border-pink-400 h-[300px]' src={ld.image} alt="" />
                <h2 className=" relative bottom-72 w-20 rounded-2xl px-2 left-4 bg-pink-200 text-center font-semibold"></h2>
            </div>
            </button></Link>)
            }
        </div>
    );
};

export default Book;