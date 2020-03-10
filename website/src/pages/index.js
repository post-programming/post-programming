import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: 'Code',
    imageUrl: 'img/code.png',
    href: 'https://code.paxos-raft.com/',
    description: (
      <>
      Cross-Code Reproduction At Your Fingertips
      </>
    )
  },
  {
    title: 'Diagram',
    imageUrl: 'img/diagram.png',
    href: 'https://diagram.paxos-raft.com/',
    description: (
      <>
        Draw, Connect, and Map Technology
      </>
    )
  },
  {
    title: 'Book',
    imageUrl: 'img/book.png',
    href: 'https://book.paxos-raft.com/',
    description: (
      <>
        Deep Dive Innovation Research
      </>
    )
  }
]

function Feature ({ imageUrl, title, href, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={classnames('col col--4', styles.feature)}>
      <Link to={href} target='_blank' rel='noopener noreferrer'>
        {imgUrl && (
          <div className='text--center'>
            <img className={styles.featureImage} src={imgUrl} alt={title} />
            <h3>&lt;{title}&gt; {description}</h3>
          </div>
        )}
      </Link>
    </div>
  )
}

function Home () {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`${siteConfig.organizationName}`}
      description='Automata Autonomous Clélie Cloud'
    >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
