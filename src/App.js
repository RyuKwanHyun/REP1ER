import React, { useState } from 'react';
import Navbar from './components/header/Navbar';
import './App.css';
import Home from './components/header/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SellShirts from './components/header/SellShirts';
import MyAccount from './components/header/MyAccount';
import AccountInformation from './components/header/AccountInformation';
import AccountDashboard from './components/header/AccountDashboard';
import ContactUs from './components/header/ContactUs';
import Login from './components/header/Login';
import Register from './components/header/Register';
import Cart from './components/sidebar/Cart';
import AboutUs from './components/footer123/AboutUs';
import CodeView from './components/footer123/CodeView';

import PremierPage from './components/sidebar/PremierPage';
import LaligaPage from './components/sidebar/LaligaPage';
import BundesrigaPage from './components/sidebar/BundesrigaPage';
import SeriaPage from './components/sidebar/SeriaPage';
import Ligue1Page from './components/sidebar/Ligue1Page';

import Europe from './components/sidebar/Europe';
import Asia from './components/sidebar/Asia';
import Africa from './components/sidebar/Africa';
import America from './components/sidebar/America';
import Oceania from './components/sidebar/Oceania';

import Matchworn from './components/sidebar/Matchworn';
import Legend from './components/sidebar/Legend';
import ItemDetail from './components/sidebar/ItemDetail';

import Payment from './Payment';
import PaymentResult from './PaymentResult';
import Certification from './Certification';
import CertificationResult from './CertificationResult';
import paymentHome from './payment_page';
import MainFooter from './components/footer123/footer';

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contactus' component={ContactUs} />
        <Route path='/myaccount' component={MyAccount} />
        <Route path='/Login' component={Login} />
        <Route path='/Register' component={Register} />
        <Route path='/sellShirts' component={SellShirts} />
        {/* <Route path='/accountinformation' component={AccountInformation} />
        <Route path='/accountdashboard' component={AccountDashboard} /> */}

        <Route path='/premierleague' component={PremierPage} />
        <Route path='/laliga' component={LaligaPage} />
        <Route path='/seria' component={SeriaPage} />
        <Route path='/bundesriga' component={BundesrigaPage} />
        <Route path='/ligue1' component={Ligue1Page} />

        <Route path='/europe' component={Europe} />
        <Route path='/asia' component={Asia} />
        <Route path='/africa' component={Africa} />
        <Route path='/america' component={America} />
        <Route path='/oceania' component={Oceania} />

        <Route path='/matchworn' component={Matchworn} />
        <Route path='/legend' component={Legend} />
        <Route path='/cart' component={Cart} />
        <Route path='/contactus' component={ContactUs} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/codeview' component={CodeView} />

        <Route path='/itemdetail/:id' component={ItemDetail} />

        <Route exact path="/payment" component={Payment} />
        <Route exact path="/payment/result" component={PaymentResult} />
        <Route exact path="/certification" component={Certification} />
        <Route exact path="/certification/result" component={CertificationResult} />
        {/* <Route exact path="/paymenthome" component={paymentHome} /> */}
      </Switch>
      
      <MainFooter />
      {/* <Footer1 /> */}
    </Router>
  );
}

export default App;
