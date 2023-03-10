import React from 'react';
import styles from "./styles.module.scss";
import  { useState, useRef } from 'react';

export default function Row({isInput,setShowList,units,perunit,price}) {
  const inputRef = useRef(null);

  const handleInputFocus = () => {
    setShowList(true);
  };

  const handleInputBlur = () => {
    setShowList(false);
  };

  return (
    <>
    <div className={styles.row}>
        <div className={styles.row__units}>
            {isInput? 
              <input
                ref={inputRef}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder="Units"
              />
              :
              <span className={styles.row__units_number}>{units}</span>
            }
        </div>
        <span>
        <div className={styles.row__perunit}>
            <span className={styles.row__perunit_number}>₹{perunit}/unit</span>
            <span className={styles.row__perunit_price}>₹{price}</span>
        </div>
        </span>
    </div>
    </>
  )
}
