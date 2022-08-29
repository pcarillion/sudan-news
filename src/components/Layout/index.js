import React, {Children, useEffect, useState} from 'react'

import './layout.css'


// components
import Navbar from './Nav'
import Footer from './Footer'


const Layout = ({children}) => {

    
    const [closedMenu, setClosedMenu] = useState(false);


    const setClose = () => {
        setClosedMenu(close => !close)
    }



    return (
        <main>
            <Navbar setClose={setClose} closedMenu={closedMenu}/>
                {children}
            <Footer></Footer>
        </main>
    )
}

export default Layout