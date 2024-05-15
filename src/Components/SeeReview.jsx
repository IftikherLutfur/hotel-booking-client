import { useEffect, useState } from "react";

const SeeReview = () => {

	const [review, setReview] = useState([])
	const [specificReview, setSpecificReview] = useState([])
	useEffect(() => {
		fetch('https://hotel-booking-server-beta.vercel.app/post')
			.then(res => res.json())
			.then(data => {
				setReview(data);
			})
	}, [])

	useEffect(() => {
		fetch('https://hotel-booking-server-beta.vercel.app/feedback')
			.then(res => res.json())
			.then(data => {
				setSpecificReview(data)
			})
	}, [])

	// console.log(review, specificReview);

	const reviews = specificReview.filter(rv => rv.room_description === review.item)
	console.log(reviews);

	return (
	<div className="mt-6">
           <h1 className="text-4xl text-center font-bold text-black">Customers Review</h1>
		<div className=" my-5 mx-10 grid grid-cols-3 gap-5">
			{specificReview.map(rv=><div key={rv.id} className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
				<div className="flex justify-between p-4">
					<div className="flex items-center space-x-4">
						<div>
							<img src={rv.photoURL} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
						</div>
						<div>
							<h4 className="font-bold">{rv.displayName}</h4>
						</div>
					</div>
				
				</div>
				<div className="p-4 space-y-2 text-sm dark:text-gray-600">
					<p>{rv.review}</p>
				</div>
			</div>)}
		</div>
	</div>
	);
};

export default SeeReview;