import React from 'react';
import {LuPlug} from 'react-icons/lu';
import {VscMap} from 'react-icons/vsc';
import {IoPersonOutline} from 'react-icons/io5';

function Navbar() {

    const iconSize = '2rem';
    const iconStyle = 'p-2';

    
    return (
        <div className='flex rounded-full py-2 px-4 padding-2rem bg-darkblue'>
            <ul className='flex w-full justify-between px-6'>
                <li><VscMap size={iconSize}/></li>
                <li><LuPlug size={iconSize}/></li>
                <li><IoPersonOutline size={iconSize}/></li>
            </ul>
        </div>
    )
}

export default Navbar