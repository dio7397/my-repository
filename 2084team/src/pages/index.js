import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';

import Article from '../components/Article';
import Wrapper from '../components/Wrapper';
import SectionTitle from '../components/SectionTitle';

const IndexPage = ({ data }) => {
  // console.log(data);

  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Wrapper>
      <Helmet title={`2084团队 | ${config.siteTitle}`} />
      <SectionTitle>最近更新</SectionTitle>
      {posts.map(({ node: post }) => {
        const { slug } = post.frontmatter;
        return (
          <Article
            wordCount={post.wordCount.words}
            timeToRead={post.timeToRead}
            excerpt={post.excerpt}
            key={slug}
            {...post.frontmatter}
          />
        );
      })}
    </Wrapper>
  );
};

export default IndexPage;
/* eslint no-undef: off */
// filter: { frontmatter: { draft: { ne: true } } }
export const updateRecentlyQuery = graphql`
  query IndexQuery {
   allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: frontmatter___date }
     
    ) {
      edges {
        node {
          wordCount {
            words
          }
          timeToRead
          frontmatter {
            slug
            cover
            date
            title
            tags
            category
          }
          excerpt(format: PLAIN, pruneLength: 200)
        }
      }
    }
  }
`;
