import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { Comment } from '@site/src/components/Comment';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img src='img/saladpuk200.png' alt='Saladpuk.com' className='hero__logo' />
        <blockquote className={styles.blockquote}>
          “ผมรู้สึกว่าการเขียนโค้ดเป็นเรื่องสนุก เพราะมันเหมือนได้เล่นเกมแก้ปัญหาตลอดเวลา และถ้าเราได้ทำสิ่งที่เรารักทุกวัน ชีวิตนี้ก็เหมือนเราได้เล่นเกมตลอดไปโดยไม่ต้องทำงานเลย
          ด้วยความรู้สึกนี้เลยทำให้ผมสามารถนั่งเขียนโค้ดได้สนุกทุกวันโดยไม่เคยเบื่อเลย พอหลายๆปีเข้าก็รู้สึกอยากจะแชร์ความรู้ที่มีให้กับสังคมที่ผมรัก เพื่อจะได้ช่วยกันต่อยอดให้ประเทศอุ๊งๆของเราได้มีเหล่าโปรแกรมเมอร์ที่แข็งแกร่งเพิ่มขึ้นเย๊อะๆงุยล่ะ เลยอยากจะเป็นกำลังใจให้กับผู้ที่เริ่มต้นศึกษา หรือ กำลังค้นหาความรู้ใหม่ๆนะฮั๊ฟ” — <b>ดช.แมวน้ำ</b>😊
        </blockquote>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/roadmap">
            🎯 เลือกเนื้อหาที่สนใจ
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`ความในใจ`}
      description="การเขียนโค้ดเป็นเรื่องสนุก เพราะมันเหมือนได้เล่นเกมแก้ปัญหาตลอดเวลา🥰">
      <HomepageHeader />
      <div className="container">
        <Comment />
      </div>
    </Layout>
  );
}
