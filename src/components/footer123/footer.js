import './footer.css'
import { Link } from 'react-router-dom';

import * as FaIcons from 'react-icons/fa';

function MainFooter() {

    return (

        <div className="mainfooter">
            <div className ="footer_row">
                <div className="footer_logo">
            
                REP1ER
                </div>
                <div className="footer_text">
                    <div className="footer_text1">
                    COMPANY : REP1ER  CEO : HanSeokKim, KwanHyunRyu  Help : 010 - 4856 - 1382, 010 - 
                    </div>
                    <div className="footer_text2">
                        COMPANY address : 27, Gyeongdongdaehak-ro, Yangju-si, Gyeonggi-do, Republic of Korea
                    </div>
                    <div className="footer_text3">
                        Personal Information Handling Manager : Kwan Hyun Ryu
                        E-mail address : sosto258@kakao.com
                    </div>

                    <div className="footer_text4">
                        Business license number : 000-00-00000
                    </div>
                    <div className="footer_text5">
                        Telecommunication sales business report number : 2021 - Gyeongdongdaehakro - 8012
                    </div>
                </div>
                <div className = "footer_link">
                    <div className = "footer_link1">
                    <Link to = "/contactus">
                        contactus
                    </Link>
                    </div>
                    
                    <div className = "footer_link2">
                    <Link to = "/aboutus">
                        aboutus
                    </Link>
                    </div>
                    
                    <div className = "footer_link3">
                    <Link to = "/codeview">
                        codeview
                    </Link>
                    </div>
                    
                </div>
            </div>
            <div className="footer_copyright">
                        Copyright 2021.REP1ER.All rights reserved.
                    
            </div>
            <div className = "footer_icon">
                    <a className = "footer_icons" href = "https://github.com/RyuKwanHyun/HJK/tree/main">
                    <FaIcons.FaGithubSquare />
                    </a>
                    <a className = "footer_icons" href = "https://www.facebook.com">
                        <FaIcons.FaFacebook />
                    </a>
                    <a className = "footer_icons" href = "https://www.instagram.com">
                        <FaIcons.FaInstagram />
                    </a>
            </div>
        </div>
        
    );

}
export default MainFooter;