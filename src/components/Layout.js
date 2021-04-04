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

    
    const [closeMenu, setCloseMenu] = useState({close: true});

    // if (localStorage.language) {
    //     setLanguage({the_lang: localStorage.language})
    // } else {
    //     setLanguage({the_lang : 'fr'})
    // }

    // useEffect(() => {
    //     if (localStorage.language) {
    //         setLanguage({the_lang: localStorage.language})
    //     }
    // }, localStorage.language)

    // useEffect(() => {
    //     if(localStorage.darkmode){
    //         setDarkMode({dark_mode : localStorage.darkmode})
    //     }
    //     console.log(localStorage.darkmode)
    //     console.log('in the layout' , darkMode)
    // },localStorage.darkmode)

    // const setLang = lang => {
    //     setLanguage({the_lang: lang})
    //     localStorage.setItem('language', lang);
    //     console.log('in the layout' , language)
    // }

    // const setDM = dm => {
    //     setDarkMode({dark_mode : dm})
    //     localStorage.setItem('darkmode', dm);
    // }




    const setClose = close => {
        setCloseMenu({close: close})
        // localStorage.setItem('menu', close);
    }


    // window.addEventListener('storage', console.log(localStorage.darkmode))

    return (
        <main 
            style={{backgroundColor: '#04101B', height: '100vh'}}
            >
            <Navbar callback={setClose} is_closed={closeMenu} ></Navbar>
                {props.children({...closeMenu})}
            <Footer></Footer>
        </main>
    )
}

export default Layout