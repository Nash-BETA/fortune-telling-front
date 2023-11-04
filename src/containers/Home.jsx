import React from 'react';

const Home = () => {
    const [pickupData, setPickupData] = React.useState(null);
    setPickupData( [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
    ]);

    return(
        <ul className="tellers_pickup_box">
            {pickupData.forEach((pickup) =>(
            <li className="tellers_pickup_list">
                <div className="status">
                    <div className='status_img'>
                        <a href={pickup.url}>
                            <picture>
                                <img loading="lazy" className="lazyload" src="" alt={pickup.name}/>
                            </picture>
                        </a>
                    </div>
                    <div style="position: absolute;"
                         className={'status_text_' + pickup.status}>
                        <p>{pickup.status}</p>
                    </div>
                </div>
                <div className="tellers_pickup_list">
                    <a href="">
                        <p>{pickup.serviceName}</p>
                        <p>{pickup.name + '先生'}</p>
                        <p>{pickup.telPrice + '円/1分'}</p>
                    </a>
                </div>
            </li>
            ))}
        </ul>
    )
}

export default Home;
