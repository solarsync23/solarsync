import React from 'react';
import {AiOutlineHeart} from 'react-icons/ai';


type StationProps = {
    name: string;
    energy: string;
    price: string;
    location: string;
    distance: string;
    hours: string;
    availability: string;
    connectors: string;
    };


const stationCard: React.FC<StationProps> = ({name, energy, price, location, distance, hours, availability, connectors}) => {

    
    return (
        <div className='bg-white rounded-md flex'>
            <div
            className={`bg-[url('/images/placeholder.png')] bg-cover h-48 w-32`}
            >
                <AiOutlineHeart size='1.5rem' className=' rounded-sm bg-[rgba(209,213,219,0.8)] m-4'/>
            </div>
            <div className='flex justify-around'>
                <div className='flex-col'>
                    <p className='font-bold'>{name}</p>
                    <p>{price}</p>
                    <p>{location}</p>
                    <p>{hours}</p>
                    <p>{connectors}</p>
                </div>
                <div className='flex-col'>
                    <p>{distance}</p>
                    <p>{energy}</p>
                    <p>{availability}</p>
                </div>
            </div>
        </div>
    )
}

export default stationCard