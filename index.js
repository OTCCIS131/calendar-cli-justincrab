const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

let year = moment().range('year');
// _.forEach(year.by('months'));
console.log('     September');
console.log('S  M  T  W  TH F  S');

for (let month of range.by(12)) {
  month.format('YYYY-MM-DD');
}
console.log(month);
console.log(year);