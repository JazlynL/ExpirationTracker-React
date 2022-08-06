import React from 'react'
import { Routes, Route} from 'react-router'
import  Container from '../common/Container'
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar'
import Self from'../Tracker/Self'
import Trackers from '../Tracker/Trackers'
import ExampleNav from '../NavBar/ExampleNav'
import Login from '../Auth/Login'
import UploadProduce from '../Tracker/UploadProduce'


const AppRouter =()=>{
   return(
        <Container>
          <ExampleNav/>
          
            
        
       
        <Routes>
            <Route path ="/" element = {<Home/>}/>
            <Route path ="/profile" element ={<Self/>}/>
            <Route path ="/trackers" element ={<Trackers/>}/>
            <Route path ="/uploadproduce" element = {<UploadProduce/>}/>
            <Route path ="/login" element= {<Login/>}/>
        </Routes>
    </Container>)
}

export default AppRouter;