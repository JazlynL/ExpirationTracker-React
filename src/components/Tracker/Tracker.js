import React from 'react';
import BorderCard from '../common/BorderCard'


const Tracker = (props)=>
{
   

    return(
        <BorderCard tracker = {props.tracker}
        >
            
            <h1>{props.tracker.name}</h1>
         
       
        
        </BorderCard>
    )
}


export default Tracker;