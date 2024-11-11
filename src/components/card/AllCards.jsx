import {useSelector} from 'react-redux';
import Card from './card';
import {useEffect} from 'react';
import './AllCards.css'
function AllCards(){
  const {bookdata,specificdata} = useSelector((state)=>state.profile);
  const {loading} = useSelector((state)=>state.search);

  // useEffect(()=>{let a =[2,3];console.log("bookdata in homepage is:",bookdata,typeof bookdata,typeof a)},[bookdata]);
  return (<div className="all">
    {
      loading &&  <div className = " loader"></div>
    }
    {
      specificdata.length >0 ? (
        <div>
          {
            specificdata.map((data,index)=>(
              <div key ={index}><Card data = {data} /></div>
            ))
          }
          </div>
      ):(
      (bookdata)?<div ></div>:<div className="option">Sorry , But we could not find this book!</div>)
    }
  </div>);
}
export default AllCards;