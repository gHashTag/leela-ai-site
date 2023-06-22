import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import { translate } from '@docusaurus/Translate'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: (
      <>
        {translate({
          id: 'easytouse'
        })}
      </>
    ),
    Svg: require('@site/static/img/important.svg').default,
    description: (
      <>
        {translate({
          id: 'easytouse.desc'
        })}
      </>
    )
  },
  {
    title: (
      <>
        {translate({
          id: 'focus'
        })}
      </>
    ),
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        {translate({
          id: 'focus.desc'
        })}
      </>
    )
  },
  {
    title: (
      <>
        {translate({
          id: 'supported'
        })}
      </>
    ),
    Svg: require('@site/static/img/ai.svg').default,
    description: (
      <>
        {translate({
          id: 'supported.desc'
        })}
      </>
    )
  }
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
