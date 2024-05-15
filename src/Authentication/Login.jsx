import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {

   const { signIn, signInWithGoogle} = useContext(AuthContext)

   const navigate = useNavigate()

    const handleRegister = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password= form.get("password")
    
        const regInfo = {email, password}
        console.log(regInfo);
    
    
        signIn(email, password)
        .then(result => {
            console.log(result.user);
            navigate('/')
        })
        .catch(error=>{console.error(error)})
    
    }
    const handleForGoogleLogin = () =>{
      signInWithGoogle()
      .then(result=>{
        console.log(result.user)
        navigate('/')
      })
      .catch(error=>{
        console.log(error)
      })
    }
    
    return (
        <div>
            
            <div className="hero-content flex-col">

<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <h1 className="text-4xl font-bold text-center my-5 text-black">Login</h1>


  <button onClick={handleForGoogleLogin} className=" mx-4 rounded-3xl"> <div className="flex bg-slate-100 px-20 py-2">
    <div><img className="w-6 h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png" alt="" /></div>
    <div>Login With Google</div>
   </div></button>
  <form onSubmit={handleRegister} className="card-body">

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
      <button className="btn bg-pink-400">Login</button>
    </div>
  </form>
</div>
</div>


        </div>
    );
};

export default Login;