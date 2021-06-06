import './Legend.css';
import Item from './Item';
import {ItemData} from './ItemData';

const Legend = () => {
    const itemDatas = ItemData;
    let cnt = 0;

    return (
        <>
            <div className="legend_title" >
                <div className="legend_title_text_box">
                    <h1>LEGEND</h1>
                    <p>
                        REP1ER's LEGEND<br />
                    </p>
                </div>
            </div>

            <div className = "legend_grid">
                {itemDatas[10].map((legendDatas) => <Item
                    key = {cnt++} 
                    _id = {legendDatas._id}
                    name = {legendDatas.name}
                    price = {legendDatas.price}
                    img = {legendDatas.img}
                    detail = {legendDatas.details}
                    />)}
            </div>
        </>
    )
};

export default Legend;