import './BundesrigaPage.css';
import Item from './Item';
import {ItemData} from './ItemData';

const BundesrigaPage = () => {
    const itemDatas = ItemData;
    let cnt = 0;

    return (
        <>
            <div className="bundesriga_title" >
                <div className="bundesriga_title_text_box">
                    <h1>BUNDESRIGA LEAGUE</h1>
                    <p>
                        REP1ER's BUNDESRIGA LEAGUE<br />
                    </p>
                </div>
            </div>

            <div className = "bundesriga_grid">
                {itemDatas[3].map((bundesrigaDatas) => <Item
                    key = {cnt++} 
                    _id = {bundesrigaDatas._id}
                    name = {bundesrigaDatas.name}
                    price = {bundesrigaDatas.price}
                    img = {bundesrigaDatas.img}
                    detail = {bundesrigaDatas.details}
                    />)}
            </div>
        </>
    )
};

export default BundesrigaPage;