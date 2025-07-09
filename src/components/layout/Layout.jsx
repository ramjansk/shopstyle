import React from 'react'
import StickyNavbar from '../navbar/StickyNavbar'
import Footer from '../footer/Footer'

function Layout({children}) {
    return (
      <div  >
          <StickyNavbar/>
          <div className='content pt-24'>{children}</div>
          <Footer/>
      </div>
    )
  }

export default Layout