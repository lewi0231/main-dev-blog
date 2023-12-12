import { Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import { useMarkdownRemark } from '../../hooks/use-markdown-remark';
import * as styles from '../../styles/projects.module.css';

export default function Projects() {
    const projects = useMarkdownRemark()

    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects & Websites I've Created</h3>
                <div className={styles.projects}>
                    {projects.map(project => (
                        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                            <div>
                                <h3>{project.frontmatter.title}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
}


