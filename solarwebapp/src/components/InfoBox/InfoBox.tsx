import React from 'react';
import Link from 'next/link';
import {IoIosArrowForward} from 'react-icons/io'

type InfoProp = {
    section: string;
    content: string;
    href: string;
    noArrow?: boolean;
    styleSection?:string;
    styleContent?:string;
}

const InfoBox:React.FC<InfoProp> = ({section, content, href,noArrow, styleSection, styleContent}) => {

    return (
        <Link href={href} className='capitalize flex justify-between items-center'>
            <div className='py-2'>
                <p className={`text-darkgrey ${styleSection}`}>{section}</p>
                <p className={`text-darkblue ${styleContent}`}>{content}</p>
            </div>
            <IoIosArrowForward className={noArrow ? 'hidden':'' 
            }/>
        </Link>
    )
}

export default InfoBox