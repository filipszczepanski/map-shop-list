import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { connect } from 'react-redux';
import { getGoogleMaps } from '../../actions/googleMaps';
import { setChoosedShopItem } from '../../actions/shopList';
import MarkerFactory from './MarkerFactory';
import InfoWindow from '../InfoWindow';
import './style.css';

const GOOGLE_MAPS_KEY = 'AIzaSyAYNZNGTHsCS6dHRf67nbepeteMI8_qigI';
const GOOGLE_MAPS_SRC = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&v=3.28`;

class Map extends Component {

  constructor(props) {
    super();
    props.onConstructing(GOOGLE_MAPS_SRC);
    this.position = this.parsePosition(props.currentShopInfo);
  }

  componentDidUpdate() {
    if (this.props.googleMaps.maps && !this.map) {
      this.initMap();
    }
  }

  initMap() {
    this.map = new this.props.googleMaps.maps.Map(this.refs.map, {
      center: this.position,
      zoom: 18
    });

    this.renderMarkers();
  }

  renderMarkers() {
    this.props.shopListData.forEach(this.renderMarker.bind(this));
  }

  renderMarker(currentShopInfo, id) {

    const map = this.map;
    const position = this.parsePosition(currentShopInfo);
    const { logo } = currentShopInfo;
    const name = currentShopInfo.siec;
    const googleMaps = this.props.googleMaps;

    const marker = MarkerFactory.createMarker(position, logo, map, name, googleMaps);

    const address = currentShopInfo.adres;
    const openHoursArr = currentShopInfo.godziny;
    const openHours = openHoursArr.length === 1 ? openHoursArr[0] : null;
    const infoWindowProps = {name, address,logo, openHours}

    const infowindow = new this.props.googleMaps.maps.InfoWindow({
      content: ReactDOMServer.renderToStaticMarkup(<InfoWindow {...infoWindowProps}/>),
      position,
      pixelOffset: new this.props.googleMaps.maps.Size(0, -80)
    });

    marker.addListener('click', () => {
      infowindow.open(this.map);
      this.props.onClickMarker(id);
    });

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
      <div id="Map" className="Map" ref="map">
        Loading map...
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    googleMaps: state.googleMaps,
    shopListData: state.shopListData.data,
    choosed: state.shopList.choosed,
    currentShopInfo: state.shopListData.data[state.shopList.choosed]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onConstructing: (src) => {
      dispatch(getGoogleMaps(src));
    },

    onClickMarker: (id) => {
      dispatch(setChoosedShopItem(id))
    }
  }
};

Map = connect(mapStateToProps, mapDispatchToProps)(Map);

export default Map;
