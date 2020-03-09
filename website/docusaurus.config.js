module.exports = {
  title: 'Post-Programming',
  tagline: 'Automata Autonomous Clélie Cloud',
  url: 'https://paxos-raft.com',
  baseUrl: '/',
  favicon: 'img/icon.png',
  organizationName: 'paxos-raft', // Usually your GitHub org/user name.
  projectName: 'paxos-raft', // Usually your repo name.
  plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    disableDarkMode: true,
    algolia: {
      apiKey: 'api-key',
      indexName: 'index-name',
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    googleAnalytics: {
      trackingID: 'G-YBCBRSE693',
      // Optional fields.
      anonymizeIP: false // Should IPs be anonymized?
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
          position: 'left'
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
