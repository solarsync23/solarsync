
import Logo from '../components/Logo/Logo';
import Link from 'next/link';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-darkblue">
      <Link href='/login'><Logo/></Link>
    </main>
  )
}

