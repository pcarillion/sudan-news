import React,{useState, useEffect, useRef} from 'react'
import {graphql, useStaticQuery} from 'gatsby'

// plugins
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// css et script
import {StyledNav} from './style'


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

const Nav = ({setClose, closedMenu}) => {
    const {logo, logowhite, categories} = useStaticQuery(query);



    const handleClose = () => {
        setClose()
    }

    useEffect(() => {
      var x = window.matchMedia("(max-width: 700px)")
      console.log(x)
      if (x.matches) { 
          setClose()
      }
  }, [])



    return (
        <StyledNav className={closedMenu ? 'closed' : ''}>
            <div className={"logo-div"}
            >
                <AniLink fade to='/'><Img fluid={logowhite.childImageSharp.fluid} className="main-logo"/></AniLink>
                <div 
                    className='menu-icon'
                    onClick={() => handleClose()}
                    >
                        <div className="menu-icon1"></div>
                        <div className="menu-icon2"></div>
                        <div className="menu-icon3"></div>
                </div>
            <button className="close-btn" 
                    onClick={() => handleClose()} 
                    >X</button>
            </div>
            <ul 
                className="menu"
                >
                {categories.edges.map((categorie, i) => {
                  return (<AniLink fade to={`/categorie/${categorie.node.url}`} activeStyle={{ fontWeight: "600", cursor: 'default' }}><li>{categorie.node.nom}</li></AniLink>)}
                )}
            </ul>
            <div 
                className="copyright"
                >
                <p>Copyright &copy; La Revue du Soudan - 2020 - Tous droits réservés</p>
                <p>Développé par Paul Carillion</p>
                <a href="https://www.paul-carillion.net" target="_blank"><img className="logo-dev" src="https://www.paul-carillion.net/monlogo.png"/></a>
            </div>
        </StyledNav>
    )
}


export default Nav
