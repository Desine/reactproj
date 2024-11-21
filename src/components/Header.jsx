import React, { useState, useEffect } from "react";
import { DAYS, MONTHS } from "../utils/date";

export default function Header() {
  const [time, setTime] = useState("day");
  const date = new Date();
  let hours = date.getHours();
  let month = date.getMonth();

  useEffect(() => {

    let season
    if(month === 12 || month === 1 || month === 2) season = 'winter'
    if(month === 3 || month === 4 || month === 5) season = 'spring'
    if(month === 6 || month === 7 || month === 8) season = 'summer'
    if(month === 9 || month === 10 || month === 11) season = 'autumn'

    let dayPart = (hours > 19 || hours < 7) ? "night" : "day"

    setTime(season + '-' + dayPart)

  }, [hours, month]);

  return (
    <div className={`header ${time}`}>
      <h1>{DAYS[date.getDay()]}</h1>
      <span>
        {MONTHS[date.getMonth()]}, {date.getDate()}
      </span>
    </div>
  );
}
