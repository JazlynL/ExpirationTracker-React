import React from 'react'
import Container from '../common/Container'
import Splash from '../common/Splash'
import grocery from '../Assets/Grocery.jpg'



const Home = () =>{
return (
    <Container>
        <Splash  image ={grocery} style ={{color : '#B22222'}}>
           
          <h1 style ={{textShadow: '1px 1px black' }} ></h1>
       
           <div style ={{display:"flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin:100}}>
            <h1 >Welcome to Expiration Tracker</h1>
            </div>
            <h2 style = {{textShadow: '1px 1px black',
          display:"flex",
          justifyContent: "center",
          alignItems: "center"}}>Keeping your fridge healthy of rotten produce</h2> </Splash>
    </Container>
)

}
export default Home; 