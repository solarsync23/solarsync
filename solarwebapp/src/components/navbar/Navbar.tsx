import React from 'react';
import {LuPlug} from 'react-icons/lu';
import {VscMap} from 'react-icons/vsc';
import {IoPersonOutline} from 'react-icons/io5';
import Link from 'next/link';


function Navbar({activePage}:any) {

    const iconSize = '1.5rem';


    return (
        <div className='flex rounded-full bg-darkblue px-8 my-4'>
            <ul className='flex w-full justify-between text-white'>
                <Link href='/map'>
                    <li className={`p-4 ${activePage === 'map' ? 'nav-active': ''}`}><VscMap size={iconSize}/></li>
                </Link>
                <Link href='/'>
                    <li className={`p-4 ${activePage === 'plug' ? 'nav-active': ''}`}><LuPlug size={iconSize}/></li>
                </Link>
                <Link href='/dashboard/profile'>
                    <li className={`p-4 ${activePage === 'profile' ? 'nav-active': ''}`}><IoPersonOutline size={iconSize}/></li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar