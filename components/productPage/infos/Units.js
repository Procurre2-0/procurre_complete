import React from 'react'
import styles from "./styles.module.scss";
import { FormControl, InputLabel, Link, MenuItem, Select } from "@mui/material";
import  { useState, useRef } from 'react';
import Row from './Row';
export default function Units() {
  const [showList, setShowList] = useState(false);


  return (
    <div className={styles.input}>
      <Row isInput="yes" setShowList={setShowList} units="123" perunit="0.23" price="243"/>
      {showList && (
      <div style={{ maxHeight: '200px', overflowY: 'scroll' 
    }} className={styles.input__dropdown}>
          <ul>
            <li><Row  setShowList={setShowList} units="123" perunit="0.23" price="243"/></li>
            <li><Row units="123" perunit="0.23" price="243"/></li>
            <li><Row units="123" perunit="0.23" price="243"/></li>
            <li><Row units="123" perunit="0.23" price="243"/></li>
            <li><Row units="123" perunit="0.23" price="243"/></li>
            <li><Row units="123" perunit="0.23" price="243"/></li>
            <li><Row units="123" perunit="0.23" price="243"/></li>
            <li><Row units="123" perunit="0.23" price="243"/></li>
            <li><Row units="123" perunit="0.23" price="243"/></li>
            <li><Row units="123" perunit="0.23" price="243"/></li>
            <li><Row units="123" perunit="0.23" price="243"/></li>
          </ul>
        </div>
      )}
    </div>
  );
}

// function Units() {
//   return (
//     <div>
//       <div className={styles.infos__sizes}>
//           <h4>Select a Size : </h4>
          
//           <FormControl fullWidth>
//             <InputLabel id="SizeInputLabel">Size</InputLabel>
//             <Select 
//               labelId="Size"
//               id="SizeSelect"
//               value={sizeString}
//               label="Size"
//               // onChange={handleSizeChange}
//             >
//               {product.sizes.map((productSize, i) => (
              
//                 <MenuItem key={i} value={productSize.size}>
//                   <Link 
//                     href={`/product/${product.slug}?style=${router.query.style}&size=${i}`}
//                   >
//                   {productSize.size}
//                   </Link>
//                 </MenuItem>
//               ))}

//             </Select>
//           </FormControl>

          

          
//         </div>
//     </div>
//   )
// }


