import React from "react";
import {MdKeyboardArrowDown} from "react-icons/md";

import s from "./ToggleAll.module.css"

const ToggleAll = ({toggleIsComplete, itemsLeft}) => {

  return (
    <MdKeyboardArrowDown className={!itemsLeft ? s.toggleAllActive : s.toggleAll} onClick={toggleIsComplete}/>
  )
}

export default ToggleAll;
