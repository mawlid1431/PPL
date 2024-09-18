import React from 'react'
import Header from '../../components/Header'
import Into from './Into'
import About from './About'

function Home() {
    return (
        <div className=' bg-primary px-40 '>
            <Header />
            <div className='bg-primary px-10' >
            <Into />  
            </div>
           <div  className='text-white'> <About/>  </div>
           

        </div>
    )
}

export default Home