import React from 'react';
import {PiCheckCircleDuotone} from 'react-icons/pi';

type creditProps = {
    point: string;
    content: string;
};

const Credititem:React.FC<creditProps> = ({point, content,}) => {
    return (
        <div className='p-4 flex justify-between  items-center'>
            <p>{point}</p>
            <div className='flex justify-start w-full ml-2'>
                <p className='text-left text-sm pl-4'>{content}</p>
            </div>
            <PiCheckCircleDuotone className='text-darkgrey'/>
        </div>
    )
}

export default Credititem;