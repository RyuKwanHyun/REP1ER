import './LaligaPage.css';
import Item from './Item';
import {ItemData} from './ItemData';

const LaligaPage = () => {
    const itemDatas = ItemData;
    let cnt = 0;

    return (
        <>
            <div className="laliga_title" >
                <div className="laliga_title_text_box">
                    <h1> LA LIGA</h1>
                    <p>
                        REP1ER's LALIGA LEAGUE<br />
                    </p>
                </div>
            </div>

            <div className = "laliga_grid">
                {itemDatas[1].map((laligaDatas) => <Item
                    key = {cnt++} 
                    _id = {laligaDatas._id}
                    name = {laligaDatas.name}
                    price = {laligaDatas.price}
                    img = {laligaDatas.img}
                    detail = {laligaDatas.details}
                    />)}
            </div>
        </>
    )
};

export default LaligaPage;