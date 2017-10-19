import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <ol>
          <li>
            <Link to={prefixLink('/frontEnd/blogs/')}>160家优秀国外技术公司博客</Link>
          </li>
        </ol>
      </div>
    )
  }
}
