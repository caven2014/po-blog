import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

import './example.less'

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
        <ul className="blog_tag_list">
          <li>
            <Link to={prefixLink('/frontEnd/myPlan/')}>我的工作计划</Link>
          </li>
          <li>
            <Link to={prefixLink('/frontEnd/javascript/')}>Javascript相关</Link>
          </li>
          <li>
            <Link to={prefixLink('/frontEnd/html5/')}>HTML5相关</Link>
          </li>
          <li>
            <Link to={prefixLink('/frontEnd/resource/')}>各种资源</Link>
          </li>
        </ul>
      </div>
    )
  }
}
