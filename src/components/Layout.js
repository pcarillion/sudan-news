import React, {useEffect, useState} from 'react'

import './layout.css'


// import AOS from 'aos';
// import 'aos/dist/aos.css';

// components
import Navbar from './Nav'
import Footer from './Footer'
import Language from './Language'
import DarkMode from './DarkMode'

const Layout = (props) => {

    const [language, setLanguage] = useState({the_lang: "fr"});
    const [darkMode, setDarkMode] = useState({dark_mode : false})

    const setLang = lang => {
        setLanguage({the_lang: lang})
    }

    const setDM = dm => {
        setDarkMode({dark_mode : dm})
    }

    const [closeMenu, setCloseMenu] = useState({close: false});

    const setClose = close => {
        setCloseMenu({close: close})
    }

    return (
        <main 
            style={darkMode.dark_mode == true ? {backgroundColor: '#04101B', height: '100vh'} : {backgroundColor : 'white', height: '100vh'}}
            >
            {/* <Language callback={setLang} lang={language} dm={darkMode}/>
            <DarkMode callback={setDM} dm={darkMode}/> */}
            <Navbar callback={setClose} close={closeMenu} dm={darkMode} callbackDM={setDM} callbackLang={setLang} lang={language} dm={darkMode}></Navbar>
                {props.children({...props, ...language, ...closeMenu, ...darkMode})}
            <Footer></Footer>
        </main>
    )
}

export default Layout