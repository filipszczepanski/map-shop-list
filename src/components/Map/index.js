import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { connect } from 'react-redux';
import CustomMarker from './CustomMarker';
import InfoWindow from '../InfoWindow';
import { setChoosedShopItem } from '../../actions/shopList';
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
    const name = currentShopInfo.siec;
    const marker = new CustomMarker(position, logo, map, name);

    const address = currentShopInfo.adres;
    const openHoursArr = currentShopInfo.godziny;
    const openHours = openHoursArr.length === 1 ? openHoursArr[0] : null;
    const infoWindowProps = {name, address,logo, openHours}

    const infowindow = new window.google.maps.InfoWindow({
      content: ReactDOMServer.renderToStaticMarkup(<InfoWindow {...infoWindowProps}/>),
      position,
      pixelOffset: new window.google.maps.Size(0, -80)
    });

    marker.addListener('click', () => {
      infowindow.open(this.map);
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
    currentShopInfo: state.shopListData.data[state.shopList.choosed],
    shopListData: state.shopListData.data,
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
