import React from 'react'
import Layout from '../components/HOC/Layout'
import Contact from '../components/ContactUsComp/Contact'

function ContactUs() {
  return (
    <div>
        <Contact />
    </div>
  )
}

export default Layout()(ContactUs)