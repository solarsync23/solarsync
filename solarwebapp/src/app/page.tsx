import Image from 'next/image';
import {BsFillLightningFill} from 'react-icons/bs';
import {LuPlug} from 'react-icons/lu';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-darkblue">
        <BsFillLightningFill size='4rem' className='text-electric-green'/>
        <LuPlug size ='12rem'/>
    </main>
  )
}
