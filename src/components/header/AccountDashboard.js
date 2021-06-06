import React from 'react';
import './AccountDashboard.css';
import { Link } from 'react-router-dom';

const AcccountDashboard = () => {
    return (    
        <div className='acccountdashboard'>
            <h1>ACCOUNT DASHBOARD</h1>
            <div><h2>Hi, Bro!!!<p>This is where you can check your information.</p></h2></div>
            <br /> <br /><br /> <br /><br />
            <div classname ='dashboard_recentoders'>
                <div className = 'dashboard_recentorders_title'>
                    <h1>RECENT ORDERS(최근 주문)</h1>
                </div>
            </div>
            
            <div className='dashboard_viewall'>
                <button className = "dashboardbtn" type = "submit">VIEW ALL</button>
            </div>

            <div className='dashboard_oders'>
                <p><input type='text'></input></p>
                <p><input type='text'></input></p>
                <p><input type='text'></input></p>
                <p><input type='text'></input></p>
            </div>

            <div className='dashboard_Back'>
                <Link to ="/myaccount">
                <button className = "dashboardbtn" type = "submit">BACK</button>
                </Link>
            </div>
        </div>
        );
}

export default AcccountDashboard;