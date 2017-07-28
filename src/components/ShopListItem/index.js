import React from 'react';
import './style.css';

const ShopListItem = (props) => {
  let active = (props.isChecked === true) ? 'active' : '';
  return (
    <li className={`ShopListItem ${active}`} onClick={props.onClick}>
      {props.name} | {props.address}
    </li>
  );
}

export default ShopListItem;
