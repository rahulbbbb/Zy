import React from "react";
import styles from "./SlidingIcons.module.css";

const SlidingIcons = () => {
  return (
    <>
    
      <div className={styles.container3}>
        <div className={styles.item}>
          <div>
            <img src="https://www.bookswagon.com/Images/staticimages/icon8.png" />
          </div>
          <div>Award Winners</div>
        </div>
        <div className={styles.item}>
          <div>
            <img src="https://www.bookswagon.com/Images/staticimages/icon1.png" />
          </div>
          <div>Best Seller</div>
        </div>

        <div className={styles.item}>
          <div>
            <img src="https://www.bookswagon.com/Images/staticimages/TodaysDeal.png" />
          </div>
          <div>Today's Deal</div>
        </div>
        <div className={styles.item}>
          <div>
            <img src="https://www.bookswagon.com/Images/staticimages/tarot.png" />
          </div>
          <div>Tarot Cards</div>
        </div>
        <div className={styles.item}>
          <div>
            <img src="https://www.bookswagon.com/Images/staticimages/icon5.png" />
          </div>
          <div>Fictions Books</div>
        </div>
        <div className={styles.item}>
          <div>
            <img src="https://www.bookswagon.com/Images/staticimages/icon2.png" />
          </div>
          <div>New Arrivals</div>
        </div>
        <div className={styles.item}>
          <div>
            <img src="https://www.bookswagon.com/Images/staticimages/icon7.png" />
          </div>
          <div>International <br/>Best Sellers</div>
        </div>
        <div className={styles.item}>
          <div>
            <img src="https://www.bookswagon.com/Images/staticimages/icon4.png" />
          </div>
          <div>Box Sets</div>
        </div>
      </div>
    </>
  );
};

export default SlidingIcons;
