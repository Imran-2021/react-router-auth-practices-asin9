import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Profile = () => {
    const [loggedUser]=useContext(UserContext);
    return (
        <div style={{margin:'5%',marginTop:'0px',padding:'5%',textAlign:'center',color:'blue'}}>
           <img style={{width:'80%',height:'400px'}} src="https://i.imgur.com/BtYUvEX.png" alt=""/>
            <h4>hello ,<span style={{color:'red'}}>{loggedUser.name|| loggedUser.displayName}</span></h4>
            <h2>Enjoy the jorney !!</h2>
           <br/>
            
        </div>
    );
};

export default Profile;