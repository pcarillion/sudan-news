import React from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


import Layout from '../components/Layout'

import styles from '../styles/index.module.css'
import style from '../styles/category.module.css'
import style_article from '../styles/article.module.css'

const Article = ({data}) => {
        return (<Layout>
        {props =>(
            <div className={style.container} style={{marginLeft: `${props.close? '0px': '260px'}`}}>
                    {data.article.titreEnArabe ? <div className={`${style_article.header} ${props.dark_mode && style.headerDm}`} style={{height: '95px', width: `${props.close ? 'calc(100vw - 51px)': 'calc(100vw - 310px)'}`, flexDirection: `${props.the_lang == 'fr' ? 'row': 'row-reverse'}`}}>
                        <h1 className={props.the_lang === 'fr'? 'header-h1' :'header-h1-ar'} style={props.close? {marginLeft: '170px'} : {marginLeft: '0'}}>{props.the_lang === 'fr'? data.article.titre : data.article.titreEnArabe}</h1>
                        <p className={props.the_lang === 'fr'? 'header-p' :'header-p-ar'}>{data.article.auteur.nom} <br/> {data.article.dateDePublication}</p>
                    </div>: 
                    <div className={`${style_article.header} ${props.dark_mode && style.headerDm}`} style={{height: '95px', width: `${props.close ? 'calc(100vw - 51px)': 'calc(100vw - 310px)'}`}}>
                        <h1 className={'header-h1'} style={props.close? {marginLeft: '170px'} : {marginLeft: '0'}}>{data.article.titre}</h1>
                        <p className={'header-p'}>{data.article.auteur.nom} <br/> {data.article.dateDePublication}</p>
                    </div>}
                <div className={props.dark_mode? styles.articledm : styles.article} style={props.close? {} : {}}>
                    <p>
                    {props.the_lang === 'fr'? data.article.presentation.internal.content : data.article.presentationEnArabe}
                    </p>
                    
                    {data.titreEnArabe && data.articleEnArabe ?
                    <div>
                        <div style={{backgroundImage : `url(${data.article.image}`}} className={style_article.imagePrincipale}>
                        
                        </div>
                    {props.the_lang == 'fr' ? 
                    
                        <div  className={style_article.articleContainer}>
                            {documentToReactComponents(data.article.article.json)}
                        </div> : 
                        <div className={style_article.articleContainerArabe}>
                            {documentToReactComponents(data.article.articleEnArabe.json)} 
                        </div>}
                    </div>:
                    <div>
                    {props.the_lang == 'fr' ? 
                        <div>
                            <div style={{backgroundImage : `url(${data.article.image}`}} className={style_article.imagePrincipale}>
                            </div>
                            <div  className={style_article.articleContainer}>
                                {documentToReactComponents(data.article.article.json)}
                            </div> 
                        </div>: 
                            <div className={style_article.articleContainerArabe}>
                                <p>معليش... المقال غير مترجم للغة العربية</p>
                            </div>
                        }
                    </div>
                    }
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
