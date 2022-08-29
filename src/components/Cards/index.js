import React from 'react'
import {StyledCard} from './style'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import style from '../../styles/category.module.css'

const Card = ({article, closedMenu}) => {
  return (
    <StyledCard>
        <AniLink fade to={`/article/${article.node.url}`}> 
        <div className="article-card"> 
            <div className="article-image" style={{backgroundImage : `url(${article.node.image})`}}></div>
            <div className="article-text">
                <h2>
                    {article.node.titre}
                </h2>
                <div className="article-details">
                    <div>{article.node.auteur.nom} | {article.node.dateDePublication}</div>
                    <div className="article-presentation">{article.node.presentation.internal.content} </div>
                </div>
            </div>
            </div>
        </AniLink>
    </StyledCard>
  )
}

export default Card