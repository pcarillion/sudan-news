import React from 'react'
import DarkMode from './DarkMode'

const Language = ({callbackLang, lang, dm}) => {
    return (
        <div className={dm.dark_mode? "language-button dm-color-white" : "language-button"}>
            <div onClick={() => callbackLang('fr')} className={lang.the_lang === 'fr' ? 'active': 'non-active'}>
                <p>Français</p>
            </div>
            <div onClick={() => callbackLang('ar')} className={lang.the_lang === 'ar' ? 'active' : 'non-active'}>
                <p>عربية</p>   
            </div>
        </div>
    )
}

export default Language
