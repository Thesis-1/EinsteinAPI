var mongoose = require ('mongoose');

var uristring = process.env.MONGODB_URI || 'mongodb://localhost/einstein'

mongoose.connect(uristring,(err, res) => {
    if(err) {
        console.log('Error connecting to: ' + uristring + '. ' + err);
    } else {
        console.log('Successfully connected to: ' + uristring);
    }
})

