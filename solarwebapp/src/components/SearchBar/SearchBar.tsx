import React from 'react';
import {AiOutlineMenu } from 'react-icons/ai';
import {HiMagnifyingGlass} from 'react-icons/hi2';


function SearchBar() {
    return (
        <form 
        className='rounded-full bg-white p-2 flex justify-around mb-2'
        >
            <HiMagnifyingGlass size='1.5rem' className='text-lightgrey'/>
            <input placeholder='search location or station'/>
            <div className='rounded-full w-8 h-8 bg-darkblue text-white flex-center'>
                <AiOutlineMenu/>
            </div>
        </form>
    )
}

export default SearchBar;