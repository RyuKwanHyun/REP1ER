import React, { useState } from "react";
import "./AccountInformation.css";
import {Link} from 'react-router-dom';

function AccountInformation() {

  return (
    <>
      <div className="accountinformation">
        <div className="account_background">
          <div className="account_wrapper">
            <div className="acc-buttons">
            <h1>Account Information</h1>     
            </div>
            <div className="acc-group">
                <AccountInformationForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AccountInformationForm() {
  return (
    <React.Fragment>
      <label for="id">First Name</label>
      <input type="text" id="First Name" />
      <label for="id">Last Name</label>
      <input type="text" id="Last Name" />
      <label for="id">Email Address</label>
      <input type="text" id="Email Address" />
      <label for="id">Current Password</label>
      <input type="text" id="Current Password" />
      <label for="id">New Password</label>
      <input type="text" id="New Password" />
      <label for="id">Confirm New Password</label>
      <input type="text" id="Confirm New Password" />
      <input type="submit" value="submit" className="acc_submit" />
      
        <Link to ="/myaccount">
            <input type="submit" value="back" className="back" />
        </Link>
      
    </React.Fragment>
  );
}

export default AccountInformation;