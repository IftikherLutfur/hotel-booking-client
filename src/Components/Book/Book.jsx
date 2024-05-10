import { useLoaderData } from "react-router-dom";

const Book = () => {

    const loader = useLoaderData()
    console.log(loader);

    return (
        <div className="grid grid-cols-3 space-x-3 space-y-3 mx-4 my-5" >
            {
                loader.map(ld=><div className="p-4" key={ld._id}>
                    <img  className='w-full  border-2 rounded-xl border-pink-400 h-[300px]' src={ld.image} alt="" />
                    <h2 className=" relative bottom-72 w-20 rounded-2xl px-2 left-4 bg-pink-200 text-center font-semibold">{ld.availability}</h2>
                </div>)
            }
        </div>
    );
};

export default Book;