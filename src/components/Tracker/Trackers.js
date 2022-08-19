import axios from 'axios';
import React,{useState,useEffect,useContext, Fragment} from 'react';
import Container  from '../common/Container';
import { AuthContext } from '../Providers/AuthProvider';
import  Tracker from "./Tracker"

const Trackers = () => {
     
      const[trackers,setTrackers] = useState([]);
      
      const [produce,SetProduce] =  useState(new Set());
     
      const[loading,setLoading] = useState(true);
      const[auth] =useContext(AuthContext);

  

    useEffect(()=>{
    const getTrackers = async ()=>{
        
        //wrapper class
        const id = Number(auth.id)

        try{
            
            const trackerResponse = await axios.get(`http://localhost:8080/api/tracker/${id}`)
           
           
            const response = await axios.get(`http://localhost:8080/api/tracker/`)
           

            console.log(trackerResponse.data.produce);
          
            
            
            setTrackers(trackerResponse.data.produce);

            const setOfProduce = new Set();
            
            for(let i = 0 ; i < trackerResponse.data.produce.length;i++ ){
                setOfProduce.add(trackerResponse.data.produce[i].name)

            }
            SetProduce(setOfProduce);

            setLoading(false);
           
           
            
        }catch(error){
            console.error(error.response ?
                error.response.data : error.message)
                
            }
        }
        getTrackers();
        
    },[])   
    
    const displayTrackers =()=>{
        return Array.from(produce).map((tracker)=> {
        return (  <Tracker  tracker = {tracker}  />
        
       

        )
        
    })}

  

   return(
    <Container>


        <h1 style ={{ color:"darkred"}}>Your Produce Inventory
        </h1>
          {loading ? (<p>Loading...</p>): 
         displayTrackers()
        }
         
        
      </Container>
  )
}

export default Trackers;