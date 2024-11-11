import { FaArrowRight } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import './card.css';
export default function Button(){
  return (
<div className = "buttonbox">
  <button className = "button1"> Buy Now
  <FaArrowRight className="logo4" />
   </button> 
    <button className = "button2">Add to Cart
    <FaShoppingCart className="logo4"  /></button>
  </div>
  )
}