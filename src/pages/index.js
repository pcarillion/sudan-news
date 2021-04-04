import React from "react"

// plugins
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from "react-helmet"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import AniLink from 'gatsby-plugin-transition-link/AniLink'

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
        dateDePublication(formatString:"Do/MM/YYYY", locale: "fr")
        image
        auteur {
          nom
        }
        url
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
      <div className={`${style.header} ${style.headerDm}`} style={{height: '95px', width: `${props.close ? 'calc(100vw - 67px)': 'calc(100vw - 328px)'}`}}>
                        <h1 style={props.close? {marginLeft: '200px'} : {marginLeft: '0'}}>La Revue du Soudan</h1>
                        <p className={'header-p'}>L'actualité au Soudan en français et en arabe.</p>
                    </div>
        <div className={style.presentationsContainer}>
          {
            articles.edges.map((article, i) => {
              return(
                <div>
                  <AniLink fade to={`/article/${article.node.url}`}> 
                    <div className={style.articlePresentation}
                            style={props.dark_mode?{backgroundColor : 'black'}:{backgroundColor : 'white'}}
                            > 
                                  <div className={style.thumbnailDiv} style={{backgroundImage : `linear-gradient(to right, rgba(51, 51, 51, 0.7), rgba(51, 51, 51, 0.3)), url(${article.node.image})`}}>
                                      <div className={style.articleText}>
                                          <h2 className={!props.close && style.mobilehidden}>
                                              {article.node.titre}
                                          </h2>
                                          <p>
                                              {article.node.auteur.nom} | {article.node.dateFR} <br/>
                                              {article.node.presentation.internal.content} 
                                          </p>
                                      </div>
                                  </div> 
                      </div>
                    </AniLink>
                </div>
              )
            })
          }
        </div>

      </div>
      )}

  </Layout>
}




