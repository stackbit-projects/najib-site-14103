import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import Header from '../components/Header';
import {htmlToReact, markdownify} from '../utils';
import Footer from '../components/Footer';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <Header {...this.props} site={this.props} page={this.props.page} image={_.get(this.props, 'page.frontmatter.img_path', null)} />
              <div id="content" className="site-content">
                <main id="main" className="site-main inner">
                  <article className="post page post-full">
                    <header className="post-header">
                      <h1 className="post-title">{_.get(this.props, 'page.frontmatter.title', null)}</h1>
                    </header>
                    {_.get(this.props, 'page.frontmatter.subtitle', null) && (
                    <div className="post-subtitle">
                      {htmlToReact(_.get(this.props, 'page.frontmatter.subtitle', null))}
                    </div>
                    )}
                    <div className="post-content">
                      {markdownify(_.get(this.props, 'page.markdown', null))}
                    </div>
                  </article>
                </main>
                <Footer {...this.props} site={this.props} page={this.props.page} image={_.get(this.props, 'page.frontmatter.img_path', null)} />
              </div>
            </Layout>
        );
    }
}
