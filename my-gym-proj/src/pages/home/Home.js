import React, { useState, useEffect } from 'react';

import style from "./home.module.css";
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const quotes = [
    "Exercise should be regarded as tribute to the heart",
    "The only bad workout is the one that didn't happen.",
    "Nothing will work unless you do",
    "All progress takes place outside the comfort zone.",
    "Success is usually the culmination of controlling failure."
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000); // Change the duration (in milliseconds) between each quote here

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={style.mainContainer}>
      <div className={style.homeContainer}>
        <div className={style.homeText}>
          <h1>
            {quotes[currentQuoteIndex]}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
