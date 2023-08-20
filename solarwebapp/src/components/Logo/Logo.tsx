import React from 'react';
import Image from 'next/image';

const Logo = () => {
    return (
        <div className='flex justify-center'>
            <Image
            src="/images/logo.png"
            width={100}
            height={100}
            alt='solarsync'
            />
        </div>
    )
}

export default Logo