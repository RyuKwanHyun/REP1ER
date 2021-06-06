import React from 'react';
import "./MyAccount.css";
import { Link } from 'react-router-dom';

const MyAccount = () => {
    return (
        <>
            <div className="header2">

                <div className='header2-font'>
                    My Account
                <div className='myaccount'>
                        <div className='account-col'>
                            <Link to="/accountdashboard">
                                <button className="myaccountbtn" type="submit">Account Dashboard<br /><br />계정 게시판</button>
                            </Link>
                        </div>
                        <div className='account-col'>
                            <Link to="/accountinformation">
                                <button className="myaccountbtn" type="submit">Account Information<br /><br />계정 정보</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyAccount;