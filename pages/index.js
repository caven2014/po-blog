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
          <li>
            <Link to={prefixLink('/frontEnd/ajax/')}>AJAX原理及实践</Link>
          </li>
          {/* <li>
            <Link to={prefixLink('/frontEnd/fullstack/')}>全栈工程师知识点汇总</Link>
          </li>
          <li>
            <Link to={prefixLink('/frontEnd/awsStart/')}>AWS入门总结</Link>
          </li> */}
        </ol>
      </div>
    )
  }
}
