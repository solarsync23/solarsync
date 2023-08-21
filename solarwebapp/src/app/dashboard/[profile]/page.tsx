import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import '../../globals.css';




function dashboardPage({params}: any) {
    const user = params.profile;

    const buttonStyle = 'flex-center bg-lightblue rounded-md p-2'

    return (
        <div className='py-2 px-4 bg-lightgrey h-screen'>

                <Navbar/>

        </div>
    )
}

export default dashboardPage;