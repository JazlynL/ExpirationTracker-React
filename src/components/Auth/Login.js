import axios, { Axios } from "axios";
import React,{useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import Container from "../common/Container";
import LoginForm from "./LoginForm";
import { AuthContext } from "../Providers/AuthProvider";


const Login = ()=>{

    const[query,setQuery]=useState({
        id:"",
        password:"",
    })
   
    const [auth,setAuth] = useContext(AuthContext )
    const navigate = useNavigate();
     
    console.log(auth);
    

    const updateForm = (field,value)=>{
       
        setQuery({
            ...query,
            [field]:value
        })
    }
  const onSubmit = async () =>
{
    const data =query;
    try{
        const response = await axios.get(`http://localhost:8080/api/tracker/${query.id}`)
        alert(`hello there ${response.data.name}`)
        setAuth({id: response.data.id, name:response.data.name})
        navigate('/')
    }catch(error){
        console.error(error.response ? error.response.data : error.message)
    }
}    
return(
    <Container>
        <LoginForm onSubmit = {onSubmit} query = {query} updateForm ={updateForm}/>
    </Container>)
}



export default Login;