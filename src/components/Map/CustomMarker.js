export default class CustomMarker extends window.google.maps.OverlayView {
  constructor(position, image, map) {
    super();
    this.position_ = position;
    this.image_ = image;
    this.map_ = map;
    this.div_ = null;

    this.setMap(map);
  }

  onAdd() {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.border = 'none';
    div.style.borderWidth = '0px';
    div.style.position = 'absolute';
    div.style.backgroundColor = '#fff';
    div.style.width = '160px';
    div.style.height = '80px';
    div.style.textAlign = 'center';
    div.style.lineHeight = '80px';
    div.style.padding = '15px';
    div.style.borderRadius = '5px';
    div.style.boxShadow = '0px 0px 3px #c0c0c0';
    div.style.cursor = 'pointer';

    const wrapArrow = document.createElement('div');
    wrapArrow.style.display = 'block';
    wrapArrow.style.width = '30px';
    wrapArrow.style.height = '15px';
    wrapArrow.style.overflow = 'hidden';
    wrapArrow.style.position = 'absolute';
    wrapArrow.style.bottom = '-15px';
    wrapArrow.style.left = '50%';
    wrapArrow.style.marginLeft = '-15px';

    const arrow = document.createElement('div');
    arrow.style.display = 'block';
    arrow.style.position = 'relative';
    arrow.style.top = '-22px';
    arrow.style.width = '30px';
    arrow.style.height = '30px';
    arrow.style.backgroundColor = '#fff';
    arrow.style.transform = 'rotate(45deg)';
    arrow.style.boxShadow = div.style.boxShadow

    wrapArrow.appendChild(arrow);
    div.appendChild(wrapArrow);

    // Create the img element and attach it to the div.
    var img = document.createElement('img');
    img.style.position = 'relative';
    img.src = this.image_;
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.verticalAlign = 'baseline';
    div.appendChild(img);

    this.div_ = div;

    // Add the element to the "overlayImage" pane.
    var panes = this.getPanes();
    panes.overlayImage.appendChild(this.div_);
    this.addClickEvent();
  }

  draw() {
    const overlayProjection = this.getProjection();
    const point = overlayProjection.fromLatLngToDivPixel(new window.google.maps.LatLng(this.position_));
    const div = this.div_;
    const movedX = point.x - (div.style.width.replace('px', '') * 0.5);
    const movedY = point.y - div.style.height.replace('px', '') - 15;
    const scale = this.map.getZoom() * 0.05;

    div.style.left = movedX + 'px';
    div.style.top = movedY + 'px';
    div.style.transform = 'scale('+scale+')';
  }

  addClickEvent() {
    const div = this.div_;
    window.google.maps.event.addDomListener(div, 'click', () => {
      window.google.maps.event.trigger(this, 'click');
    });
  }

}
