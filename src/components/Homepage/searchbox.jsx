import './searchbox.css';
import items from '../../../public/searchmethods.jsx';
import {useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import searchSlice, {setkey,setvalue,setloading} from '../slice/searchSlice.jsx';
import searchapi from '../api/api';
export default function Searchbox(){
  //const []
  const dispatch = useDispatch();
  const {key,value,loading} = useSelector((state)=>state.search);
  async function setparameter (pair){
    try{
    console.log("entered search parameter is:",pair,pair.value,pair.key);
    dispatch(setkey(pair.key));
    
  }
    catch(err){
      console.log("error occured during slice updation ",err.message);
    }

  }
  return (<div className = "mainsearchbox">
    <div className="sea" 
    >Search By:</div>
{
  
  items.map((item,index)=>(<div key = {index} >
    <button className = {key==item.key?"searchbtn dynamicproperty":"searchbtn"} onClick={()=>{setparameter(item)}}>{item.value} </button>
  </div>))
}
  </div>)
}