import './Europe.css';
import Item from './Item';
import {ItemData} from './ItemData';

const Europe = () => {
    const itemDatas = ItemData;
    let cnt = 0;

    return (
        <>
            <div className="europe_title" >
                <div className="europe_title_text_box">
                    <h1>EUROPE</h1>
                    <p>
                        REP1ER's EUROPE<br />
                    </p>
                </div>
            </div>

            <div className = "europe_grid">
                {itemDatas[5].map((europeDatas) => <Item
                    key = {cnt++} 
                    _id = {europeDatas._id}
                    name = {europeDatas.name}
                    price = {europeDatas.price}
                    img = {europeDatas.img}
                    detail = {europeDatas.details}
                    />)}
            </div>
        </>
    )
};

export default Europe;