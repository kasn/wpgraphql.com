import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Layout } from 'antd';
import '../style.css'
import SiteHeader from '../SiteHeader'
import Container from '../Container'

const SiteLayout = ({ children, location = null }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Layout style={{
        background:'#fff'
      }}>
        <SiteHeader location={location} siteTitle={data.site.siteMetadata.title} />
        <div style={{ marginTop: '66px' }}>
          {children}
          <footer style={{
            width: '100%',
            padding: '40px 0',
            background: '#eaeaea',
            zIndex: 9,
            position: 'relative'
          }}>
            <Container>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </Container>
          </footer>
        </div>

      </Layout>
    )}
  />
);

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SiteLayout
