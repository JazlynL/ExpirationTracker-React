import React from 'react';
import Container  from '../common/Container';
import Form from '../common/Form'
import InlineInputContainer from '../common/InlineInputContainer';
import Button from '../common/Button'
import Input from '../common/Input'

const Produce =(props)=>{
    const handleChange =(e)=>{
        props.updateForm(e.target.id,e.target.value)
    }

    return(<Container>
       <Form onSubmit ={props.onSubmit} style ={{marginTop:'1em'}}>
        <InlineInputContainer>
            <Input
            name ="producename"
            id ="producename"
            placeholder ="Produce Name"
            value = {props.query.producename}
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
                required />
            </InlineInputContainer>
            <InlineInputContainer style ={{marginTop:'0.2em'}}>
                <Input
                name ="type"
                id="type"
                placeholder="Type Of Produce"
                value ={props.query.type}
                required/>
            </InlineInputContainer>
            <InlineInputContainer style ={{marginTop:'0.2em'}}>
                <Input
                name ="ezpirationdate"
                id="expirationdate"
                placeholder ="Expiration Date"
                value ={props.query.expirationdate}
                required
                />
            </InlineInputContainer>
            <Button>Submit</Button>
        </Form>
        </Container>
    )
}

export default Produce;