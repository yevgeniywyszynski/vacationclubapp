import React from "react";
import styles from './Slider.module.scss'
import Slider from "react-slick";
import {BsClock} from 'react-icons/bs';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

export default class SimpleSlider extends React.Component {
  render() {
    return (
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          <div className={styles.slideItem}>
            <div className={styles.slide}>
              <div className={styles.offerDescription}>
                <h2 className={styles.offerTitle}>Do <span className="pink">70%</span> taniej!</h2>
                <p className={styles.subtitleOffer}>Vakacjuj sie wiecej za mniej </p>
              </div>
            </div>
            <div className={styles.dataPriceWrapper}>
              <p className={styles.variants}>Pakiety od <span className="pink">3099 PLN</span> | 30 nocy</p>
              <p className={styles.varinatsSubtitle}>
                <BsClock />
                <span>
                    Koniec 31.03.22, godz. 23;00
                </span>
              </p>
              <div className={styles.btnCheckWrapper}>
                <button type="button" className={styles.btnCheck}>Sprawdź</button>
              </div>
            </div>
          </div>
          <div className={styles.slideItem}>
            <div className={styles.slide}>
              <div className={styles.offerDescription}>
                <h2 className={styles.offerTitle}>Do <span className="pink">70%</span> taniej!</h2>
                <p className={styles.subtitleOffer}>Vakacjuj sie wiecej za mniej </p>
              </div>
            </div>
            <div className={styles.dataPriceWrapper}>
              <p className={styles.variants}>Pakiety od <span className="pink">3099 PLN</span> | 30 nocy</p>
              <p className={styles.varinatsSubtitle}>
                <BsClock />
                <span>
                    Koniec 31.03.22, godz. 23;00
                </span>
              </p>
              <div className={styles.btnCheckWrapper}>
                <button type="button" className={styles.btnCheck}>Sprawdź</button>
              </div>
            </div>
          </div>
          <div className={styles.slideItem}>
            <div className={styles.slide}>
              <div className={styles.offerDescription}>
                <h2 className={styles.offerTitle}>Do <span className="pink">70%</span> taniej!</h2>
                <p className={styles.subtitleOffer}>Vakacjuj sie wiecej za mniej </p>
              </div>
            </div>
            <div className={styles.dataPriceWrapper}>
              <p className={styles.variants}>Pakiety od <span className="pink">3099 PLN</span> | 30 nocy</p>
              <p className={styles.varinatsSubtitle}>
                <BsClock />
                <span>
                    Koniec 31.03.22, godz. 23;00
                </span>
              </p>
              <div className={styles.btnCheckWrapper}>
                <button type="button" className={styles.btnCheck}>Sprawdź</button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}