const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const dataschema = new Schema({
    machine :'number',
    date : 'Date', 
    userName:'string', 
    hrs:'number',  
    tmp:'number',  
})
//here the formdata
const Formdata = mongoose.model('mchine',dataschema);
module.exports = Formdata;