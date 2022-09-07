import{render} from "react-dom";
import  React ,{ useState } from "react";
import Calender from "react-calendar";
import './Calendar.css'
import moment from "moment";
import { format, startOfToday,eachDayOfInterval,startOfMonth,endOfMonth } from 'date-fns'
import Container from "./Container";



function ReactCalender(props){
    const[date,setDate] = useState(new Date());
    //on
   
   

   
    const handleChange =(todaysDate)=>{

      // we used props .updateForm, to inherit the data from my produce form 
    props.updateForm("expirationDate", moment(todaysDate).format("MM-DD-yyyy"))
    
    setDate(todaysDate)
   
    }
    
   
   // let currentDate = startOfToday(date)
  // console.log(daysOfMonth);
    
    
  
    // const displayDays =()=>{
    
    // return daysOfMonth.map((day)=>{
    // return(
    //   <Container></Container>
        
    //     )
    //   })}
    
   
    return(
        
      <div className='app'>
      <h1 className='text-center'>Expiration Date</h1>
      <div className='calendar-container'>
      <Calender 
      style ={{display:"block"}} 
      onChange ={handleChange}
      defaultValue ={date} 
      minDate={date}
      
      // tileDisabled = { 
      //    ({date,view})=>( view === 'month' && date.getDay() === date-1)
      //   }
          /> 
      {/* //value ={date}  */}
     
        </div>
        <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
       {date.toDateString()} 
      </p>
    </div>
        
    )

}

export default ReactCalender;