class CustomMarker {
  constructor(position, image, map, name, maps) {
    this.position_ = position;
    this.image_ = image;
    this.map_ = map;
    this.name_ = name;
    this.maps_ = maps;
    this.div_ = null;
  }

  _createMarkerDOM() {
    const div = document.createElement('div');
    div.className = 'custom-marker'

    const arrow = document.createElement('div');
    arrow.className = 'custom-marker__arrow'

    div.appendChild(arrow);

    const title = document.createElement('h2');
    title.className = 'custom-marker__title';
    title.textContent = this.name_;
    div.appendChild(title);

    if (this.image_) {
      const img = document.createElement('img');
      img.className = 'custom-marker__image';
      img.src = this.image_;
      img.onload = () => {
        title.style.display = 'none';
        div.appendChild(img);
      }
    }

    this.div_ = div;
  }

  onAdd() {
    this._createMarkerDOM();

    // Add the element to the "overlayImage" pane.
    const panes = this.getPanes();
    panes.overlayImage.appendChild(this.div_);

    this._setupClickListener();
  }

  draw() {
    const overlayProjection = this.getProjection();
    const point = overlayProjection.fromLatLngToDivPixel(new this.maps_.LatLng(this.position_));
    const div = this.div_;
    const movedX = point.x - (getComputedStyle(div).width.replace('px', '') * 0.5);
    const movedY = point.y - getComputedStyle(div).height.replace('px', '') - 15;
    const scale = this.map.getZoom() * 0.05;

    div.style.left = movedX + 'px';
    div.style.top = movedY + 'px';
    div.style.transform = 'scale('+scale+')';
  }

  _setupClickListener() {
    this.maps_.event.addDomListener(this.div_, 'click', () => {
      this.maps_.event.trigger(this, 'click');
    });
  }
}


export default CustomMarker;
