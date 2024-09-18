import React from 'react'
import Header from '../../components/Header'
import Into from './Into'
import About from './About'

function Home() {
    return (
        <div >
            <Header />
            <div className='bg-primary px-40  ' >
            <Into />  
            </div>
           <div  > <About/>  </div>
           

        </div>
    )
}

export default Home