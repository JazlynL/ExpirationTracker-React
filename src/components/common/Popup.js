import React from 'react';
import {useState} from 'react';



const PopUp =(props)=>{
    const [buttonPopup, setButtonPopup] = useState(false);

    return (props.trigger)
?(    <div style ={{position:'fixed',top:'0',left:'0',width:'100%',height:'100vh', background:'rgba(0,0,0,0.2)',
    display:'flex', justifyContent:'center',alignItems:'center'}}>
        <div style = {{ position:'inner',padding:'32px',width:'100%', maxWidth:'640px', background:"white"}}>
            <h1>expiration date: {props.tracker.expirationDate}</h1>
            <h1>quantity: {props.tracker.quantity}</h1>
            {console.log(props.tracker)}
            <button style={{position:'absolute',top:'16px', right:'16px'}} onClick={()=>props.setTrigger(false)}>close

            </button>{props.expirationDate}
        </div>
    </div>

    ): "" ;

}
export default PopUp;