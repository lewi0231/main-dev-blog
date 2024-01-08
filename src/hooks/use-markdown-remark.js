import { graphql, useStaticQuery } from "gatsby"

export const useMarkdownRemark = () => {
    const { allMdx } = useStaticQuery(
        graphql`
            query markdownRemarkQuery {
                allMdx(sort: {frontmatter: {date: DESC}}) {
                    nodes {
                    frontmatter {
                        slug
                        title
                        tags
                        date
                        summary
                        iconName
                        iconLink
                    }
                    id
                    internal {
                        contentFilePath
                    }
                    }
                }
            }
        `)
    return allMdx.nodes
}
