module.exports = {
  title: 'Post-Programming',
  tagline: 'Automata Autonomous Clélie Cloud',
  url: 'https://paxos-raft.com',
  baseUrl: '/',
  favicon: 'img/icon.png',
  organizationName: 'paxos-raft', // Usually your GitHub org/user name.
  projectName: 'paxos-raft', // Usually your repo name.
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
      trackingID: 'G-KLXGBPP8GX'
    },
    navbar: {
      title: 'paxos-raft',
      logo: {
        alt: 'paxos-raft',
        src: 'img/logo.svg'
      },
      links: [
        {
          href: 'https://github.com/paxos-raft/paxos-raft',
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
              label: 'Style Guide',
              to: 'docs/doc1'
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
              href: 'https://github.com/paxos-raft/paxos-raft'
            }
          ]
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/femzrd'
            }
          ]
        }
      ],
      copyright: ` ${new Date().getFullYear()} paxos-raft, Inc.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/paxos-raft/paxos-raft/edit/master/website/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
