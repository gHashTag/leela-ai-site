// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Leela Ai',
  tagline:
    "Leela AI is an application that is a game of self-knowledge and spiritual development based on Vedic wisdom. Your guide here will be Leela's digital avatar, who will facilitate your path to a deep understanding of the nature of all things.",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://leelachakra.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gHashTag', // Usually your GitHub org/user name.
  projectName: 'leela-ai-site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Leela Ai',
        logo: {
          alt: 'Leela Ai Logo',
          src: 'img/logo.png'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs'
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://www.instagram.com/leela.chakra/',
            label: 'Blog',
            position: 'left'
          }
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right'
          // }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/leela.chakra/'
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/leelachakraapp'
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus'
              },
              {
                label: 'Telegram',
                href: 'https://t.me/leelachakraapp'
              },
              {
                label: 'VK',
                href: 'https://vk.com/leela.chakra'
              }
            ]
          },
          {
            title: 'Download App',
            items: [
              {
                label: 'App Store',
                href: 'https://apps.apple.com/ru/app/%D0%B8%D0%B3%D1%80%D0%B0-%D0%BB%D0%B8%D0%BB%D0%B0/id1296604457'
              },
              {
                label: 'Google Play',
                href: 'https://play.google.com/store/apps/details?id=com.leelagame&hl=ru'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Leela Ai, Inc. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}

module.exports = config
