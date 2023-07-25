import React from 'react';
import useViewport from '../../hooks/useViewport';
import Image from 'next/image';
import styles from './intro.module.scss';

export type IntroProps = {
  onSubscribeNow: () => void;
  image: string;
  paymentImage: string;
  eligibleImage: string;
  refurbishedImage: string;
};

const Intro: React.FC<IntroProps> = ({
  onSubscribeNow,
  image,
  paymentImage,
  eligibleImage,
  refurbishedImage,
}) => {
  const { width } = useViewport();
  const breakpoint = 720;
  const isMobile = width < breakpoint;

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.title}>Introducing Gazelle Flex.</div>
        <div className={styles.price}>As low as $19.99/month.</div>
        <div className={styles.termsList}>
          <div className={styles.termsListItem}>
            <Image
              src={paymentImage}
              alt="payment"
              width={isMobile ? 16 : 24}
              height={isMobile ? 16 : 24}
              style={{
                marginRight: isMobile ? 10.3 : 10.2,
                marginTop: isMobile ? 3 : 0,
              }}
            />
            <div className={styles.termsLabel}>One low monthly payment</div>
          </div>
          <div className={styles.termsListItem}>
            <Image
              src={eligibleImage}
              alt="eligible"
              width={isMobile ? 14 : 21}
              height={isMobile ? 16 : 24}
              style={{
                marginRight: isMobile ? 13 : 13.5,
                marginTop: isMobile ? 3 : 0,
              }}
            />
            <div className={styles.termsLabel}>
              Eligible for upgrade after 6 months
            </div>
          </div>
          <div className={styles.termsListItem}>
            <Image
              src={refurbishedImage}
              alt="refurbished"
              width={isMobile ? 11 : 16.5}
              height={isMobile ? 16 : 24}
              style={{
                marginRight: isMobile ? 14.5 : 15.75,
                marginTop: isMobile ? 3 : 0,
              }}
            />
            <div className={styles.termsLabel}>
              Get a refurbished, unlocked phone and use it with any carriet
            </div>
          </div>
        </div>
        <button className={styles.styledButton} onClick={onSubscribeNow}>Subscribe Now</button>
        <div className={styles.eligibilityWrapper}>
          <div className={styles.subscriber}>Already a subscriber?</div>
          <div className={styles.eligibility}>
            Check your upgrade eligibility now.
          </div>
        </div>
      </div>
      {!isMobile && (
        <div className={styles.imageWrapper}>
          <Image src={image} alt="shop" width={64} height={56} />
        </div>
      )}
    </div>
  );
};

export default Intro;
