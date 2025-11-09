import React from 'react'
import PacakgesInfo from '../components/PacakgesInfo/PacakgesInfo'
import Layout from '../components/HOC/Layout'
import Faq from '../components/Faq/Faq'

function Pacakages() {
  return (
    <div>
        <PacakgesInfo />
        <Faq />
    </div>
  )
}

export default Layout()(Pacakages)