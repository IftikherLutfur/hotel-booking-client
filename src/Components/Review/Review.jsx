const Review = () => {

	const handleReview = e => {
		e.preventDefault()
		const form = new FormData(e.currentTarget)
		const review = form.get("review")
		const dataForPost = {review, } 
		console.log(dataForPost);
     
		fetch('http://localhost:5000/post', {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(dataForPost)
		})
			.then(res => res.json())
			.then(data => { console.log(data) })

	}

	return (
		<div className="">


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
	);
};

export default Review;