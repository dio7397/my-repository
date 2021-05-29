
import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import Wrapper from '../components/Wrapper';
import SectionTitle from '../components/SectionTitle';

const IndexPage = ({ data }) => {
    // console.log(data);
    return (
        <Wrapper>
            <about>
                <h1>{data.site.siteMetadata.title}</h1>
                <p>{data.site.siteMetadata.description}</p>
            </about>
        </Wrapper>
    );
};


export default IndexPage;
export const aboutQuery = graphql`
  query aboutPage {
     site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
