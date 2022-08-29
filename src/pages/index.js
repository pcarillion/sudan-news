import React from "react"

// plugins
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from "react-helmet"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// css et script
import style from '../styles/category.module.css'

// import '../scripts/script'

// js
import Layout from '../components/Layout'
import Card from '../components/Cards'
import MainHeader from '../components/MainHeader'

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

  let category = "La Revue du Soudan"
  let presentation = "L'actualité au Soudan en français et en arabe."


  return (
    <Layout>
        <div className={style.container}>
          <MainHeader category={category} presentation={presentation}/>
          <div className={style.presentationsContainer}>
            {
              articles.edges.map((article, i) => {
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




