module.exports = {
  title: 'post-programming',
  url: 'https://post-programming.com',
  baseUrl: '/',
  favicon: 'img/icon.png',
  organizationName: 'post-programming', // Usually your GitHub org/user name.
  projectName: 'post-programming', // Usually your repo name.
  plugins: [
    '@docusaurus/plugin-google-gtag',
    '@docusaurus/plugin-sitemap',
    {
      cacheTime: 600 * 1000, // 600 sec - cache purge period
      changefreq: 'weekly',
      priority: 0.5
    }
  ],
  themeConfig: {
    disableDarkMode: true,
    gtag: {
      trackingID: 'G-7TWTMBQ4ZP'
    },
    navbar: {
      title: 'post-programming',
      logo: {
        alt: 'post-programming',
        src: 'img/logo.svg'
      },
      links: [
        {
          href: 'https://github.com/post-programming/post-programming',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'NewsReel Programming Guide',
              href: 'https://github.com/post-programming/Art-of-NewsReel-Programming'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/post-programming'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/post-programming/post-programming'
            }
          ]
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/swapZapp'
            }
          ]
        }
      ],
      copyright: ` ${new Date().getFullYear()} post-programming, Inc.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
