import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

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
        toast.success('Registered Successful')   
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
          <Toaster />
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