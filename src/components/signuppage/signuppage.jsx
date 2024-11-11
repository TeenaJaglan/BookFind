import { Link, useNavigate } from 'react-router-dom';
import '../loginpage/loginpage.css';
import './signuppage.css'
import {useForm} from 'react-hook-form';
import signupUpdation from '../api/profileupdation';
import { useDispatch } from 'react-redux';
import { FcGoogle } from "react-icons/fc";
export default function SignupPage(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = function(data){
console.log(data);
signupUpdation(data,dispatch,navigate);
  }
  return (
    <div className="boxx">
      <form className = "main" onSubmit={handleSubmit(onSubmit)}>
      <p className = "heading" ><strong>SIGNUP</strong></p>
      <div className = "blocks">
        <p className="text">First Name*</p>
        <input  {...register("firstname",{required:true})} className ="inputbar" type="text"  placeholder="xyz@gmail.com" />
        {errors.firstname && <span className = "span">This field is required*</span>}
      </div>
      <div className = "blocks">
        <p className="text">Last Name*</p>
        <input  {...register("lastname",{required:true})} className ="inputbar" type="text"  placeholder="xyz@gmail.com" />
        {errors.lastname && <span className = "span">This field is required*</span>}
      </div>
      <div className = "blocks">
        <p className="text">Email Address*</p>
        <input  {...register("email",{required:true})} className ="inputbar" type="text"  placeholder="xyz@gmail.com" />
        {errors.email && <span className = "span">This field is required*</span>}
      </div>
      
      <div className = "blocks">
        <p className="text">Password*</p>
        <input  {...register("password",{required:true})} type="text" className ="inputbar" />
        {errors.password && <span className="span">This field is required*</span>}
      </div>
      <div className = "blocks">
        <p className="text">Confirm Password*</p>
        <input  {...register("confirmpassword",{required:true})} type="text" className ="inputbar" />
        {errors.confirmpassword && <span className = "span">This field is required*</span>}
      </div>
      <button id = "btn" className="btns m-top-[1.5rem]" onClick={()=>{console.log(register);}}>Create Account</button>
      <div className = "block1">
        <div className = "line"></div>
        <p className="or">OR</p>
        <div className = "line"></div>
      </div>
      <button className="btns">Signup with Google <FcGoogle  className="logo4"  /></button>
      <div className = "block1">
        <div className = "line"></div>
        <p className="or">OR</p>
        <div className = "line"></div>
      </div>
      <Link to="/login"><button className="btns" >Already Registered ?</button></Link>
  </form>
 
      </div> 
  );
}