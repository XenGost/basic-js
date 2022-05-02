const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
 let month = date.getMonth();

  switch(month) {
  case 00:
  case 01:
  case 11:
      return "winter"

  case 02:
  case 03:
  case 04:
      return "spring"
              
  case 05:
  case 06:
  case 07:
      return "summer"
              
  case 08:
  case 09:
  case 10:
      return "autumn"
  default:
      return 'Unable to determine the time of year!'
}
}

module.exports = {
  getSeason
};
