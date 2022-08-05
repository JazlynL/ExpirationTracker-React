import React from 'react';
import './Buttonstyle.css'
import ExampleNav from '../NavBar/ExampleNav'



const STYLES =[
    'btn--primary',
    'btn--outline'
]

const SIZES =[
    'btn--meduim',
    'btn--large'
]

export const ButtonProp=({
    children,
    type,
    onClick,
    buttonSize,
    buttonStyle

})=>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize :  SIZES[0];

return(
    <button className ={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick ={onClick} type ={type} 
    >{children}
    </button>
)
}

 