
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';

const Navbar = () => {


    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
    }

    return (
        <div>
            <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex justify-between h-16 mx-auto">
		<h2 className='text-2xl font-bold'>Grand Hotel</h2>
		<ul className="items-center hidden space-x-3 lg:flex">
		<li className="flex">
		<NavLink className={({isActive}) => isActive? "text-pink-400" : ""} to='/'><a rel="noopener noreferrer" href="#" className="flex">Home</a></NavLink>
		</li>
		
		<li className="flex">
		<NavLink className={({isActive}) => isActive? "text-pink-400" : ""} to='/room'><a rel="noopener noreferrer" href="#" className="flex">Room</a></NavLink>
		</li>
		<li className="flex">
		<NavLink className={({isActive}) => isActive? "text-pink-400" : ""}  to='/about'><button rel="noopener noreferrer" href="#"  >Contact Us</button></NavLink>
		</li>
		{user && <li className="flex">
		<NavLink className={({isActive}) => isActive? "text-pink-400" : ""} to='/list'><a rel="noopener noreferrer" href="#" className="flex">My List</a></NavLink>
		</li>}
		<li className="flex">
		<NavLink className={({isActive}) => isActive? "text-pink-400" : ""} to='/aboutUs'><a rel="noopener noreferrer" href="#" className="flex">About us</a></NavLink>
		</li>
		</ul>

       {user ? <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img  src={user.photoURL} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            {user.displayName}</a></li>
        <li><a>
           <button onClick={handleLogOut}> Logout</button>
            </a></li>
      </ul>
    </div>
:
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button className="self-center px-8 py-3 rounded">
                <NavLink to='/login'>Sign in</NavLink>
                </button>
			<button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
                <NavLink to='/signUp'>Sign Up</NavLink>
                </button>
		</div>}



		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
        </div>
    );
};

export default Navbar;