import React,{Components, useEffect,useState} from "react";
import { Link , useNavigate} from "react-router-dom";
import './style.css';

const Head = () => {
    const [bid,setBid] = useState(0);
    const [status,setText] = useState("Login");
    const navigate = useNavigate();
    var seller = localStorage.getItem('seller');
    
    useEffect(()=>{
        
         localStorage.getItem('seller');
            if (seller){
                setText("Logout");
            }else{
                setText("Login");
            }
    },100);

    const logButton = ()=>{
        var seller = localStorage.getItem('seller');
            if (seller){
                navigate('/logout');
            }else{
                navigate('/login');
            }
    }

    function setLog(){
        if(seller){
            return <Link className="list button" to="/sellerlogout">Logout</Link> ;
        }
        else{
            return <Link className="list button" to="/login">Login</Link> ;
        }
    }

    return (
        <div className="sidenav">
            <Link className="list button" to="/">Home</Link>
            <Link className="list button" to="/posts">Posts</Link>
            <Link className="list button" to="/bids">Bids</Link>
            <Link className="list button" to="/profile">Profile</Link>
            <Link className="list button" to="/contact">Contact</Link>
            {setLog()}
            <label className="list center button text-green"><b>Current Bid:  {bid}</b></label>
            <label className="list right text-white button">Search
                <input className="list" type="text" value=""></input>
            </label>
        </div>
    );
}

export default Head;