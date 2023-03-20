import { type ReactElement } from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';

const Hero = (): ReactElement => {
  return (
    <div className={styles.hero}>
      <Image
        src="/iron-man.jpg"
        alt="foto"
        width={528}
        height={528}
        className={styles.photo}
      />
      <div className={styles.about}>
        <div className={styles.title}>Full Stack Developer</div>
        <div className={styles.subtitle}>WILLBER PILARES</div>
        <div className={styles.resume}>
          I’m passionate about creating and learning about technology, with high
          capacities in analysis and solutions, a responsible person with
          initiative, creativity and punctuality, I gladly assume the challenges
          and goals that may arise, with ease of teamwork and management of
          interpersonal relationships, with the focus on achieving results.
        </div>
        <div className={styles.buttonSet}>
          <button className={styles.button1}>Resume</button>
          <button className={styles.button2}>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
