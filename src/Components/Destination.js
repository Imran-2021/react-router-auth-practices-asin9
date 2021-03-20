import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Destination = () => {
    const [loggedUser]=useContext(UserContext);
    const style={
        float:'left',
        width:'30%',
        marginRight:'5%',
        marginLeft:'5%',
        marginTop:'10%'
    }
    return (
        <div>
            <div style={style}>
                    <div style={{margin:'5%',padding:'5%',textAlign:'justify',color:'blue',}}>
                        <h4>Welcome,{loggedUser.name ||loggedUser.displayName}</h4>
                        <p><Link className="btn btn-link" to="/home"> <h4 style={{color:'red'}}>chose vehicle?</h4> </Link> </p>

                    </div>
                    <div style={{marginLeft:"10%"}}>
                        <h4>Pick From</h4>
                         <input type="text" name="" id=""placeholder="Mirpur-1"/> 
                        <h4>Pick To</h4>
                        <input type="text" name="" id=""placeholder="Dhanmondi"/> <br/> <br/>
                        <button className="btn btn-success">Search here</button>
                    </div>
            </div>
            <div>
             <p> <iframe style={{marginTop:'5%'}} src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29210.727756862325!2d90.33986873185135!3d23.77086956305868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka!3m2!1d23.795603699999997!2d90.3536548!4m5!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!3m2!1d23.746149499999998!2d90.3742307!5e0!3m2!1sen!2sbd!4v1616242392156!5m2!1sen!2sbd" width="800" height="550" allowfullscreen="" loading="lazy"title="this is map"></iframe></p>
            </div>
        
        </div>
    );
};

export default Destination;