import React from 'react';



function savePage() {


    const stations = [{
        'name':'name',
        'energy':'Solar Energy',
        'location':'location',
        'distance':'1.2km',
        'hours':'9am-5pm',
        'availability':'yes',
        'connectors':'Tesla',
    },
        {'name':'name',
        'energy':'n/a',
        'location':'location',
        'distance':'2.5km',
        'hours':'3pm-5pm',
        'availability':'yes',
        'connectors':'AC',
    },
];


    return (
        <div>
            {
                stations.map((station,i)=>{
                    return (
                        <div key={i} className='flex'>
                            <p>{station.name}</p>
                            <p>{station.energy}</p>
                            <p>{station.location}</p>
                            <p>{station.distance}</p>
                            <p>{station.hours}</p>
                            <p>{station.availability}</p>
                            <p>{station.connectors}</p>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default savePage;