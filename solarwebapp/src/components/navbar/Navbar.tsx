import React from 'react';
import {LuPlug} from 'react-icons/lu';
import {VscMap} from 'react-icons/vsc';
import {IoPersonOutline} from 'react-icons/io5';

function Navbar() {

    const iconSize = '1.5rem';
    
    return (
        <div className='flex rounded-full bg-darkblue px-8 my-4'>
            <ul className='flex w-full justify-between text-white'>
                <li className='p-4 nav-active'><VscMap size={iconSize}/></li>
                <li className='p-4 '><LuPlug size={iconSize}/></li>
                <li className='p-4'><IoPersonOutline size={iconSize}/></li>
            </ul>
        </div>
    )
}

export default Navbar