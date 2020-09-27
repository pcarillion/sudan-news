import React from 'react'
import DarkMode from './DarkMode'

const Language = ({callback, lang, dm}) => {
    return (
        <div className={dm.dark_mode? "language-button dm-color-white" : "language-button"}>
            <div onClick={() => callback('fr')} className={lang.the_lang === 'fr' ? 'active': 'non-active'}>
                <p>Français</p>
            </div>
            <div onClick={() => callback('ar')} className={lang.the_lang === 'ar' ? 'active' : 'non-active'}>
                <p>عربية</p>   
            </div>
        </div>
    )
}

export default Language
