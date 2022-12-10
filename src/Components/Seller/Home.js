import React,{Component, useEffect} from "react";
import { Link , useNavigate} from "react-router-dom";

import Head from './Head';

const Home = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    var seller = localStorage.getItem('seller');
        if(!seller){
            navigate('/login');
        }
  },[]);

  return (
    <div className="App">
      
        <p>
          Seller Homepage
        </p>
            Current Available Bids:
            <br/>
            Orders to Deliver: 
            <br />
            Pending Bids:

    </div>
  );
}

export default Home;
