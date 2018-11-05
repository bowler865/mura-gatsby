/*import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet>
		    <title>Gatsby</title>
		    <meta name='description' content='Sample' />
		    <meta name='keywords' content='sample, something' />
		    <script src='https://it-demo.muraxp.com/core/modules/v1/core_assets/js/mura.min.js'></script>
	    </Helmet>
        <div
          style={{
            background: `rebeccapurple`,
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Gatsby
              </Link>
            </h1>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }
}*/
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
	    <title>{data.site.siteMetadata.title}></title>
	    <meta name='description' content='Sample' />
	    <meta name='keywords' content='sample, something' />
	    <script src='http://it-demo.muraxp.com/core/modules/v1/core_assets/js/mura.min.js'></script>
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
