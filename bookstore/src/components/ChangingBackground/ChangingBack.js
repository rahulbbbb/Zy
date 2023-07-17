import React, {useState, useEffect} from 'react'
import styles from './ChangingBack.module.css'

const ChangingBack = () => {
  
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
      'https://www.bookswagon.com/images/bannerimages/81_inr.jpg?v=1.8',
      'https://www.bookswagon.com/images/bannerimages/79_inr.jpg?v=1.6',
      'https://www.bookswagon.com/images/bannerimages/82_inr.jpg?v=1.8',
      'https://www.bookswagon.com/images/bannerimages/83_inr.jpg?v=1.8',
      'https://www.bookswagon.com/images/bannerimages/84_inr.jpg?v=1.6'
    ];
  
    const handleDotClick = (index) => {
      setCurrentIndex(index);
    };

   useEffect(() => {
      const interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
      }, 3000);
  
      return () => {
        clearInterval(interval);
      };
    }, [currentIndex]);
  
    return (
      <div className={styles.imageContainer}>
        <div
          className={styles.imageSlider}
          style={{
            transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
            width: `${images.length * 100}%`
          }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} className={styles.image} />
          ))}
        </div>
        <div className={styles.pagination}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  };

export default ChangingBack