import React from 'react';
import {VscClose} from 'react-icons/vsc';
import Image from 'next/image';

function loanchargerPage() {

    return (
        <div className='bg-lightgrey'>
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
            <form>
                <p>Required</p>
                <label> Charger Type
                    <input/>
                </label>
                <label> Address
                    <input/>
                </label>
                <label> Price
                    <input/>
                </label>
                <label> Availability
                    <input/>
                </label>
                <p>Optional</p>
                <label> Subscription
                    <input/>
                </label>
                <label> Extra info for visitors
                    <input/>
                </label>
                <label> Solar syncing
                    <input/>
                </label>
            </form>
        </div>
    )
}

export default loanchargerPage;