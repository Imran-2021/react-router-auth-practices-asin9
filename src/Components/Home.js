import React, { useEffect, useState } from 'react';
import Data  from './Fakedata.json'
import Home2 from './Home2';

const Home = () => {
    const [data,setData] =useState([])
    useEffect(()=>{
        setData(Data)
      },[])
    return (
        <div className='container gridd'>
            {
          data.map(data=><Home2 data={data}  key={data.vehicle}></Home2>)
        }
        
        </div>
    );
};

export default Home;