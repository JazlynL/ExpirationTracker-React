        import React ,{Fragment,useContext} from 'react'
         import { AuthContext } from "../Providers/AuthProvider";
         import NavButton from './NavButton';
        import {ExampleItems, menuItems} from '../NavBar/ExampleItems'
        import { Navigate, useNavigate } from 'react-router';
        
        import { LoggedInItems } from './LoggedinMenu';
         import { FaShoppingBag } from "react-icons/fa";
        
      
        import './NavBar.css'


        const NavBar =(props) =>{
            const [auth] =useContext(AuthContext);
            return(
                <Fragment>
                <div style ={{
                      background: "linear-gradient(150deg,rgb(255, 179, 179),rgb(73,63,252,1) 100%)",
                      fontSize: "15px",
                      height: "70px",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                }}>
                <h1 
                 style ={ {
                color:"darkred",flexDirection: 'row',
                background : 'transparent',
                alignItems:"center",
                margin : "30px",
                cursor:"pointer"}}
               >Expiration Tracker
               <FaShoppingBag ></FaShoppingBag>
               </h1> 
              
                
                 {auth.id ? (<p style={{color: "whitesmoke"}}>Welcome , {auth.name}</p>): null}
               
                    <i className = 'fas-fa-bars'></i>
                     <ul className ='nav-menu'/>
                           <NavButton to ="/login" label ="Login"/>
                            <NavButton to ="/" label ="Home"/>
                            <NavButton to ="/trackers" label ="Trackers"/>
                            <NavButton to ="/profile" label ="Profile"/>
                           
                 
                   

           </div>
          </Fragment>
            )}
        

                
        export default NavBar;
       

        // class NavBar extends Component{
        
        // //
        // constructor(props){
        //     super(props)
        // }

       
        // state={clicked : false }
        // handleClick =()=>{
        //     this.setState({clicked : !this.state.clicked})

        // }
        
       
        // render(){
        // return(
        //     <nav className ="NavbarItems">
        //      <h1 className = "navbar-logo" 
        //     >Expiration Tracker
        //     <FaShoppingBag ></FaShoppingBag>
           
        //      </h1> 
             
        //     <div className = "menu-icon" onClick={this.handleClick}>
        //     <i className ={this.state.clicked ? 'fas-fa-times' : 'fas-fa-bars'} ></i>
        //     </div>
        //     <ul className ={this.state.clicked ? 'nav-active-menu':'nav-menu'}>

              

        //         {

        //         menuItems.map((item, index)=>{
        //             return(
        //                 <li key ={index}>
        //                 <a className ={item.cName} href = {item.url}>{item.title}</a>
        //                 </li>
        //             )
                
        //         })
        //   }
                
                    

                
        //     </ul>
           
         
           
        //     </nav>

        // )
        // }
        // }
        // export default NavBar