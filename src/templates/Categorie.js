import React from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


import Layout from '../components/Layout'

import styles from '../styles/index.module.css'
import style from '../styles/category.module.css'

const Categorie = ({data}) => {

    const url = typeof window !== 'undefined' ? window.location.href : '';


    return (
        <Layout>
            {props =>(
                <div className={style.container} style={{marginLeft: `${props.close? '0px': '260px'}`}}>
                    <div className={`${style.header} ${props.dark_mode && style.headerDm}`} style={{height: '95px', width: `${props.close ? 'calc(100vw - 51px)': 'calc(100vw - 310px)'}`, flexDirection: `${props.the_lang == 'fr' ? 'row': 'row-reverse'}`}}>
                        <h1 className={props.the_lang === 'fr'? 'header-h1' :'header-h1-ar'} style={props.close? {marginLeft: '150px'} : {marginLeft: '0'}}>{props.the_lang === 'fr'? data.categorie.nom : data.categorie.nomEnArabe}</h1>
                        <p className={props.the_lang === 'fr'? 'header-p' :'header-p-ar'}>{props.the_lang === 'fr'? data.categorie.presentation : data.categorie.presentationEnArabe}</p>
                    </div>
                    <div className={style.presentationsContainer}>
          {
            data.articles.edges.map((article, i) => {
              return(
                  <div>
                {/* dans le cas où l'article existe aussi dans la version arabe */}
                {article.node.titreEnArabe
                    && article.node.PresentationEnArabe
                    ?
                    <div className={style.articlePresentation}
                        style={props.dark_mode?{backgroundColor : 'black'}:{backgroundColor : 'white'}}
                        > 
                    <div className={style.thumbnailDiv} style={{backgroundImage : `linear-gradient(to right, rgba(51, 51, 51, 0.7), rgba(51, 51, 51, 0.3)), url(${article.node.image})`}}>
                    {
                        props.the_lang === 'fr' ? 
                        <div className={style.articleText}>
                            <h2>
                                {article.node.titre}
                            </h2>
                            <p>
                                {article.node.auteur.nom} | {article.node.dateDePublication} <br/>
                                {article.node.presentation.internal.content} 
                            </p>
                        </div>:
                        <div className={style.articleText} dir="rtl">
                            <h2 className={style.textArabe}>
                                {article.node.titreEnArabe}
                            </h2>
                            <p className={style.textArabe} dir="rtl">
                                <span dir='ltr'>{article.node.dateDePublication}</span> | {article.node.auteur.nom} <br/>
                                {documentToReactComponents(article.node.PresentationEnArabe.json)} 
                            </p>
                        </div>
                    }
                    </div> 
                </div>:
                        /* dans le cas où l'article n'existe qu'en français */
                    <div>
                    {
                        props.the_lang === 'fr'
                        &&
                        <div className={style.articlePresentation}
                            style={props.dark_mode?{backgroundColor : 'black'}:{backgroundColor : 'white'}}
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
                    }
                    </div>
                }

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
