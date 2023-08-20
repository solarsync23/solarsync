import React from 'react';
import {VscClose} from 'react-icons/vsc';
import Image from 'next/image';

function loanchargerPage() {
    return (
        <div>
            <div className='flex'>
                <h1>
                    Loan your home charger
                </h1>
                <VscClose/>
            </div>
            <Image
            src='/images/loan.png'
            width={400}
            height={200}
            alt='Earn money and earn solar charging credits'
            />
            <div>
                <button>Continue</button>
                <button>Skip and finish</button>
            </div>
        </div>
    )
}

export default loanchargerPage;