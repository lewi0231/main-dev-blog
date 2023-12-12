import { graphql, useStaticQuery } from "gatsby"

export const useMarkdownRemark = () => {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
            query markdownRemarkQuery {
                allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                    nodes {
                    frontmatter {
                        slug
                        title
                        stack
                        date
                    }
                    id
                    }
                }
            }
        `)
    return allMarkdownRemark.nodes
}
