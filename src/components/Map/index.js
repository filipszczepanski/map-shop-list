import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomMarker from './CustomMarker';
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
    this.renderMarkers()
  }

  renderMarkers() {
    this.markers = this.props.shopListData.map( (currentShopInfo, index) => {
      return this.renderMarker(currentShopInfo, index)
    });
  }

  renderMarker(currentShopInfo, id) {

    const map = this.map;
    const position = this.parsePosition(currentShopInfo);
    const { logo } = currentShopInfo;
    const marker = new CustomMarker(position, logo, map);

    marker.addListener('click', () => {
      this.props.onClickMarker(id);
    });

    marker.setMap(map);
    return marker;

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
    onClickMarker: (id)=> {
      dispatch(setChoosedShopItem(id))
    }
  }
}

Map = connect(mapStateToProps, mapDispatchToProps)(Map);

export default Map;
