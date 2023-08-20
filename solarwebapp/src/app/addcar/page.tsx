import React from 'react';
import {VscClose, VscSearch} from 'react-icons/vsc';


function addcarPage() {
    return (
        <form className='bg-lightgrey'>
            <div className='flex'>
                <h1 className='text-black'>Add a vehical</h1>
                <VscClose className='text-black'/>
            </div>
            <div className='flex bg-white'>
                <VscSearch className='text-black'/>
                <input placeholder='Search Make'/>
            </div>
            <div className='flex-col'>
                <button>Continue</button>
                <button className='text-darkblue'>Skip for now</button>
            </div>
        </form>
    )
}

export default addcarPage;