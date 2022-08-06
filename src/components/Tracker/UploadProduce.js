import React, {useState,useContext} from 'react'
import Container from '../common/Container'
import { AuthContext } from '../Providers/AuthProvider'
import ProduceForm from './ProduceForm'



const UploadProduce =()=>{
    const [query, setQuery] = useState({
        producename:"",
        quantity:"",
        type:"",
        expiraiondate:""

    });
    const[submitting,setSubmitting] = useState(false);
    const [auth] = useContext(AuthContext)

    const updateForm =(field,value)=>{
        setQuery({
           ...query,
           [field]: value 
        })
    }

    const onSubmit = async ()=>{
        try{
        console.log('Submit');
    }catch(error){
        console.error(error.re)
    }
    }


    return (
        <Container>
            <h1>Upload Your Produce.</h1>
            <ProduceForm
           onSubmit ={onSubmit} query ={query} updateForm ={updateForm} />
        </Container>
    )
}
export default UploadProduce;