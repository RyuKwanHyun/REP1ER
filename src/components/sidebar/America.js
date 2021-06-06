import './America.css';
import Item from './Item';
import {ItemData} from './ItemData';

const America = () => {
    const itemDatas = ItemData;
    let cnt = 0;

    return (
        <>
            <div className="america_title" >
                <div className="america_title_text_box">
                    <h1>AMERICA</h1>
                    <p>
                        REP1ER's AMERICA<br />
                    </p>
                </div>
            </div>

            <div className = "america_grid">
                {itemDatas[7].map((americaDatas) => <Item
                    key = {cnt++} 
                    _id = {americaDatas._id}
                    name = {americaDatas.name}
                    price = {americaDatas.price}
                    img = {americaDatas.img}
                    detail = {americaDatas.details}
                    />)}
            </div>
        </>
    )
};

export default America;