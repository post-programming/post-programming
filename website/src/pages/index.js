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
    description: (
      <>
      Reductive Boilerplate Transpiler
      </>
    )
  },
  {
    title: 'Diagram',
    imageUrl: 'img/diagram.png',
    description: (
      <>
      Synthesis, I/O, and Map Technology
      </>
    )
  },
  {
    title: 'Book',
    imageUrl: 'img/book.png',
    description: (
      <>
      Integrated Open Innovation Research
      </>
    )
  }
]

function Feature ({ imageUrl, title, href, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={classnames('col col--4', styles.feature)}>
   
        {imgUrl && (
          <div className='text--center'>
            <img className={styles.featureImage} src={imgUrl} alt={title} />
            <h3>&lt;{title}&gt; {description}</h3>
          </div>
        )}
      
    </div>
  )
}

function Home () {
  return (
    <Layout
      description='Dev Photosynthesis'
    >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>Post-Programming</h1>
          <p className='hero__subtitle'>Automata Autonomous Clélie Cloud</p>
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
