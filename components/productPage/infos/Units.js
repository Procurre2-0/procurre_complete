import React from "react";
import styles from "./styles.module.scss";
import { FormControl, InputLabel, Link, MenuItem, Select } from "@mui/material";
import  { useState, useRef } from 'react';
import Row from './Row';
import { unitsList } from '../../../data/units';

export default function Units() {
  const [showList, setShowList] = useState(false);
  const inputRef = useRef(null);

  const handleClick = (inputValue) => {
    inputRef.current.focus();
    alert(inputValue);
    inputRef.current.value = inputValue;
    inputRef.current.focus();
  }
  const rows = unitsList.map((unit, i) => (
    
    <div key={i} value={unit[0]} onClick={() => handleClick(unit[0])} ><Row inputRef={inputRef}  units={unit[0]} perunit={unit[1]} price={unit[0]*unit[1]}/></div>
  ));

  return (
    <div className={styles.input}>
      <Row isInput="yes" setShowList={setShowList} inputRef={inputRef} />
      {showList && (
        <div 
          style={{ 
            maxHeight: '200px', 
            overflowY: 'scroll' 
          }}
          className={styles.input__dropdown}
        >
          {rows}
        </div>
      )}
    </div>
  );
}

