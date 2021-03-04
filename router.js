const router = require('express').Router();

router.use('/calender', require('./calender/comingWeeks.router'));
router.use('/routineWeek-calender', require('./calender/routine.router'));
router.use('/weekly-calender', require('./calender/getCalender.router'));

module.exports = router;
