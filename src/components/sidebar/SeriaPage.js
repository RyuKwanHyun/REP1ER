import './SeriaPage.css';
import Item from './Item';
import {ItemData} from './ItemData';

const SeriaPage = () => {
    const itemDatas = ItemData;
    let cnt = 0;

    return (
        <>
            <div className="seria_title" >
                <div className="seria_title_text_box">
                    <h1>SERIA A LEAGUE</h1>
                    <p>
                        REP1ER's SERIA A LEAGUE<br />
                    </p>
                </div>
            </div>

            <div className = "seria_grid">
                {itemDatas[2].map((seriaDatas) => <Item
                    key = {cnt++} 
                    _id = {seriaDatas._id}
                    name = {seriaDatas.name}
                    price = {seriaDatas.price}
                    img = {seriaDatas.img}
                    detail = {seriaDatas.details}
                    />)}
            </div>
        </>
    )
};

export default SeriaPage;