const path = require("path")

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions ;
    const { data } = await graphql(`
    query{
        articles:allContentfulArticle{
            edges{
                node{
                    url
                    Categorie{
                      nom
                    }
        }}}
        categories: allContentfulCategorie{
            edges{
                node{
                    nom
                    nomEnArabe
                    url
                }
            }
        }
      }
    `)

    data.articles.edges.forEach(({node}) =>{
        createPage({
            path: `article/${node.url}`,
            component: path.resolve("./src/templates/Article.js"),
            context:{
                url: node.url,
                categorie: node.categorie
            },
            
        })
    })

    data.categories.edges.forEach(({node}) =>{
        createPage({
            path: `/categorie/${node.url}`,
            component: path.resolve("./src/templates/Categorie.js"),
            context:{
                url: node.url,
            },
            
        })
    })

}