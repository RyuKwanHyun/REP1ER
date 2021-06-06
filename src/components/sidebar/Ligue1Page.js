import './Ligue1Page.css';
import Item from './Item';
import {ItemData} from './ItemData';

const Ligue1Page = () => {
    const itemDatas = ItemData;
    let cnt = 0;

    return (
        <>
            <div className="ligue1_title" >
                <div className="ligue1_title_text_box">
                    <h1>FRANCE LIGUE1</h1>
                    <p>
                        REP1ER's FRANCE LIGUE1<br />
                    </p>
                </div>
            </div>

            <div className = "ligue1_grid">
                {itemDatas[4].map((ligue1Datas) => <Item
                    key = {cnt++} 
                    _id = {ligue1Datas._id}
                    name = {ligue1Datas.name}
                    price = {ligue1Datas.price}
                    img = {ligue1Datas.img}
                    detail = {ligue1Datas.details}
                    />)}
            </div>
        </>
    )
};

export default Ligue1Page;