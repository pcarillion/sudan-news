import React,{useState, useEffect, useRef} from 'react'
import {graphql, useStaticQuery} from 'gatsby'

// plugins
import Img from 'gatsby-image'
import { Helmet } from "react-helmet"

// css et script
import styles from '../styles/navandfooter.module.css'

// components
import Language from './Language'
import DarkMode from './DarkMode'

// query
const query = graphql`
query {
  logo:file(relativePath:{eq:"sudannews.png"}){
    relativePath
    childImageSharp{
      fluid(quality:90, maxWidth: 4160){
        ...GatsbyImageSharpFluid
        }
      }
  }
  logowhite:file(relativePath:{eq:"sudannewswhite.png"}){
    relativePath
    childImageSharp{
      fluid(quality:90, maxWidth: 4160){
        ...GatsbyImageSharpFluid
        }
      }
  }
}
`

const Nav = ({callback, closeMenu, callbackDM, callbackLang, lang, dm}) => {
    const {logo, logowhite} = useStaticQuery(query);

    const [close, setClose] = useState(false);

    const handleClose = () => {
      if (close == false) {
        setClose(true);
        callback(true)
      } else {
        setClose(false);
        callback(false)
      }
    }


    return (
        <nav className={dm.dark_mode && !close ? styles.navDarkmode : styles.nav} style={close? {width:'0px',padding: '0px', margin: '0px'} : {width: '210px'}}>
            <div className={dm.dark_mode? styles.logoDivDarkMode : styles.logoDiv}
                style={close? {width: '85px', height: '80px', padding: '15px', margin: '0px 0px 0px 167px', left: '25px', borderRadius: '5px'}: {}}
            >
              <Img fluid={dm.dark_mode? logowhite.childImageSharp.fluid : logo.childImageSharp.fluid} className={styles.logo}/>
              <div className={styles.menuIcon}
                style={close? {opacity: '1'} : {opacity: '0'}}
                onClick={handleClose}
              >
                <div className={dm.dark_mode ? styles.menuIcon1dm: styles.menuIcon1}></div>
                <div className={dm.dark_mode ? styles.menuIcon2dm: styles.menuIcon2}></div>
                <div className={dm.dark_mode ? styles.menuIcon3dm: styles.menuIcon3}></div>
              </div>
            </div>
            <button className={dm.dark_mode ? styles.closeBtndm : styles.closeBtn} onClick={handleClose} style={{display: `${close? 'none': 'block'}`}}>X</button>
            <ul style={{display: `${close? 'none': 'block'}`}}>
                <li>News</li>
                <li>Reports</li>
                <li>Documents</li>
                <li>Maps</li>
                <li>Politique</li>
                <li>Economie</li>
                <li>Culture</li>
                <li>عربية</li>
            </ul>
            {!close && <DarkMode callbackDM={callbackDM} dm={dm}/>}
            {!close && <Language callbackLang={callbackLang} lang={lang} dm={dm}/>}
            {/* <div className={styles.menuArabe} style={{display: `${close? 'none': 'block'}`}}>عربية</div> */}
            <div className={styles.copyright} style={{display: `${close? 'none': 'block'}`}}>
                <p>Copyright &copy; Sudan News - 2020 - Tous droits réservés</p>
                <p>Développé par Paul Carillion</p>
                <a href="https://www.paul-carillion.net" target="_blank"><img className={styles.logoDev} src="https://www.paul-carillion.net/monlogo.png"/></a>
            </div>
        </nav>
    )
}


export default Nav
