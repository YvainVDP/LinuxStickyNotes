import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'What it is',
    Svg: require('@site/static/img/cat-svgrepo-com.svg').default,
    description: (
      <>
        Sticky notes to help me what I need to do when I reinstall Linux.
      </>
    ),
  },
  {
    title: 'What it isn\'t',
    Svg: require('@site/static/img/catsvg2.svg').default,
    description: (
      <>
        A guide of how to understand Linux and a stylish website.
      </>
    ),
  },
  {
    title: 'Thank you for your understanding',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>

      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
  );
}
