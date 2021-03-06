import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShopListItem from '../ShopListItem';
import { setChoosedShopItem } from '../../actions/shopList';
import './style.css';


class ShopList extends Component {

  render() {
    const data = this.props.data;
    const shopListItems = data.map((item, index) => {
      const isChecked = this.props.choosed === index;
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
    ...state.shopList,
    ...state.shopListData
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
