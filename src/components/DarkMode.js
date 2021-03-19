import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import Img from 'gatsby-image'

// query
const query = graphql`
query {
  moon:file(relativePath:{eq:"whitemoon.png"}){
    relativePath
    childImageSharp{
      fluid(quality:90, maxWidth: 4160){
        ...GatsbyImageSharpFluid
        }
      }
  }
  sun:file(relativePath:{eq:"whitesun.png"}){
    relativePath
    childImageSharp{
      fluid(quality:90, maxWidth: 4160){
        ...GatsbyImageSharpFluid
        }
      }
  }
}
`

const DarkMode = ({callbackDM, dm}) => {
    const {sun, moon} = useStaticQuery(query);

    return (
            <div class='dm_icon_div'
            onClick={dm.dark_mode == "true"? 
                () => callbackDM("false"):
                () => callbackDM("true")}
            >
                <Img class='dm_icon' fluid={dm.dark_mode == "true" ? sun.childImageSharp.fluid : moon.childImageSharp.fluid} />
            </div>
    )
}

export default DarkMode
