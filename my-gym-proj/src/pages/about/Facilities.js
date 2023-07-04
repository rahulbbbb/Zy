import React, {useState} from 'react'
import style from "./aboutPageCss/facilities.module.css"
import {GiLifeSupport} from "react-icons/gi"
import{CgGym, CgCommunity} from "react-icons/cg"
import {TbClockFilled} from "react-icons/tb"

const Facilities = () => {

    
      const [activeSquare, setActiveSquare] = useState(null);
    
      const handleSquareClick = (index) => {
        setActiveSquare(index);
      };
    
      return (
        <div className={style.facilitiesContainer}>
          <h1>Our Facilities</h1>
          <div className={style.mainContainer}>
            <div
              className={`${style.square} ${
                activeSquare === 0 ? style.activeSquare : ''
              }`}
              onClick={() => handleSquareClick(0)}
            >
              <GiLifeSupport size={80} color="maroon" />
              <h1>Support</h1>
              <p>
                What happens when you enroll in the top membership in India? You
                get a free, personalized Get Started Plan when you join. Our
                friendly, professional staff is trained to help you along your
                fitness journey, no matter how much support you need.
              </p>
            </div>
            <div
              className={`${style.square} ${
                activeSquare === 1 ? style.activeSquare : ''
              }`}
              onClick={() => handleSquareClick(1)}
            >
              <CgGym size={80} color="maroon" />
              <h1>Tools & Training</h1>
              <p>
                Getting to a healthier place is about more than going to the gym.
                That's why we offer personal training and classes when you're here,
                and the right tools to keep you on track when you're not.
              </p>
            </div>
            <div
              className={`${style.square} ${
                activeSquare === 2 ? style.activeSquare : ''
              }`}
              onClick={() => handleSquareClick(2)}
            >
              <TbClockFilled size={80} color="maroon" />
              <h1>Convenience</h1>
              <p>
                24/7 access to more than 4,500 locations worldwide and nearly 100
                in India. You’re joining the most convenient gym with the best gym
                membership on the planet!
              </p>
            </div>
            <div
              className={`${style.square} ${
                activeSquare === 3 ? style.activeSquare : ''
              }`}
              onClick={() => handleSquareClick(3)}
            >
              <CgCommunity size={80} color="maroon" />
              <h1>Community</h1>
              <p>
                You're not just joining a gym. You're joining a supportive community
                of like-minded people who are here to give you the encouragement you
                need.
              </p>
            </div>
          </div>
        </div>
      );
    };
    
    export default Facilities;
    
   

