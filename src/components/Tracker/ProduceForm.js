import React, { Fragment } from 'react';
import Container  from '../common/Container';
import Form from '../common/Form'
import InlineInputContainer from '../common/InlineInputContainer';
import Button from '../common/Button'
import Input from '../common/Input'
import CalenderDate from '../common/CalenderDate'

const Produce =(props)=>{
    const handleChange =(e)=>{
        props.updateForm(e.target.id,e.target.value)
    }

    return(
    <Container>
       <Form onSubmit ={props.onSubmit} style ={{marginTop:'1em'}}>
        <InlineInputContainer>
            <Input
            name ="name"
            id ="name"
            placeholder ="Produce Name"
            value = {props.query.name}
            onChange ={handleChange}
            required
            />
            </InlineInputContainer>
            <InlineInputContainer style ={{marginTop:'0.2em'}}>
                <Input
                name = "quantity"
                id ="quantity"
                placeholder = "Quantity"
                value = {props.query.quantity}
                onChange ={handleChange}
                type ="number"
                required />
            </InlineInputContainer>
            <InlineInputContainer style ={{marginTop:'0.2em'}}>
                <Input
                name ="type"
                id="type"
                placeholder="Type Of Produce"
                value ={props.query.type}
                onChange ={handleChange}
                required/>
            </InlineInputContainer>
            <InlineInputContainer style ={{marginTop:'0.2em'}}>
                <Input
                name ="expirationDate"
                id="expirationDate"
                placeholder ="Expiration Date"
                value ={props.query.expirationDate}
                onChange={handleChange}
                required
                disabled
                />
            </InlineInputContainer>
             <CalenderDate updateForm ={props.updateForm}  style ={{
                   
                      justifyContent: "center",
                      alignItems: "center",
                      width:50}}/>
            <Button  disabled ={props.submitting}>Submit</Button>
            </Form>
           
       

        
      
        </Container>


    )
    
}

export default Produce;