import React, { Fragment }  from "react";
import Container  from "../common/Container";
import Form from '../common/Form';
import InlineInputContainer from '../common/InlineInputContainer';
import Button from '../common/Button'
import Input from "../common/Input";

const LoginForm =(props)=> {
    const handleChange =
    (e) =>{
        props.updateForm(e.target.id,e.target.value)
    }
    return( <Container>
    
        <Form onSubmit = {props.onSubmit}>
            <InlineInputContainer>
                <Input
                name ="id"
                id ="id"
                placeholder ="Tracker id"
                 value = {props.query.id}
                 onChange ={handleChange}
                 required 
                 />
                </InlineInputContainer>
               <InlineInputContainer><Input
               name ="password"
               id ="password"
               placeholder ="Password"
               value ={props.query.password}
               onChange ={handleChange}
               required
               type ="password"
               />
               </InlineInputContainer>
               <Button>ENTER</Button>
                </Form>
                
    
    
    </Container>
    )
}

export default LoginForm;