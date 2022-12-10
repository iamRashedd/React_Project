import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Seller/Home';
import Head from './Components/Seller/Head';
import Foot from './Components/Seller/Foot';
import Profile from './Components/Seller/Profile';
import Posts from './Components/Seller/Posts';
import Login from './Components/Seller/Login';
import Logout from './Components/Seller/Logout';
import Contact from './Components/Seller/Contact';
import PostDetails from './Components/Seller/PostDetails';
import Register from './Components/Seller/Register';


import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Head />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/posts' element={<Posts/>} />
        <Route path='/postdetails/:id' element={<PostDetails/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/sellerlogout' element={<Logout/>} />
        <Route path='/sellerregister' element={<Register/>} />
        
        
      </Routes>
      <Foot />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
