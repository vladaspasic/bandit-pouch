import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from './header';
import Footer from './footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'highlight.js/styles/github.css';
import '../../../dist/bandit-pouch.css';
import './layout.css';

const LayoutBody = ({ children, data }) => {
  const { site = {} } = data;
  const { siteMetadata = {} } = site;

  return (
    <>
      <Helmet
        title={siteMetadata.title}
        meta={[{
          name: 'description', content: siteMetadata.description,
        }, {
          name: 'keywords', content: 'kayak, react, redux',
        }]}
        script={[{
          type: 'text/javascript', src: 'https://buttons.github.io/buttons.js',
        }]}
      >
        <html lang="en" />
        <link rel="canonical" href="https://kayak.github.io/bandit-pouch" />
      </Helmet>
      <Header siteTitle={siteMetadata.title} />

      <Grid>
        <Row>
          <Col xs={12}>
            {children}
          </Col>
        </Row>
      </Grid>

      <Footer {...siteMetadata.library} />
    </>
  );
};

LayoutBody.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        library {
          name
          version
        }
      }
    }
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <LayoutBody data={data}>
        {children}
      </LayoutBody>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
