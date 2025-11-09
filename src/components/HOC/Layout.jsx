import React from 'react'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'

const  Layout=()=>(Component)=>{
    return(props)=>{

        return (
            <div>
            <Navbar />
            <Component {...props} />
            <Footer />
            </div>
        )

    }



}

export default Layout