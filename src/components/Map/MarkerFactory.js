import CustomMarker from './CustomMarker';

export default class MarkerFactory {
  static createMarker(position, image, map, name, googleMaps) {
    function Marker(position, image, map, name, maps) {
      this.position_ = position;
      this.image_ = image;
      this.map_ = map;
      this.name_ = name;
      this.maps_ = maps;
      this.div_ = null;
    }
    Marker.prototype = new googleMaps.maps.OverlayView();

    Object.defineProperties(Marker.prototype, Object.getOwnPropertyDescriptors(CustomMarker.prototype));
    let marker = new Marker(position, image, map, name, googleMaps.maps);
    marker.setMap(map);
    return marker;
  }
}
