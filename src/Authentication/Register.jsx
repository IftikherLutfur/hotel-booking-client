import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()

const handleRegister = e =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get("name")
    const image = form.get("image")
    const email = form.get("email")
    const password= form.get("password")

    const regInfo = {name, image, email, password}
    console.log(regInfo);


    createUser(email, password)
    .then(result => {
        updateUserProfile(name, image)
        console.log(result.user);
        if(result.user){
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Register Successful",
            showConfirmButton: false,
            timer: 1500
          });
          
//           <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
//     <div className="flex items-center justify-center w-12 bg-emerald-500">
//         <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
//             <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
//         </svg>
//     </div>

//     <div className="px-4 py-2 -mx-3">
//         <div className="mx-3">
//             <span className="font-semibold text-emerald-500 dark:text-emerald-400">Success</span>
//             <p className="text-sm text-gray-600 dark:text-gray-200">Your account was registered!</p>
//         </div>
//     </div>
// </div>
        }
        navigate('/')
    })
    .catch(error=>{console.error(error)})


}

    return (
        <div >

   <div className="mt-8 mb-4">
    <h1 className="text-4xl font-bold text-black text-center">Register Now!!</h1>
   </div>


          <div className="grid grid-cols-2 items-center gap-0">

  <div className="hero-content flex-col">

    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>

          <input 
          type="text" 
          name="name"
          placeholder="name" 
          className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>

          <input 
          type="text" 
          name="image"
          placeholder="Photo Url" 
          className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input 
          type="email" 
          name="email"
          placeholder="Enter your email" 
          className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <input 
          type="password" 
          name="password"
          placeholder="Enter password" 
          className="input input-bordered" required />
        </div>


        <div className="form-control mt-6">
          <button className="btn bg-pink-400">Register</button>
        </div>
      </form>
    </div>
  </div>

  <div className="w-[500px]">
  <img  className="h-[500px]" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/239911596.jpg?k=270be83a567af05598a6e6c5e59a3125c33b1db5485b39dfc610e1fec2adb3dc&o=&hp=1" alt="" />
  </div>
</div>
        </div>
    );
};

export default Register;