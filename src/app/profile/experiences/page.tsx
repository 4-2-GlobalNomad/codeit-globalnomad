import MeatballIcon from '@/assets/icons/meatball.svg';
import StarIcon from '@/assets/icons/star-fill.svg';
import testImage from '@/assets/images/test-image-experience1.png';
import Image from 'next/image';
import React from 'react';
import * as styles from './page.css';

export default function ExperiencesPage() {
  return (
    <div className={styles.experiencesPageContainer}>
      <div className={styles.topLayout}>
        <h2 className={styles.h2Title}>내 체험 관리</h2>
        <button className={styles.createButton}>체험 등록하기</button>
      </div>
      <section className={styles.cardSectionList}>
        <div className={styles.cardSection}>
          <div className={styles.cardImageContainer}>
            <Image
              src={testImage}
              width={520}
              height={272}
              loading='lazy'
              alt={'체험 이미지'}
              className={styles.responsiveImage}
            />
          </div>
          <div className={styles.cardContentLayout}>
            <div className={styles.cardTopLayout}>
              <div className={styles.starRatingLayout}>
                {/* TODO: rating 공용 컴포넌트 적용하기 */}
                <StarIcon width={19} height={19} />
                <span> 4.9</span>
                <span> (293)</span>
              </div>
              <h3 className={styles.h3Title}>함께 배우면 즐거운 스트릿 댄스</h3>
            </div>
            <div className={styles.cardBottomLayout}>
              <p className={styles.priceText}>₩10,000</p>
              {/* TODO: dropdown 공용 컴포넌트 적용하기 */}
              <button>
                <MeatballIcon width={40} height={40} />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.cardSection}>
          <div className={styles.cardImageContainer}>
            <Image
              src={testImage}
              width={520}
              height={272}
              loading='lazy'
              alt={'체험 이미지'}
              className={styles.responsiveImage}
            />
          </div>
          <div className={styles.cardContentLayout}>
            <div className={styles.cardTopLayout}>
              <div className={styles.starRatingLayout}>
                {/* TODO: rating 공용 컴포넌트 적용하기 */}
                <StarIcon width={19} height={19} />
                <span> 4.9</span>
                <span> (293)</span>
              </div>
              <h3 className={styles.h3Title}>함께 배우면 즐거운 스트릿 댄스</h3>
            </div>
            <div className={styles.cardBottomLayout}>
              <p className={styles.priceText}>₩10,000</p>
              {/* TODO: dropdown 공용 컴포넌트 적용하기 */}
              <button>
                <MeatballIcon width={40} height={40} />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.cardSection}>
          <div className={styles.cardImageContainer}>
            <Image
              src={testImage}
              width={520}
              height={272}
              loading='lazy'
              alt={'체험 이미지'}
              className={styles.responsiveImage}
            />
          </div>
          <div className={styles.cardContentLayout}>
            <div className={styles.cardTopLayout}>
              <div className={styles.starRatingLayout}>
                {/* TODO: rating 공용 컴포넌트 적용하기 */}
                <StarIcon width={19} height={19} />
                <span> 4.9</span>
                <span> (293)</span>
              </div>
              <h3 className={styles.h3Title}>함께 배우면 즐거운 스트릿 댄스</h3>
            </div>
            <div className={styles.cardBottomLayout}>
              <p className={styles.priceText}>₩10,000</p>
              {/* TODO: dropdown 공용 컴포넌트 적용하기 */}
              <button>
                <MeatballIcon width={40} height={40} />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.cardSection}>
          <div className={styles.cardImageContainer}>
            <Image
              src={testImage}
              width={520}
              height={272}
              loading='lazy'
              alt={'체험 이미지'}
              className={styles.responsiveImage}
            />
          </div>
          <div className={styles.cardContentLayout}>
            <div className={styles.cardTopLayout}>
              <div className={styles.starRatingLayout}>
                {/* TODO: rating 공용 컴포넌트 적용하기 */}
                <StarIcon width={19} height={19} />
                <span> 4.9</span>
                <span> (293)</span>
              </div>
              <h3 className={styles.h3Title}>함께 배우면 즐거운 스트릿 댄스</h3>
            </div>
            <div className={styles.cardBottomLayout}>
              <p className={styles.priceText}>₩10,000</p>
              {/* TODO: dropdown 공용 컴포넌트 적용하기 */}
              <button>
                <MeatballIcon width={40} height={40} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
