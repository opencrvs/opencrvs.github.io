const siteConfig = {
  title: "OpenCRVS Documentation", // Title for your website.
  tagline: "",
  url: "https://opencrvs.github.io/", // Your website URL
  baseUrl: "/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "opencrvs-core",
  organizationName: "opencrvs",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'
  favicon: "img/favicon.ico",

  themeConfig: {
    disableDarkMode: true,
    defaultDarkMode: false,
    footer: {
      logo: {
        alt: "OpenCRVS Logo",
        src: "img/logo.svg",
        href: "/",
      },
      copyright: `Copyright © ${new Date().getFullYear()} The OpenCRVS Authors. OpenCRVS and the OpenCRVS graphic logo are (registered/a) trademark(s) of Plan International.`, // You can also put own HTML here.
    },
    navbar: {
      title: "",
      logo: {
        alt: "OpenCRVS Logo",
        src: "img/logo.svg",
      },
      links: [
        { to: "introduction", label: "Docs", position: "right" },
        {
          href: "https://github.com/opencrvs/opencrvs-core",
          label: "Code",
          position: "right",
        },
      ],
    },
    // Equivalent to `docsSideNavCollapsible`.
    sidebarCollapsible: false,
    // ...
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://opencrvs.github.io/opencrvs-core/js/gitter.js"],

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,
};

module.exports = {
  ...siteConfig,
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // Docs folder path relative to website dir.
          path: "../docs",
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve("./sidebars.json"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        // ...
      },
    ],
  ],
};
