import React,{Component,useEffect} from "react";
import { Link , useNavigate} from "react-router-dom";
import Head from './Head';

const Contact = () => {
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
          Welcome to Contact
        </p>
          
        
    </div>
  );
}

export default Contact;
