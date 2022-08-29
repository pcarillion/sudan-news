import React from 'react'



import Layout from '../components/Layout'
import Card from '../components/Cards'

import style from '../styles/category.module.css'
import MainHeader from '../components/MainHeader'

const Categorie = ({data}) => {


    const url = typeof window !== 'undefined' ? window.location.href : '';

    return (
        <Layout>
          <div className={style.container}>
            <MainHeader category={data.categorie.nom} presentation={data.categorie.presentation}/>
              <div className={style.presentationsContainer}>
                {
                  data.articles.edges.map((article, i) => {
                    return(
                      <Card article={article} />
                      )
                  })
                }
              </div>
          </div>
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
