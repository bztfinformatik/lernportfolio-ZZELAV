// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lernportfolio M133',
  tagline: 'Lernportfolio von Valentino Panico 🦕',
  url: 'https://bztfinformatik.github.io',
  baseUrl: '/lernportfolio-ZZELAV/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'data/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bztfinformatik', // Usually your GitHub org/user name.
  projectName: 'lernportfolio-ZZELAV', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          path: 'docs',
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'appendix',
        path: 'appendix',
        routeBasePath: 'appendix',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
    localeConfigs: {
      de: {
        htmlLang: 'de-CH',
      },
    },
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Lernportfolio M133',
        logo: {
          alt: 'Docusaurus Logo',
          src: 'data/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Doku 📖',
          },
          {
            to: '/appendix/',
            label: 'Appendix 📚',
            position: 'left',
            activeBaseRegex: `/appendix/`,
          },
          {
            to: '/docs/tags/',
            label: 'Tags 🔎',
            position: 'left',
          },
          {
            href: 'https://github.com/bztfinformatik/lernportfolio-ZZELAV',
            position: 'right',
            className: 'header-github-link',
          },
          {
            href: 'https://moodle.bztf.ch/my/',
            position: 'right',
            className: 'header-moodle-link',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Doku',
                to: '/docs',
              },
              {
                label: 'Appendix',
                to: '/appendix',
              },
              {
                label: 'Tags',
                to: '/docs/tags',
              }
            ]
          },
          {
            title: ' ',
          },
          {
            title: ' ',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/bztfinformatik/lernportfolio-ZZELAV',
              },
              {
                label: 'Moodle',
                href: 'https://moodle.bztf.ch/my/',
              },
              {
                label: 'Markdown Guide',
                href: 'https://www.markdownguide.org/',
              },
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
            ],
          },
        ],
        copyright: `v1.7<br>Copyright © ${new Date().getFullYear()} Lernjournal, Valentino Panico. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'java', 'php', 'docker', 'markup'],
      },
    }),
};

module.exports = config;
