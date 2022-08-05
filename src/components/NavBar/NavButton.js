import { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const NavButton =(props) =>{
    const [hover, setHover] = useState(false);
 return (
     <div className = "nav-links:hover">
     <NavLink  to = {props.to}
     style = {{
         
         color:"#8B0000",
         textDecoration: "none",
         padding: "0.5rem 1rem",
         textDecoration:'none',
         fontsize: ' 2.80em',
         color: hover ? '#DC143C' : '#DC143C',
         transition: "all 0.2s ease-in-out" ,
         borderRadius: "4px",
         fontWeight: 600,
         textShadow: ' 1px 1 px #2fbe9b',
         textalign: 'center',
         whiteSpace:'nowrap',
         margin : '0 10px',
         borderBlock: '4px',
         opacity: hover ? "60%": "100%"
     }}
     onMouseEnter = {() => setHover(true)}
     onMouseLeave = {() => setHover(false)}
     >  
     {props.label}
     
         

     </NavLink>
</div>
 )   
}
export default NavButton;