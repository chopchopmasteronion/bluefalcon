// app/models/reminder.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our reminder model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Reminder', {
    title : {type : String},
    time :  {type : Date},
    repeat : {type : Number}
});
