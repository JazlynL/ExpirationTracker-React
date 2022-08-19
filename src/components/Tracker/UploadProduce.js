import axios from 'axios'
import React, {useState,useContext} from 'react'
import Container from '../common/Container'
import { AuthContext } from '../Providers/AuthProvider'
import ProduceForm from './ProduceForm'



const UploadProduce = () =>{
    const [query, setQuery] = useState({
        name:"",
        quantity:"",
        type:"",
        expirationDate:""

    });
    const[submitting,setSubmitting] = useState(false);
    const[message,setMessage]= useState("");
    const [auth] = useContext(AuthContext)

    const updateForm =(field,value)=>{
        setQuery({
           ...query,
           [field]: value 
        })
    }

    const onSubmit = async ()=>{
        setMessage("")
        setSubmitting(true)


        const data = query
       

        for(let i in data){
            if(typeof data[i] === 'string'){
                data.name = data.name[0].toUpperCase() + data.name.substring(1);
            }
        }
       
                      
        try{
            const response = await axios.post(`http://localhost:8080/api/produce/${auth.id}`, data)
            
            console.log(response.data);
      
            alert(`${response.data.name} was added`);

       


        
    }catch(error){
        
       
        setSubmitting(false)
        console.error(error.response ? error.response.data : error.message)
    }
    setQuery({ 
     name:"",
    quantity:"",
    type:"",
    expirationDate:""})
    }


    return (
        <Container>
            <h1>Upload Your Produce.</h1>
            {message ? (<p>{message}</p>): null}
            <ProduceForm
           query ={query}  onSubmit ={onSubmit} updateForm ={updateForm}  submitting ={submitting}/>
        </Container>
    )
}
export default UploadProduce;