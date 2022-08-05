import axios from 'axios';
import React,{useState,useEffect,useContext, Fragment} from 'react';
import Container  from '../common/Container';
import { AuthContext } from '../Providers/AuthProvider';
import  Tracker from "./Tracker"

const Trackers = () => {
      const[trackers,setTrackers] = useState([]);
      const[loading,setLoading] = useState(true);
      const[auth] =useContext(AuthContext);

    useEffect(()=>{
    const getTrackers = async ()=>{
        try{
            const trackerResponse = await axios.get(`http://localhost:8080/api/tracker/${auth.id}`)
            const response = await axios.get(`http://localhost:8080/api/tracker/`)
            console.log(response.data);

        }catch(error){
            console.error(error.response ?
                 error.response.data : error.message)
    
        }
    }
    getTrackers();
    },[])    

   return(
    <Container>


        <h1 style ={{ color:"darkred"}}>Trackers</h1>
          {loading ? (<p>Loading...</p>): 
        (  <Fragment>
            <Tracker/>
            <Tracker/>
          </Fragment>
        )}
         
        
      </Container>
  )
}

export default Trackers;