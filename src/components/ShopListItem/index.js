import React from 'react';
import './style.css';

const ShopListItem = (props) => {
  let image;
  if (props.isChecked === true) {
    if (props.logo) {
      image = <img src={props.logo} height="15" alt={props.name} />;
    } else {
      image = <span className="noimage">no image</span>;
    }
  }
  return (
    <li className="ShopListItem" onClick={props.onClick}>
      {props.name} | {props.address} {image}
    </li>
  );
}

export default ShopListItem;
