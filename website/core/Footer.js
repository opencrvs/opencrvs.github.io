/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="125"
                height="28.47"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl("#", this.props.language)}>Product overview</a>
            <a href={this.docUrl("#", this.props.language)}>User types</a>
            <a href={this.docUrl("#", this.props.language)}>Core functions</a>
            <a href={this.docUrl("#", this.props.language)}>
              Support functions
            </a>
            <a href={this.docUrl("#", this.props.language)}>
              System admin functions
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.docUrl("#", this.props.language)}>Help</a>

            <a href="https://www.opencrvs.org/case-studies" target="_blank">
              Case studies
            </a>
          </div>
          <div>
            <h5>Legal</h5>
            <a href="#" target="_blank">
              Privacy
            </a>
          </div>
          <div>
            <h5>Social</h5>
            <a className="gitter" href="#">
              Gitter
            </a>
            <a href="https://github.com/opencrvs/opencrvs-core" target="_blank">
              GitHub
            </a>
            <a
              className="github-button"
              href="https://github.com/opencrvs/opencrvs-core/subscription"
              data-icon="octicon-eye"
              aria-label="Watch opencrvs/opencrvs-core on GitHub"
            >
              Watch
            </a>
            <br />
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/opencrvs/opencrvs-core/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  target="_blank"
                  className="twitter-follow-button"
                >
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
        <script
          async
          defer
          src="https://sidecar.gitter.im/dist/sidecar.v1.js"
        ></script>
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </footer>
    );
  }
}

module.exports = Footer;
