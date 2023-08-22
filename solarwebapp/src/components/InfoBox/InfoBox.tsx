import React from 'react';
import Link from 'next/link';
import {IoIosArrowForward} from 'react-icons/io'

type InfoProp = {
    section: string;
    content: string;
    href: string;
}

const InfoBox:React.FC<InfoProp> = ({section, content, href}) => {

    return (
        <Link href={href} className='capitalize flex justify-between items-center'>
            <div>
                <p className='text-darkgrey'>{section}</p>
                <p className='text-darkblue'>{content}</p>
            </div>
            <IoIosArrowForward/>
        </Link>
    )
}

export default InfoBox