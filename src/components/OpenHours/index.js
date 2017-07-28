import React from 'react';

const OpenHours = ({openHours}) => {
  const polishDays = {
    Sunday: 'Niedziela',
    Monday: 'Poniedziałek',
    Tuesday: 'Wtorek',
    Wednesday: 'Środa',
    Thursday: 'Czwartek',
    Friday: 'Piątek'
  };

  const nowDate = new Date();
  const today = Object.keys(polishDays)[nowDate.getDay()];

  const openHoursItems = Object.keys(polishDays).map((key, index) => {
    const styleItem = {padding: '5px'};
    const styleHours = {float: 'right'};

    if (today === key) {
      styleItem.backgroundColor = '#f0f0f0';
      styleItem.fontWeight = 'bold';
    }

    return (
      <div key={key} style={styleItem}>
        {polishDays[key]}:&nbsp;<span style={styleHours}>{openHours[key]}</span>
      </div>
    )
  });

  return (
    <div>{openHoursItems}</div>
  )
}

export default OpenHours;
