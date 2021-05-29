/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
// import Img from 'gatsby-image';

const Content = styled.footer`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media print {
    .power {
      display: none;
    }
  }
`;
/* <p className="icp">
      <a target="_blank" href="http://www.beian.miit.gov.cn/">
        京ICP备16015459号-1
      </a>
    </p>*/
const Footer = () => (
  <Content>
    <div>&copy; {new Date().getFullYear()} by 2084 </div>
    <div className="power">
      Powered by <a href="http://reactjs.org/">React.js</a> &{" "}
      <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
    </div>
  </Content>
);

export default Footer;
