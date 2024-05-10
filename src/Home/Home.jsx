import Featured from "./Featured";
import GoogleMap from "./GoogleMap";

const Home = () => {
    return (
        <div>

<section style={{backgroundImage: "url('https://www.newhorizonhotel-manila.com/wp-content/uploads/2020/10/Reason-Advantage-Stay-In-5-Star-Hotel.jpg')"}} className=" gradient-to-r from-black to-[rgba(21,21,21,0)] dark:bg-gray-100 dark:text-gray-800">



	<div className="bg-gradient-to-r from-black to-[rgba(21,21,21,0)] lg:px-32 xl:max-w-3xl">

    <div className=" container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">

    </div>

            <div className="relative bottom-16">
            <h1 className="text-3xl font-bold text-white leading-none sm:text-5xl">YOUR NEXT BOUTIQUE APARTMENTS</h1>
		<p className="px-8 my-4 font-semibold text-white text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
		<div className="flex flex-wrap justify-start">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Get started</button>
			<button className="px-8 py-3 m-2 text-lg border rounded dark:text-white dark:border-gray-300">Learn more</button>
		</div>
            </div>

	</div>
</section>

<GoogleMap></GoogleMap>
<Featured></Featured>
        </div>
    );
};

export default Home;