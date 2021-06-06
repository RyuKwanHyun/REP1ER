import { Divider } from 'antd';
import React from 'react';
import './SellShirts.css';
import {Link} from 'react-router-dom';

const SellShirts = () => {
    return (

        <div className="sell_head">

            <div className="sell_text-box">
                Sell Football Shirts(셔츠 판매)
            </div>

            <div className="sell_text-box2">
                We don't just sell shirts we also buy them so if you want to turn your old shirts into $$$'s please e-mail us what you have for us to consider.
            </div>

            <div className="sell_text-box3">
                (셔츠만 판매하는 것이 아니라 구입도 할 수 있으니, 오래된 셔츠를 $$$로 바꾸고 싶으시면 저희에게 고려해야 할 사항을 이메일로 보내 주십시오.)   :)
            </div>

            <div className="sell_text-box4">
                Name <br />
                <input className="sell_text-text" type='text'></input>
            </div>

            <div className="sell_text-box5">
                PhoneNumber <br />
                <input className="sell_text-text" type='text'></input>
            </div>

            <div className="sell_text-box6">
                E-mail Address <br />
                <input className="sell_text-text" type='text'></input>
            </div>

            <div className="sell_text-box7">
                 Brief description of items. <br />
                <input className="sell_text-text" type='text'></input>
            </div>
            
            <div className="sendmessage">
                <Link to ="/contactus">
                <button className="sell_btn" type="submit">SEND YOUR MESSAGE</button>
                </Link>
            </div>

            <div className='cancel'>
            <Link to= "/">
                <button className="sell_cancelBtn" type="reset">CANCEL</button>
                </Link>
            </div>
        </div>
    );
}

export default SellShirts;