import React, { useState,useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FaRegCircleUser } from 'react-icons/fa6';
import { GrCart } from 'react-icons/gr';
import { BsArrowRightShort, BsArrowDownShort } from 'react-icons/bs';
import styles from './Navbar.module.css';
import MoreDialogueBox from './MoreDialogueBox';
import { useGlobalContext } from '../../context';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [more, setMore] = useState(false);
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };
 

  function handleMore() {
    setMore(!more);
  }

  return (
    <section className={styles['navbar-bg']}>
      <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
        <div className="container">
          <a className={`navbar-brand font-weight-bold ${styles['navbar-brand']}`} href="/">
           BooksWagon
          </a>

          <button
            className={`navbar-toggler ${styles['navbar-toggler']}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${show ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styles['navbar-nav']}`}>
              <li className={`nav-item ${styles['nav-item']}`}>
                <div className={`nav-link ${styles['nav-link']} ${styles.searchBox}`}>
                  <input type="text" placeholder="Search by Title, Author, Publisher...." className={styles.searchInput}  ref = {searchText}/>
                  <div className={styles.iconBox}>
                    <FaSearch onClick={handleSubmit} className={styles.searchIcon} />
                  </div>
                </div>
              </li>
            </ul>

            <button className={`btn ${styles['btn-style']}`}>
              <FaRegCircleUser style={{ fontSize: '25px' }} /> My Account{' '}
              {!more ? (
                <BsArrowRightShort
                  title="More"
                  onClick={handleMore}
                  style={{ fontSize: '25px', cursor: 'pointer' }}
                /> 
              ) : (
                <BsArrowDownShort style={{ fontSize: '25px', cursor: 'pointer' }} onClick={handleMore} />
              )}
              
            </button>
            {more && <MoreDialogueBox />}
           
            <div className={styles.verticalDivider}></div>
            <GrCart style={{ fontSize: '25px', cursor: 'pointer' }} />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
