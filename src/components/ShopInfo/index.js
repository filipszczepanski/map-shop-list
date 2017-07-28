import React from 'react';
import { connect } from 'react-redux';
import OpenHours from '../OpenHours';
import './style.css';

const ShopInfo = ( {logo, name, siec, adres, godziny, onClick}) => {
  let image;

  if (logo) {
    image = <img src={logo} height="20" alt={name} />;
  } else {
    image = <span className="noimage">no image</span>;
  }

  return (
    <div className="ShopInfo" onClick={onClick}>
      {image} {siec}
      <p>{adres}</p>
      <OpenHours openHours={godziny[0]} />
    </div>
  );
}

const mapStateToProps = state => {
  const props = state.shopListData.data[state.shopList.choosed];
  return {
    ...props
  }
}

const ShopInfoConnected = connect(mapStateToProps)(ShopInfo);

export default ShopInfoConnected;
