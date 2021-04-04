import React,{useState, useEffect, useRef} from 'react'
import {graphql, useStaticQuery} from 'gatsby'

// plugins
import Img from 'gatsby-image'
import { Helmet } from "react-helmet"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

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
  categories:allContentfulCategorie(sort:{fields:ordre, order: ASC}){
    edges{
      node{
        nom
        nomEnArabe
        url
      }
    }
  }
}
`

const Nav = ({callback, is_closed}) => {
    const {logo, logowhite, categories} = useStaticQuery(query);

    const [close, setClose] = useState(is_closed.close);

    console.log(is_closed.close)

    const handleClose = () => {
      if (close == false) {
        setClose(true);
        callback(true)
      } else {
        setClose(false);
        callback(false)
      }
    }

    useEffect(() => {
      var x = window.matchMedia("(max-width: 700px)")
      if (x.matches) { 
          setClose(true)
          callback(true)

        } else {
          setClose(false)
          callback(false)

        }
  }, [])



    return (
        <nav className={`${styles.navDarkmode} ${close && styles.mobileopen}`} style={close? {width:'0px',padding: '0px', margin: '0px'} : {width: '210px'}}>
            <div className={styles.logoDivDarkMode}
                style={close? {width: '85px', height: '80px', padding: '15px', margin: '0px 0px 0px 167px', left: '25px', borderRadius: '5px'}: {}}
            >
              <AniLink fade to='/'><Img fluid={logowhite.childImageSharp.fluid} className={styles.logo}/></AniLink>
              <div className={styles.menuIcon}
                style={close? {opacity: '1', transition: 'all 1s linear'} : {opacity: '0', transition: 'none'}}
                onClick={handleClose}
              >
                <div className={styles.menuIcon1dm}></div>
                <div className={styles.menuIcon2dm}></div>
                <div className={styles.menuIcon3dm}></div>
              </div>
            </div>
            <button className={styles.closeBtndm} onClick={handleClose} style={{display: `${close? 'none': 'block'}`}}>X</button>
            <ul style={{display: `${close? 'none': 'block'}`}}>
                {categories.edges.map((categorie, i) => {
                  return (<AniLink fade to={`/categorie/${categorie.node.url}`} activeStyle={{ fontWeight: "600", cursor: 'default' }}><li style={{color: 'white'}}>{categorie.node.nom}</li></AniLink>)}
                )}
            </ul>
            <div className={styles.copyright} style={{display: `${close? 'none': 'block'}`}}>
                <p>Copyright &copy; Sudan News - 2020 - Tous droits réservés</p>
                <p>Développé par Paul Carillion</p>
                <a href="https://www.paul-carillion.net" target="_blank"><img className={styles.logoDev} src="https://www.paul-carillion.net/monlogo.png"/></a>
            </div>
        </nav>
    )
}


export default Nav
