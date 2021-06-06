import './PremierPage.css';
import Item from './Item';
import {ItemData} from './ItemData';

const PremierPage = () => {
    const itemDatas = ItemData;
    let cnt = 0;

    return (
        <>
            <div className="premier_title" >
                <div className="premier_title_text_box">
                    <h1>PREMIER LEAGUE</h1>
                    <p>
                        REP1ER's PREMIER LEAGUE<br />
                    </p>
                </div>
            </div>

            <div className = "premier_grid">
                {itemDatas[0].map((premierDatas) => <Item
                    key = {cnt++} 
                    _id = {premierDatas._id}
                    name = {premierDatas.name}
                    price = {premierDatas.price}
                    img = {premierDatas.img}
                    detail = {premierDatas.details}
                    />)}
            </div>
        </>
    )
};

export default PremierPage;