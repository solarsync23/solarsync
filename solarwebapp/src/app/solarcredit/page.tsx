import React from 'react';
import {TbSunLow} from 'react-icons/tb';
import {BiCreditCard} from 'react-icons/bi';
import {TiWeatherPartlySunny} from 'react-icons/ti';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import Header from '@/components/Header/Header';

function solarcreditPage() {
    return (
        <div>
            <Header
            title='solar crefits'
            href='/dashboard/profile'
            icon={<AiOutlineInfoCircle/>}
            />

        </div>
    )
}

export default solarcreditPage;