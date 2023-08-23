import React from 'react';
import {TbSunLow} from 'react-icons/tb';
import {BiCreditCard} from 'react-icons/bi';
import {TiWeatherPartlySunny} from 'react-icons/ti';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import Header from '@/components/Header/Header';
import Credititem from '@/components/Credititem/Credititem';
import InfoBox from '@/components/InfoBox/InfoBox';


function solarcreditPage() {

    const boxStyle = 'w-full rounded-md bg-white flex items-center justify-start p-2 m-2';

    const iconSize ='2.5rem';

    const userInfo = {
        'credit': 100,
        'cash': '1.00',
        'rank': 132,
        'status': 'early syncer'
    };

    const userImpact = {
        'carbon': '0Kg CO2e',
        'syncers': '0',
        'shared': 0,
    }

    const creditInfo = [
        {
            'points':'+5',
            'content':'Use a solar sync charger'
        },
        {
            'points':'+10',
            'content':'Book a solar home charger'
        },
        {
            'points':'+10',
            'content':'Receive a solar booking'
        },
        {
            'points':'+50',
            'content':'save 500kg CO2e'
        },
        {
            'points':'+100',
            'content':'Loan your home charger'
        },
        {
            'points':'+900',
            'content':'Add solar panels'
        }
    ];

    return (
        <div className='bg-lightgrey p-2'>
            <Header
            title='solar crefits'
            href='/dashboard/profile'
            icon={<AiOutlineInfoCircle/>}
            />
            <div className='flex justify-between'>
                <div className={boxStyle}>
                    <TbSunLow size={iconSize}/>
                    <div className='pl-2'>
                        <p className='text-2xl'>{userInfo.credit}</p>
                        <p className='text-sm'>credits</p>
                    </div>
                </div>
                <div className={boxStyle}>
                    <BiCreditCard size={iconSize}/>
                    <div className='pl-2'>
                        <p className='text-2xl'>£{userInfo.cash}</p>
                        <p className='text-sm'>to spend</p>
                    </div>
                </div>
            </div>
            <div className='bg-white flex justify-start p-2 m-2 rounded-md'>
            <div className='flex-center'>
                <div className='bg-lightgreen rounded-full w-10 h-10 mr-2 flex-center'>
                    <TiWeatherPartlySunny size='1.5rem'/>
                </div>
            </div>
            <div className='w-full m-2 flex justify-between'>
                <div>
                    <p className='text-darkgrey'>All time</p>
                    <p className='text-black'>{userInfo.status}</p>
                </div>
                <div className='flex-col text-right'>
                    <p className='text-darkgrey'>#{userInfo.rank}</p>
                    <p className='text-black'>{userInfo.credit}credits</p>
                </div>
            </div>
        </div>
        <div className='m-2 capitalize'>
            <h2>earn credits</h2>
            <div className='rounded-md bg-white'>
                {
                    creditInfo.map((credit,i)=>{
                        return (
                            <Credititem
                            point={credit.points}
                            content={credit.content}
                            />
                        )
                    })
                }
            </div>
        </div>
        <div className='m-2 capitalize'>
            <h2> your impact</h2>
            <div className='rounded-md bg-white p-2'>
                <div className='capitalize'>
                    <InfoBox
                    section='Carbon emissions saved'
                    content={userImpact.carbon}
                    href=''
                    noArrow={true}
                    styleSection='text-sm'
                    styleContent='text-xs'
                    />
                    <InfoBox
                    section='Solar syncers helped'
                    content={`${userImpact.syncers} syncers`}
                    href=''
                    noArrow={true}
                    styleSection='text-sm'
                    styleContent='text-xs'
                    />
                    <InfoBox
                    section='Charging sessions shared'
                    content={`${userImpact.shared}kWh`}
                    href=''
                    noArrow={true}
                    styleSection='text-sm'
                    styleContent='text-xs'
                    />
                </div>

            </div>
        </div>
        </div>
    )
}

export default solarcreditPage;