import React from 'react';
import OpenHours from '../OpenHours';

const WindowInfo = ({name, address, logo, openHours}) => {

  const style = {
    textAlign: 'left',
    width: 260
  }

  return (
    <div id="content" style={style}>
      <h2 id="firstHeading" className="firstHeading">
        {logo ? <img src={logo} height="20" alt={name} /> : null}  {name}
      </h2>
      <div id="bodyContent">
        <p>{address}</p>
        <hr />
        <OpenHours openHours={openHours} />
      </div>
    </div>
  )
}

export default WindowInfo;
