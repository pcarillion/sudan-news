import React from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/Layout'

import styles from '../styles/index.module.css'
import style from '../styles/category.module.css'

const Categorie = ({data}) => {

    const url = typeof window !== 'undefined' ? window.location.href : '';

    console.log(data)
    return (
        <Layout>
            {props =>(
                <div className={style.container} style={{marginLeft: `${props.close? '0px': '260px'}`}}>
                    <div className={`${style.header} ${style.headerDm}`} style={{height: '95px', width: `${props.close ? 'calc(100vw - 67px)': 'calc(100vw - 328px)'}`, flexDirection:'row'}}>
                        <h1 className={'header-h1'} style={props.close? {marginLeft: '150px'} : {marginLeft: '0'}}>{data.categorie.nom}</h1>
                        <p className={'header-p'}>{data.categorie.presentation}</p>
                    </div>
                    <div className={style.presentationsContainer}>
          {
            data.articles.edges.map((article, i) => {
              return(
                <div>

                    <AniLink fade to={`/article/${article.node.url}`}> 
                        <div className={style.articlePresentation}
                                style={props.dark_mode == true?{backgroundColor : 'black'}:{backgroundColor : 'white'}}
                                > 
                            <div className={style.thumbnailDiv} style={{backgroundImage : `linear-gradient(to right, rgba(51, 51, 51, 0.7), rgba(51, 51, 51, 0.3)), url(${article.node.image})`}}>
                                <div className={style.articleText}>
                                    <h2>
                                        {article.node.titre}
                                    </h2>
                                    <p>
                                        {article.node.auteur.nom} | <span dir='ltr'>{article.node.dateDePublication}</span> <br/>
                                        {article.node.presentation.internal.content} 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AniLink>
                </div>)
            })
          }
        </div>
                </div>
                )}
        </Layout>
    )
}

export const query = graphql`
query getData($url:String) {
    categorie: contentfulCategorie(url:{eq:$url}){
            nom
    		nomEnArabe
            url
    		presentation
    		presentationEnArabe
    }
    articles: allContentfulArticle(filter:{Categorie:{elemMatch:{url:{eq:$url}}}}, sort:{fields:dateDePublication, order:DESC}){
        edges{
          node{
            titre
            dateDePublication(formatString:"Do/MM/YYYY", locale: "fr")
            image
            auteur {
              nom
            }
            presentation {
              internal {
                content
              }
            }
            url
            titreEnArabe
            PresentationEnArabe {
              json
            }
          }
          }
        }
}
`


export default Categorie
