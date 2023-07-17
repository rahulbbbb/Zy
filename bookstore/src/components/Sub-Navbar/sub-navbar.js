import React, { useState } from 'react';
import styles from './sub-navbar.module.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Subnavbar = () => {
  const [isProToolList, setIsProToolList] = useState(false);

  const handleProToolList = () => {
    setIsProToolList(!isProToolList);
  };

  return (
    <>
      <div className={styles.mainContainer1}>
        <div className={styles.container1}>
          <div onClick={handleProToolList} className={styles.item1}>
            <span>Books</span>
            {!isProToolList ? <span><IoIosArrowDown/></span> : <span><IoIosArrowUp/></span>}
          </div>
          {isProToolList && (
            <div className={styles.dialogueBox}>
              <div className={styles.lists}><span>Art & Photography</span></div>
              <div className={styles.lists}><span>Biographies & Memoirs</span></div>
              <div className={styles.lists}><span>Dictionaries & Language</span></div>
              <div className={styles.lists}><span>Literature & literary studies</span></div>
              <div className={styles.lists}><span>English Language Teaching</span></div>
              <div className={styles.lists}><span>Fiction</span></div> 
              <div className={styles.lists}><span>Reference & Encyclopedias</span></div>
              <div className={styles.lists}><span>History & Humanities</span></div> 
              <div className={styles.lists}><span>Society & social sciences</span></div>
              <div className={styles.lists}><span>Business & Economics</span></div>
              <div className={styles.lists}><span>Law</span></div> 
              <div className={styles.lists}><span>Medicine</span></div>
              <div className={styles.lists}><span>Science & Mathematics</span></div> 
              <div className={styles.lists}><span>Environment & Geography</span></div>
              <div className={styles.lists}><span>Technology & Engineering</span></div>
            </div>
          )}
          <div className={styles.item1}>New Arrival</div>
          <div className={styles.item1}>Box Sets</div>
          <div className={styles.item1}>Best Sellers</div>
          <div className={styles.item1}>Fiction Books</div>
          <div className={styles.item1}>Award Winners</div>
          <div className={styles.item1}>Featured Authors</div>
          <div className={styles.item1}>Today's Deal</div>
          <div className={styles.item1}>Request a Book</div>
        </div>
      </div>
    </>
  );
};

export default Subnavbar;
