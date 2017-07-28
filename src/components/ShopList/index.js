import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShopListItem from '../ShopListItem';
import { setChoosedShopItem } from '../../actions/shopListItems';
import './style.css';


class ShopList extends Component {

  render() {
    const shopListData = this.props.shopListData;
    const shopListItems = shopListData.map((item, index) => {
      const isChecked = this.props.shopList.choosed === index;
      return (
        <ShopListItem key={index} name={item.siec} address={item.adres} logo={item.logo} onClick={()=>this.props.onClickShopListItem(index)} isChecked={isChecked}/>
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
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onClickShopListItem: (id)=> {
      dispatch(setChoosedShopItem(id))
    }
  }
}

const ShopListConnected = connect(mapStateToProps, mapDispatchToProps)(ShopList);

export default ShopListConnected;
