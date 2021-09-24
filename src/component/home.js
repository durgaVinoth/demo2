import React from 'react';
import Navbar from './navbar';

const Home = ()=>{
    return<div className="banner">
        <Navbar/>
        <div className="banner_content text-center">
            <div className="container">
                <div className="banner_text">
                     
                <h1><b>Decentralized, Community-backend<br/> IDO Platform for Binance smart<br/>Chain(BSC)Project.</b></h1>
                <p> A Bright.Unique and Engaging IDO platform to empower the <br/>
                most innovative crypto projects by leveraging the power of<br/>community.</p>
                 <div className="banner_btn">
                     <a href="/" className="btn btn-one btn-sm"> Get App</a>
                     <a href="/" className="btn btn-two"> Subscribe to upcoming pools </a>
            </div>
                 </div>
            </div>
        </div>
      
    </div>
}



export default Home;