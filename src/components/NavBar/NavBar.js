import React , {Fragment,useContext} from "react";
import { AuthContext } from "../Providers/AuthProvider";
import NavButton from './NavButton'

const NavBar = (props) => {
    const [auth] = useContext(AuthContext);
    return ( <Fragment>
        <div style = {{
            backgroundColor: '#238C72',
            position: 'fixed',
            width: '100%',
            zIndex: 9999,
            top: 0,
            left: 0,
            height: '75px',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}> <h1
        style ={{
            fontFamily: "monospace",
            fontWeight: 'bolder',
            fontSize :'2.5em',
            margin: '0 20px',
            flexDirection: 'row',
            background : 'transparent',
            userSelect: " none",
            alignItems: 'center',
            
        }}>School Management</h1>
        <div style = {{
            margin: '0 20px',
            flexDirection: 'row',
            backgroud: 'transparent',
            userSelect: 'none',
            alignItems: 'center',
        }}>
            {auth.id ? 
            (<p>hi {auth.name}</p>) 
            :null}
            <NavButton to ="/" label = "Home"/>
             {auth.id ?(
             <Fragment>
            <NavButton to = "/profile" label = "Profile"/>
            <NavButton to = "/students" label = "StudentCenter"/>
            <NavButton to = "/payfees" label = "GiveusurParentsMoney"/>
            </Fragment>):( 
            <NavButton to  = "/login" label  = "Login"/>)}
            
        </div>
        </div>
    <div style = {{height: '75px'}}/>
    </Fragment>)
}
export default NavBar;