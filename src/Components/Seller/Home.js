import React,{Component, useState, useEffect} from "react";
import { Link , useNavigate} from "react-router-dom";
import axiosConfig from "./axiosConfig";
import Head from './Head';

const Home = () => {
  const [bids,setBids] = useState(0);
  const [posts,setPosts] = useState(0);
  const [orders,setOrders] = useState(0);
  const navigate = useNavigate();

  useEffect(()=>{
    var seller = localStorage.getItem('seller');
        if(!seller){
            navigate('/login');
        }

        axiosConfig.get("/sellerdashboard/1")
        .then(resp=>{
            console.log(resp.data);
            setOrders(resp.data.orders);
            setPosts(resp.data.posts);
            setBids(resp.data.bids);
        }).catch(err=>{
            console.log(err);
        });
  },[]);

  return (
    <div className="App">
      
        <p>
          Seller Homepage
        </p>
            <strong>Current Available Bids: </strong>{bids}
            <br/>
            <strong>Orders to Deliver: </strong>{orders}
            <br />
            <strong>Available Posts: </strong>{posts}

    </div>
  );
}

export default Home;
