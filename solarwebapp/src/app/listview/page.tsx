import React from 'react';
import StationCard from '../../components/StationCard/StationCard';
import SearchBar
from '@/components/SearchBar/SearchBar';
import {AiOutlineHeart, AiOutlineClockCircle} from 'react-icons/ai';
import {TbSunLow} from 'react-icons/tb';
import Navbar from '@/components/Navbar/Navbar';

function listviewPage() {
    const buttonStyle = 'flex-center bg-lightblue rounded-md p-2';

    const stations = [{
        'name':'name',
        'energy':'Solar Energy',
        'price':'0.19/kWh',
        'location':'location',
        'distance':'1.2km',
        'hours':'9am-5pm',
        'availability':'yes',
        'connectors':'Tesla',
    },
        {'name':'name',
        'energy':'n/a',
        'price':'0.19/kWh',
        'location':'location',
        'distance':'2.5km',
        'hours':'3pm-5pm',
        'availability':'yes',
        'connectors':'AC',
    },
];

    return (
        <div className='p-4 bg-lightgrey'>
            <SearchBar/>
                        {/**Quick actions */}
                <div className='flex justify-between'>
                <button
                className={buttonStyle}
                > 
                    <AiOutlineHeart className='mr-2'/>
                    Saved
                </button>
                <button
                className={buttonStyle}
                > 
                    <AiOutlineClockCircle className='mr-2'/>
                    Recent
                </button>
                <button
                className={buttonStyle}
                > 
                    <TbSunLow className='mr-2'/>
                    Solar
                </button>
            </div>
            {/** stations list */}
            <div>
                {
                    stations.map((station,i)=>{
                        return (
                            <StationCard
                            name={station.name}
                            energy={station.energy}
                            price={station.price}
                            location={station.location}
                            distance={station.distance}
                            hours={station.hours}
                            availability={station.availability}
                            connectors={station.connectors}
                            />
                        )
                    })
                }
            </div>
            <div className='w-full flex-center flex-col'>
                <button className='button-pill text-white w-48 border-none'>Map view</button>
            </div>
                <Navbar/>
        </div>
    )
}

export default listviewPage;