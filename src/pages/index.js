import React from "react"

// plugins
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from "react-helmet"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// css et script
import styles from '../styles/index.module.css'
import style from '../styles/category.module.css'

// import '../scripts/script'

// js
import Layout from '../components/Layout'

// data
const query = graphql`
query {
  articles:allContentfulArticle{
    edges{
      node{
       	titre
        dateFR: dateDePublication(formatString:"Do MMMM YYYY", locale: "fr")
        dateAr: dateDePublication(formatString:"MMMM Do YYYY", locale: "ar")
        image
        auteur {
          nom
        }
        presentation {
          internal {
            content
          }
        }
        titreEnArabe
        PresentationEnArabe {
          json
        }
      }
    }
  }
}`

export default function Home() {
  const {articles} = useStaticQuery(query);


  return <Layout>
    {props =>(
      <div className={style.container} style={{marginLeft: `${props.close? '0px': '260px'}`}}>
      <div className={`${style.header} ${props.dark_mode && style.headerDm}`} style={{height: '95px', width: `${props.close ? 'calc(100vw - 51px)': 'calc(100vw - 310px)'}`}}>
                        <h1 style={props.close? {marginLeft: '150px'} : {marginLeft: '0'}}>Sudan News</h1>
                        <p className={'header-p'}>L'actualité au Soudan en français et en arabe.</p>
                    </div>
        <div className={style.presentationsContainer}>
          {
            articles.edges.map((article, i) => {
              return(
                <div className={style.articlePresentation}
                        style={props.dark_mode?{backgroundColor : 'black'}:{backgroundColor : 'white'}}
                        > 
                              <div className={style.thumbnailDiv} style={{backgroundImage : `linear-gradient(to right, rgba(51, 51, 51, 0.7), rgba(51, 51, 51, 0.3)), url(${article.node.image})`}}>
                                {props.the_lang === 'fr'?
                                  <div className={style.articleText}>
                                      <h2>
                                          {article.node.titre}
                                      </h2>
                                      <p>
                                          {article.node.auteur.nom} | {article.node.dateFR} <br/>
                                          {article.node.presentation.internal.content} 
                                      </p>
                                  </div>:
                                  <div className={style.articleText} dir="rtl">
                                      <h2 className={style.textArabe}>
                                          {article.node.titreEnArabe}
                                      </h2>
                                      <p className={style.textArabe} dir="rtl">
                                          {article.node.dateAR} | {article.node.auteur.nom} <br/>
                                          {documentToReactComponents(article.node.PresentationEnArabe.json)} 
                                      </p>
                                  </div>
                                }
                              </div> 
                </div>
              )
            })
          }
        </div>

      </div>
      )}

  </Layout>
}




