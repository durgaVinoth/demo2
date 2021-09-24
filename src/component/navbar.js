import React from 'react';

const Navbar = ()=>{
    return<div className="navbar">
       <div className="navbar_text">
            <div className="logo">
          <img src="/image/1.png" alt="1" />
        </div>
            <ul className="navbar_ul">
                <li><a href="/">Smart Stake</a> </li>
                <li><a href="/">Raffle</a></li>
                <li><a href="/">Farm</a> </li>
                <li> <a href="/">Pool</a></li>
                <li> <a href="/">Feature Project</a></li>
                <li> <a href="/">Milestone</a></li>
                <li> <a href="/">Link And Contact</a></li>
            </ul>
       </div>
    </div>
}



export default Navbar;