import React from 'react';
import PopUp from './Popup'
import { useState } from 'react';

const BorderCard = (props) => {

  const [buttonPopup,setButtonPopup] = useState(false)

  return (
    <div
      style={{...styles.card, ...props.style}}
      onClick={props.onClick}>
      <PopUp trigger ={buttonPopup} setTrigger={setButtonPopup} tracker ={props.tracker}>
       
      </PopUp>
      {props.children}
      <button onClick={()=> setButtonPopup(true)}>open</button>
    </div>
  )

}

const styles = {
  card: {
    border: "1px solid #171717",
    borderRadius: 5,
    margin: '10px',
    padding: '10px',
    width: "80%",
    maxWidth: 500,
    backgroundColor: "lavender",
    boxShadow: '1px 1px 20px rgba(91, 91, 91, 0.5)'
  }
}

export default BorderCard;