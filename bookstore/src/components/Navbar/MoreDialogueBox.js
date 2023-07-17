import React, { useState } from "react";
import { LuVerified, LuRocket } from "react-icons/lu";
import { BsPersonUp, BsArrowUpRightSquare } from 'react-icons/bs';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { IoHelpCircleOutline } from 'react-icons/io5'
import { BiBarChart, BiMoney } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { TbAccessible } from 'react-icons/tb';
import styles from './MoreDialogueBox.module.css';

function MoreDialogueBox() {

  const [isPersonalList, setIsPersonalList] = useState(false);
  const [isProToolList, setIsProToolList] = useState(false);
  const [isSettingsList, setIsSettingsList] = useState(false);

  const handleCreatorList = ()=> {
    setIsPersonalList(!isPersonalList);
  }

  const handleProToolList = ()=> {
    setIsProToolList(!isProToolList);
  }

  const handleSettingsList = ()=> {
    setIsSettingsList(!isSettingsList);
  }

  return (
    <div className={styles.main}>
        <div > <button className={styles.itemButton}>Login</button></div>
        <div className={styles.itemSignup}><a>New to Bookswagon?<br/>Sign Up</a></div>
        <div className={styles.itemContainer}><span><LuVerified/></span><span>Your Account</span></div>
        <div className={styles.itemContainer}><span><BsPersonUp/></span><span>Requests</span></div>
            <div onClick={handleCreatorList} className={styles.listContainer}><span>Personal</span>
              {
                !isPersonalList ? 
                <span><IoIosArrowDown/></span> : 
                <span><IoIosArrowUp/></span>
              }
            </div>
              { 
                isPersonalList &&
                <div className={styles.lists}><span><BiBarChart/></span><span>Analytics</span></div>
              }
            <div onClick={handleProToolList} className={styles.listContainer}><span>Orders</span>
            {
              !isProToolList ?
              <span><IoIosArrowDown/></span> :
              <span><IoIosArrowUp/></span>
            }
            </div>
            {
              isProToolList && 
              <div className={styles.container}>
                <div className={styles.lists}><span><LuRocket/></span><span>Your wishlist</span></div>
                <div className={styles.lists}><span><BsArrowUpRightSquare/></span><span>Your Gift Certificate</span></div>
                <div className={styles.lists}><span><BiMoney/></span><span>Your Addresses</span></div>
              </div>
            }
            <div onClick={handleSettingsList} className={styles.listContainer}><span>Settings and Support</span>
            {
              !isSettingsList ?
              <span><IoIosArrowDown/></span> :
              <span><IoIosArrowUp/></span>
            }
            </div>
            {
              isSettingsList &&
              <div className={styles.container} >
                <div className={styles.lists}><span><FiSettings/></span><span>Settings and privacy</span></div>
                <div className={styles.lists}><span><IoHelpCircleOutline/></span><span>Help Center</span></div>
                <div className={styles.lists}><span><HiOutlinePencilSquare/></span><span>Display</span></div>
                <div className={styles.lists}><span><TbAccessible/></span><span>Change Passwords</span></div>
            </div>  
            }      
    </div>
  );
}

export default MoreDialogueBox;
