 
import Cards from '../components/home/Cards'
import { MdAddCircle } from "react-icons/md";
import InputData from '../components/home/InputData';
import React  from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';

const Alltasks = () => {
  const[showInputDiv , setShowInputDiv] = useState(false);
  const [Data , setData]= useState();
  const[updatedData, setUpdatedData] = useState({
    id:"",
    title:"",
    desc:""
  });

  const headers = {
    id: localStorage.getItem("id"),
    authrization: localStorage.getItem("token")
  }

 useEffect(()=>{

  const fetch = async()=>{
    const response = await axios.get("http://localhost:1000/api/v1/gettasks" ,{headers} );
    
      setData(response.data.alltasks);
  }

  if(localStorage.getItem("id") && localStorage.getItem("token")){  // check this otherwise it render an error for some secona
    fetch();
  }
  

 });


 

 

 

 


  return (

    <>
     <div>

      <div className='w-full flex justify-end px-4 py-2'> 

        <button onClick={()=>setShowInputDiv(true)}>
        <MdAddCircle className='text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300'/>
        </button>

        
      </div>
         
         {
          Data &&(
            <Cards addTask={"true"} setShowInputDiv={setShowInputDiv} data={Data.tasks} setUpdatedData={setUpdatedData} />
          )
         }
            
           

    </div>

    {
      showInputDiv ?  <InputData setShowInputDiv={setShowInputDiv} updatedData={updatedData} setUpdatedData={setUpdatedData}/>:<></>
    }

   
    
    </>


   
  )
}

export default Alltasks