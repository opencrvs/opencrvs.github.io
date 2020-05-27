/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

function Footer() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { themeConfig = {} } = siteConfig;
  const { footer } = themeConfig;

  const { copyright, links = [], logo = {} } = footer || {};
  const logoUrl = useBaseUrl(logo.src);

  useEffect(() => {
    console.log("Hi");
    const gitter = document.createElement("script");

    gitter.src = "https://sidecar.gitter.im/dist/sidecar.v1.js";
    gitter.async = true;

    const github = document.createElement("script");

    github.src = "https://buttons.github.io/buttons.js";
    github.async = true;

    document.body.appendChild(gitter);

    document.body.appendChild(github);
  }, []);

  if (!footer) {
    return null;
  }

  return (
    <footer className="nav-footer" id="footer">
      <section className="sitemap">
        <a href={useBaseUrl("/")} className="nav-home">
          <img
            src={logoUrl}
            alt={siteConfig.title}
            width="125"
            height="28.47"
          />
        </a>
        <div>
          <h5>Docs</h5>
          <a href={useBaseUrl("#")}>Product overview</a>
          <a href={useBaseUrl("#")}>User types</a>
          <a href={useBaseUrl("#")}>Core functions</a>
          <a href={useBaseUrl("#")}>Support functions</a>
          <a href={useBaseUrl("#")}>System admin functions</a>
        </div>
        <div>
          <h5>Community</h5>
          <a href={useBaseUrl("#")}>Help</a>

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
          <a className="gitter">Gitter</a>
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
            href="https://github.com/opencrvs/opencrvs-core"
            data-icon="octicon-star"
            data-count-href="/opencrvs/opencrvs-core/stargazers"
            data-show-count="true"
            data-count-aria-label="# stargazers on GitHub"
            aria-label="Star this project on GitHub"
          >
            Star
          </a>
        </div>
      </section>

      <section className="copyright">{copyright}</section>
    </footer>
  );
}

export default Footer;