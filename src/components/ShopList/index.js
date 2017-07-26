import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShopListItem from '../ShopListItem';
import './style.css'

class ShopList extends Component {

  render() {
    const shopsData = this.props.shopsData;
    const shopListItems = shopsData.map((item, index) => {
      return (
        <ShopListItem key={index} name={item.siec} address={item.adres} logo={item.logo} onClick="" />
      )
    })

    return (
      <ul className="ShopList">
        {shopListItems}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const ShopListConnected = connect(mapStateToProps)(ShopList);

export default ShopListConnected;
