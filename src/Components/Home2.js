import React from 'react';
import { Link, } from 'react-router-dom';
import Destination from './Destination';
import './Home2.css'
const Home2 = (props) => {

    const {vehicle,ticketCost,capacity,ImgURL}=props.data
const data= props.data
    
    
    return (
        <div>
            
            <div className="display-design">

            <Link  className='btn btn-primary' to={`/destination/${vehicle}`}>
                <img src={ImgURL} alt=""/>
                <h1>{vehicle}</h1>
            </Link>
            <div style={{display:"none"}}>
                {
                    <Destination details={data}/>
                }
            </div>
            
            </div>
        </div>
    );
};

export default Home2;