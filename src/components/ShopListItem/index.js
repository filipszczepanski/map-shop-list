import React from 'react';
import './style.css';

const ShopListItem = (props) => {
  const image = props.logo ? <img src={props.logo} height="15" alt={props.name} /> : <span class="noimage">no image</span>;
  return (
    <li className="ShopListItem" onClick={props.onClick}>
      {props.name} | {props.address} | {image}
    </li>
  );
}

export default ShopListItem;
