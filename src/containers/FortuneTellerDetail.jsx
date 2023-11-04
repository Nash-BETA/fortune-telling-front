import React from 'react';

import FortuneTellerRepository from '../repositories/FortuneTellerRepository'

const FortuneTellerDetail  = ({
        fortuneTellerId,
    }) => {
    const [item, setItem] = React.useState(null);


    FortuneTellerRepository.findAll(fortuneTellerId).then((item) => {
        setItem(item)
    });

    return (
        <div>
            <h1>{item + 'です'}</h1>
        </div>
    )
}

export default FortuneTellerDetail;
