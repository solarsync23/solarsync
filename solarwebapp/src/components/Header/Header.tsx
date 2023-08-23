import React from 'react';
import {BsArrowLeft} from 'react-icons/bs';
import Link from 'next/link';

type headerProp = {
    title: string;
    href: string;
    icon: any;
};

const Header:React.FC<headerProp> = ({title, href, icon}) => {
    return (
        <div className='p-4 flex justify-between items-center text-darkblue'>
            <Link href={href}><BsArrowLeft/></Link>
            <h1 className='text-center'>LeaderBoard</h1>
            {icon}
        </div>
    )
}

export default Header;
