import { useLoaderData } from "react-router-dom";

const BookDetails = () => {

    const loader = useLoaderData()
    const {id} = loader;
    const card = loader.find(bk=>bk.id === id)
    console.log(card);

    return (
        <div>
            {
               card. room_description
            }
            you can see all the data
        </div>
    );
};

export default BookDetails;