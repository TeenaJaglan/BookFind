import { Link } from 'react-router-dom';
import './loginpage.css';
import {useForm} from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
export default function LoginPage(){
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = function(data){
console.log(data);
  }
  return (
    <div className="boxx">
      <form className = "main" onSubmit={handleSubmit(onSubmit)}>
      <p className = "heading" ><strong>SIGNIN</strong></p>
      
      <div className = "block2">
        <p className="text">Email Address*</p>
        <input  {...register("email",{required:true})} className ="inputbar" type="text"  placeholder="xyz@gmail.com" />
        {errors.email && <span className = "span">This field is required*</span>}
      </div>
      <div className = "block">
        <p className="text">Password*</p>
        <input  {...register("password",{required:true})} type="text" className ="inputbar" />
        {errors.password && <span className = "span">This field is required*</span>}
      </div>
      <button className="btns" onClick={()=>{console.log(register)}}>Login</button>
      <div className = "block1">
        <div className = "line"></div>
        <p className="or">OR</p>
        <div className = "line"></div>
      </div>
      <button className="btns">Signin with Google  <FcGoogle className="logo4"/></button>
      <div className = "block1">
        <div className = "line"></div>
        <p className="or">OR</p>
        <div className = "line"></div>
      </div>
      <Link to="/signup"><button className="btns" >Do not have any Account?</button></Link>
  </form>
 
      </div> 
  );
}