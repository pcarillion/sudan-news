import React from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


import Layout from '../components/Layout'

import styles from '../styles/index.module.css'
import style from '../styles/category.module.css'
import style_article from '../styles/article.module.css'

const Article = ({data, property}) => {
        return (<Layout>
        {props =>(
            <div className={style.container} style={{marginLeft: `${props.close? '0px': '260px'}`}}> 
                    <div className={`${style_article.header} ${style.headerDm}`} style={{height: '95px', width: `${props.close ? 'calc(100vw - 67px)': 'calc(100vw - 328px)'}`}}>
                        <h1 className={'header-h1 h1-article'} style={props.close? {marginLeft: '170px'} : {marginLeft: '0'}}>{data.article.titre}</h1>
                        <p className={'header-p header-p-article'}>{data.article.auteur.nom} <br/> {data.article.dateDePublication}</p>
                    </div>
                <div className={styles.articledm} style={props.close? {} : {}}>
                    <h1 className={'header-h1-mobile'}>{data.article.titre}</h1>
                    <p className={'header-p-mobile'}>{data.article.auteur.nom} <br/> {data.article.dateDePublication}</p>
                    <p>
                    {data.article.presentation.internal.content}
                    </p>
                    <div>
                        <div>
                            <div style={{backgroundImage : `url(${data.article.image}`}} className={style_article.imagePrincipale}>
                            </div>
                            <div  className={style_article.articleContainer}>
                                {documentToReactComponents(data.article.article.json)}
                            </div> 
                        </div>
                    </div>
                    </div>
            </div>

        )}
        </Layout>)
}

export const query = graphql`
query getArticles($url:String){
    article:contentfulArticle(url:{eq:$url}){
        titre
    		titreEnArabe
    		dateDePublication(formatString:"Do/MM/YYYY", locale: "fr")
    image
    Categorie {
        nom
        nomEnArabe
        url
    }
    auteur{
      nom
    }
    presentation{internal{content}}
    PresentationEnArabe{internal{content}}
    article{json}
    articleEnArabe{json}
    
    }
}
`

export default Article
