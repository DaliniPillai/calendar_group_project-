const timeConversions = {
  // returns a string of the format "11pm-12pm" given epoch times of timeStart and timeEnd
  printTimeRange: (timeStart,timeEnd) => {
    let timeStartHours = new Date(parseInt(timeStart)).getHours();
    let timeEndHours = new Date(parseInt(timeEnd)).getHours();
    const timeStartMins = new Date(parseInt(timeStart)).getMinutes();
    const timeEndMins = new Date(parseInt(timeEnd)).getMinutes(); 
    const startAmPm = (timeStartHours < 12) ? 'am' : 'pm';
    const endAmPm = (timeEndHours < 12) ? 'am' : 'pm';
    timeStartHours = (timeStartHours === 0) ? 12 : timeStartHours % 12;
    timeEndHours = (timeEndHours === 0) ? 12 : timeEndHours % 12;
    const startMins = (timeStartMins >= 0 && timeStartMins < 10) ? ('0' + timeStartMins) : timeStartMins; 
    const endMins = (timeEndMins >= 0 && timeEndMins < 10) ? ('0' + timeEndMins) : timeEndMins; 
   return timeStartHours + ':' + startMins + startAmPm + '-' + timeEndHours + ':' + endMins + endAmPm;
  },
  // returns an epoch time, given integer values of year, month, date and
  // string values for hours and minutes, and 'am' or 'pm' in the ampm argument
  timeAmPmToEpoch: (year, month, date, hours, mins, ampm) => {
    let h = parseInt(hours);
    let m = parseInt(mins);
    h = (ampm === 'am') ? h : h + 12;
    if (ampm === 'am' && (h === 24 || h === 12)) {
      h = 0;
    }
    if (ampm === 'pm' && h === 24) {
      h = 12;
    }
    const time = new Date(year, month, date, h, m);
    return time.valueOf();
  }
};

export default timeConversions;