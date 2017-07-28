import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { connect } from 'react-redux';
import { setChoosedShopItem } from '../../actions/shopListItems';

import './style.css';

class Map extends Component {

  componentDidMount() {
    const currentShopInfo = this.props.currentShopInfo;
    this.position = this.parsePosition(currentShopInfo);
    this.initMap()
  }

  initMap() {
    this.map = new window.google.maps.Map(this.refs.map, {
       center: this.position,
       zoom: 18
    });
  }

  getCurrentPosition() {
    return this.parsePosition(this.props.currentShopInfo)
  }

  parsePosition(currentShopInfo) {
    return {
     lat: parseFloat(currentShopInfo.latitude),
     lng: parseFloat(currentShopInfo.longitude)
    }
  }

  centerMap() {
    this.map.panTo(this.getCurrentPosition());
  }

  render() {
    if (this.map) {
      this.centerMap();
    }

    return (
      <div id="Map" className="Map" ref="map" >
        Loading map...
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentShopInfo: state.shopListData[state.shopList.choosed],
    shopListData: state.shopListData,
    choosed: state.shopList.choosed
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

Map = connect(mapStateToProps, mapDispatchToProps)(Map);

export default Map;
