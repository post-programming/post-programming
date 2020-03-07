module.exports = {
  title: 'paxos-raft',
  tagline: 'Automata Autonomous Clélie Cloud',
  url: 'https://paxos-raft.netlify.com',
  baseUrl: '/website',
  favicon: 'img/favicon.ico',
  organizationName: 'paxos-raft', // Usually your GitHub org/user name.
  projectName: 'paxos-raft', // Usually your repo name.
  themeConfig: {
  disableDarkMode: true,
  algolia: {
    apiKey: 'api-key',
    indexName: 'index-name',
    algoliaOptions: {}, // Optional, if provided by Algolia
  },
    navbar: {
      title: 'paxos-raft',
      logo: {
        alt: 'paxos-raft',
        src: 'img/logo.svg',
      },
      links: [
    
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/post-programming',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/paxos-raft/paxos-raft',
            }
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/femzrd',
            },
          ],
        },
      ],
      copyright: ` ${new Date().getFullYear()} paxos-raft, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
