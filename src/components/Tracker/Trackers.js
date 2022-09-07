import axios from 'axios';
import React,{useState,useEffect,useContext, Fragment} from 'react';
import Container  from '../common/Container';
import { AuthContext } from '../Providers/AuthProvider';
import  Tracker from "./Tracker"

const Trackers = () => {
     
      const[trackers,setTrackers] = useState([]);
      
      // we can create a state called active produce, this one iwll just take the name of the produce selected
      // create a end point in ur backend.
     const [activeProduce, SetActiveProduce] = useState([false])
      
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
        return(trackers.map((tracker)=>{
            return(<Tracker tracker ={tracker}/>)
        }))}

    //     return Array.from(produce).map((tracker) => {
    //     return (  <Tracker  tracker = {tracker}  />
        
    //    )})}
   // have the details display....

   // create a use effect to render , and grab new data from the server 
    const displayDetails=()=>{
        return 
    }

  

   return(
    <Container>
    

            
            <div style={{flexDirection:'column'}}>
            <h1 style ={{ color:"thistle"}}>Your Produce Inventory  </h1>

                {loading ? (<p>Loading...</p>): 
                displayTrackers()
                }
            
            </div>
           
           
     
   
        
        {/* create a nested div tag here, first div tag will be the flex row, 
        first child div  contains the display trackers, will be the flex two flex direction  column 
        second child div, conatins the display details aka the produce properties,
         will be flex 1 and flex direction column
        */ }


       
        
    
      </Container>
  )
}

export default Trackers;